using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;

namespace ProjectGamePlay
{
    public enum TileStateEnum
    {
        Collected,
        InBlock,
        Selected,
        FloorBehind
    }

    public class SlotHolder
    {
        private List<SlotController> _usedSlots;
        private Dictionary<int, int> _listContainedTileId;
        private int _currentFirstFreeSlotIndex = 0;
        private int _numOfTilesInSlots = 0;
        private int _numberOfSlots = 7;
        private int _numberOfTiles = 0;

        public SlotHolder(Transform slotRoot, int numberOfTiles){
            _usedSlots = new List<SlotController>();
            for (int i = 0; i < _numberOfSlots + 3; i++)
            {
                _usedSlots.Add(new SlotController(slotRoot.GetChild(i)));
            }
            for (int i = 0; i < _numberOfSlots + 3; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots + 3 -1 ? null : _usedSlots[i + 1]);
            }

            _currentFirstFreeSlotIndex = 0;
            _numOfTilesInSlots = 0;
            _numberOfTiles = numberOfTiles;
            _listContainedTileId = new Dictionary<int, int>();
        }

        public (int, SlotController) GetSlotFree()
        {
            if (_currentFirstFreeSlotIndex >= _numberOfSlots + 3)
                return (-1, null);
            return (_currentFirstFreeSlotIndex, _usedSlots[_currentFirstFreeSlotIndex++]);
        }

        public (int, SlotController) GetSlotFreeForTile(int id)
        {
            if (!_listContainedTileId.ContainsKey(id))
            {
                _numOfTilesInSlots++;
                return GetSlotFree();
            }

            if(_listContainedTileId[id] == 0){
                _numOfTilesInSlots++;
                return GetSlotFree();
            }

            int index = _currentFirstFreeSlotIndex + 1;
            for (int i = _currentFirstFreeSlotIndex - 1; i > 0; i--)
            {
                index = index - 1;
                if (_usedSlots[i].ContainedTile.Id == id)
                {
                    index += 1;
                    break;
                }
                if (_usedSlots[i].ContainedTile.TileState != TileStateEnum.Collected)
                    _usedSlots[i].MoveTileToRightSlot();
            }
            _currentFirstFreeSlotIndex++;
            _numOfTilesInSlots++;
            return (index - 1, _usedSlots[index - 1]);
        }

        public void AddIdTile(int id){
            if (!_listContainedTileId.ContainsKey(id))
            {
                _listContainedTileId.Add(id, 1);
                return;
            }

            if(_listContainedTileId[id] == 0){
                _listContainedTileId[id] = 1;
                return;
            }

            _listContainedTileId[id] += 1;
        }

        public async void CollectTripleTile(int id, int index)
        {

            _numOfTilesInSlots -= 3;
            _listContainedTileId.Remove(id);
            int i = index;
            PlayableAdsManager.Instance.tileCollectSound.Play();
            for (int j = 0; j < 3; j++)
            {
                _usedSlots[index - j].ContainedTile.AnimCollect();
                _usedSlots[index - j].ContainedTile = null;
            }
            await Task.Delay(TimeSpan.FromSeconds(0.75f));
            var step = 3;
            if(index - 3 >= 0 && (_usedSlots[index - 3].ContainedTile == null || _usedSlots[index - 3].ContainedTile.TileState == TileStateEnum.Collected)){
                Debug.Log("Double move to left");
                step = 6;
            }
            Debug.Log("Step: " + step);
            for (i = index + 1; i < _currentFirstFreeSlotIndex; i++)
            {
                _usedSlots[i].MoveTileToLeftSlotWithStep(step);
            }
            _currentFirstFreeSlotIndex -= step;
            _numberOfTiles -= 3;
            if (_numberOfTiles == 0)
            {
                PlayableAdsManager.Instance.ShowPopUpPlayNow();
            }
        }

        public Dictionary<int, int> ListContainedTileId
        {
            get
            {
                return _listContainedTileId;
            }
        }

    }
}
