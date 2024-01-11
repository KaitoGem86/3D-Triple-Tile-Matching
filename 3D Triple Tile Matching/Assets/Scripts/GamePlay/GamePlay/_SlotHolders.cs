using System.Collections.Generic;
using Core.Manager;
using DG.Tweening;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.GamePlay
{
    public class _SlotHolders : MonoBehaviour
    {
        private int _numberOfSlots = 7;
        private int _currentFirstFreeSlotIndex = 0;

        // use queue instead of list
        private List<_SlotController> _usedSlots;
        private Dictionary<int, int> _listContainedTileId;

        private async void Awake()
        {
            _usedSlots = new List<_SlotController>();
            _listContainedTileId = new Dictionary<int, int>();
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("Slot");
            for (int i = 0; i < _numberOfSlots; i++)
            {
                RectTransform tmpSlot = Instantiate(tmp, transform).GetComponent<RectTransform>();
                _usedSlots.Add(new _SlotController(tmpSlot, null, null));
            }
            for (int i = 0; i < _numberOfSlots; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots - 1 ? null : _usedSlots[i + 1]);
            }
        }

        public (int, _SlotController) GetSlotFree()
        {
            if (_currentFirstFreeSlotIndex >= _numberOfSlots)
                return (-1, null);
            return (_currentFirstFreeSlotIndex, _usedSlots[_currentFirstFreeSlotIndex++]);
        }

        public (int, _SlotController) GetSlotFreeForTile(int id)
        {
            if (!_listContainedTileId.ContainsKey(id))
            {
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
                _usedSlots[i].MoveTileToRightSlot();
            }
            _currentFirstFreeSlotIndex++;
            return (index - 1, _usedSlots[index - 1]);
        }

        /// <summary>
        /// Collect all triple tile, include move tiles to left slot three time and remove their id from list;
        /// index is the last tile's index of group
        /// </summary>
        public void CollectTripleTile(int id, int index)
        {
            if (_listContainedTileId[id] == 3)
            {
                _listContainedTileId.Remove(id);
                int i = index;
                Sequence sequence = DOTween.Sequence();
                for (int j = 0; j < 3; j++)
                {
                    sequence.Join(_usedSlots[index - j].ContainedTile.AnimatedCollected());
                }
                sequence.OnComplete(() =>
                {
                    for (i = index + 1; i < _currentFirstFreeSlotIndex; i++)
                    {
                        _usedSlots[i].MoveTileToLeftSlotWithStep(3);
                    }
                    _currentFirstFreeSlotIndex -= 3;
                    _GameManager.Instance.NumOfTile -= 3;
                    _GameManager.Instance.NumOfFreeSlot = _numberOfSlots - _currentFirstFreeSlotIndex;
                });
            }
        }

        public void CheckLoseGame()
        {
            _GameManager.Instance.NumOfFreeSlot = _numberOfSlots - _currentFirstFreeSlotIndex;
        }

        public Quaternion SyncRotation
        {
            get
            {
                if (_usedSlots[0].ContainedTile == null) return Quaternion.identity;
                else
                {
                    return _usedSlots[0].ContainedTile.transform.rotation;
                }
            }
        }
    }
}