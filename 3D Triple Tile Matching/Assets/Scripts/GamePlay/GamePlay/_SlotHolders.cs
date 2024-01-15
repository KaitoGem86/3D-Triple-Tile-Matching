using System.Collections.Generic;
using Core.Manager;
using DG.Tweening;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.GamePlay
{
    public class _SlotHolders
    {
        private readonly GameObject _slotHolderObject;
        private readonly Vector3 _pivotPosition;

        public _SlotHolders(GameObject slotHolderObject, Vector3 pivotPosition)
        {
            _slotHolderObject = slotHolderObject;
            _pivotPosition = pivotPosition;
        }

        private int _numberOfSlots = 7;
        private int _currentFirstFreeSlotIndex = 0;
        private int _numOfTilesInSlots = 0;

        // use queue instead of list
        private List<_SlotController> _usedSlots;
        private Dictionary<int, int> _listContainedTileId;

        public async void Awake()
        {
            _usedSlots = new List<_SlotController>();
            _listContainedTileId = new Dictionary<int, int>();
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("SlotObject");
            for (int i = 0; i < _numberOfSlots; i++)
            {
                Transform tmpSlot = MonoBehaviour.Instantiate(tmp, _slotHolderObject.transform).GetComponent<Transform>();
                _usedSlots.Add(new _SlotController(tmpSlot, null, null));
            }
            for (int i = 0; i < 3; i++)
            {
                Transform tmpSlot = MonoBehaviour.Instantiate(tmp, _slotHolderObject.transform).GetComponent<Transform>();
                _usedSlots.Add(new _SlotController(tmpSlot, null, null));
                _usedSlots[_numberOfSlots + i].SetSpriteSubSlot();
            }
            for (int i = 0; i < _numberOfSlots + 3; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots + 3 - 1 ? null : _usedSlots[i + 1]);
            }
            SetPositionSlot();
        }

        public (int, _SlotController) GetSlotFree()
        {
            if (_currentFirstFreeSlotIndex >= _numberOfSlots + 3)
                return (-1, null);
            return (_currentFirstFreeSlotIndex, _usedSlots[_currentFirstFreeSlotIndex++]);
        }

        public (int, _SlotController) GetSlotFreeForTile(int id)
        {
            if (!_listContainedTileId.ContainsKey(id))
            {
                _numOfTilesInSlots++;
                _listContainedTileId.Add(id, 1);
                return GetSlotFree();
            }

            _listContainedTileId[id] += 1;
            int index = _currentFirstFreeSlotIndex + 1;
            for (int i = _currentFirstFreeSlotIndex - 1; i > 0; i--)
            {
                index = index - 1;
                if (_usedSlots[i].ContainedTile.Id == id)
                {
                    index += 1;
                    break;
                }
                if(_usedSlots[i].ContainedTile.TileState != Tile._TileStateEnum.Collected)
                    _usedSlots[i].MoveTileToRightSlot();
            }
            _currentFirstFreeSlotIndex++;
            _numOfTilesInSlots++;
            return (index - 1, _usedSlots[index - 1]);
        }

        /// <summary>
        /// Collect all triple tile, include move tiles to left slot three time and remove their id from list;
        /// index is the last tile's index of group
        /// </summary>
        public void CollectTripleTile(int id, int index)
        {

            _numOfTilesInSlots -= 3;
            _listContainedTileId.Remove(id);
            int i = index;
            Sequence sequence = DOTween.Sequence();
            for (int j = 0; j < 3; j++)
            {
                _usedSlots[index - j].ContainedTile.TileState = Tile._TileStateEnum.Collected;
                sequence.Join(_usedSlots[index - j].ContainedTile.AnimatedCollected());
            }
            sequence.OnComplete(() =>
            {
                Debug.Log(index + " " + _currentFirstFreeSlotIndex);
                for (i = index + 1; i < _currentFirstFreeSlotIndex; i++)
                {
                    _usedSlots[i].MoveTileToLeftSlotWithStep(3);
                }
                _currentFirstFreeSlotIndex -= 3;
                _GameManager.Instance.NumOfTile -= 3;
                _GameManager.Instance.NumOfFreeSlot = _numberOfSlots - _numOfTilesInSlots;
            });
        }


        public void CheckLoseGame()
        {
            _GameManager.Instance.NumOfFreeSlot = _numberOfSlots - _numOfTilesInSlots;
        }

        public Quaternion SyncRotation
        {
            get
            {
                if (_usedSlots[0].ContainedTile == null || _numOfTilesInSlots <= 1) return Quaternion.identity;
                else
                {
                    return _usedSlots[0].ContainedTile.transform.rotation;
                }
            }
        }

        public int NumOfTilesWithId(int id) => _listContainedTileId[id];

        private void SetPositionSlot(){
            float size = _usedSlots[0].Transform.GetComponent<SpriteRenderer>().sprite.bounds.size.x;
            for(int i = 0; i < _numberOfSlots + 3; i++){
                _usedSlots[i].Transform.position = _pivotPosition + new Vector3(size * i + 0.005f*i, 0, 0);
            }
        }

        public List<_SlotController> UsedSlots => _usedSlots;
    }
}