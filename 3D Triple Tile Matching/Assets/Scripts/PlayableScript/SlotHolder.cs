using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UnityEngine;

namespace ProjectGamePlay
{
    public enum TileStateEnum
    {
        Collected,
        UnCollected
    }

    public class SlotHolder
    {
        private List<SlotController> _usedSlots;
        private Dictionary<int, int> _listContainedTileId;
        private int _currentFirstFreeSlotIndex = 0;
        private int _numOfTilesInSlots = 0;
        private int _numberOfSlots = 7;

        public SlotHolder(Transform slotRoot){
            _usedSlots = new List<SlotController>();
            for (int i = 0; i < _numberOfSlots; i++)
            {
                _usedSlots.Add(new SlotController(slotRoot.GetChild(i)));
            }
            for (int i = 0; i < _numberOfSlots; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots -1 ? null : _usedSlots[i + 1]);
            }

            _currentFirstFreeSlotIndex = 0;
            _numOfTilesInSlots = 0;
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
                _listContainedTileId.Add(id, 1);
                return GetSlotFree();
            }

            if(_listContainedTileId[id] == 0){
                _numOfTilesInSlots++;
                _listContainedTileId[id] = 1;
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
                if (_usedSlots[i].ContainedTile.TileState != TileStateEnum.Collected)
                    _usedSlots[i].MoveTileToRightSlot();
            }
            _currentFirstFreeSlotIndex++;
            _numOfTilesInSlots++;
            return (index - 1, _usedSlots[index - 1]);
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
            }
            await Task.Delay(TimeSpan.FromSeconds(0.5f));
            for (i = index + 1; i < _currentFirstFreeSlotIndex; i++)
            {
                _usedSlots[i].MoveTileToLeftSlotWithStep(3);
            }
            _currentFirstFreeSlotIndex -= 3;
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
