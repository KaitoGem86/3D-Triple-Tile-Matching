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
        FloorBehind,
        InTutorial,
    }

    public class SlotHolder
    {
        private List<SlotController> _usedSlots;
        private Dictionary<int, int> _listContainedTileId;
        private int _currentFirstFreeSlotIndex = 0;
        private int _numOfTilesInSlots = 0;
        private int _numberOfSlots = 7;
        private int _numberOfTiles = 0;
        private int _numOfTilesMoving = 0;

        public SlotHolder(Transform slotRoot, int numberOfTiles)
        {
            _usedSlots = new List<SlotController>();
            for (int i = 0; i < _numberOfSlots + 3; i++)
            {
                _usedSlots.Add(new SlotController(slotRoot.GetChild(i)));
            }
            for (int i = 0; i < _numberOfSlots + 3; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots + 3 - 1 ? null : _usedSlots[i + 1]);
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

            if (_listContainedTileId[id] == 0)
            {
                _numOfTilesInSlots++;
                return GetSlotFree();
            }

            int index = _currentFirstFreeSlotIndex + 1;
            for (int i = _currentFirstFreeSlotIndex - 1; i > 0; i--)
            {
                index = index - 1;
                if (_usedSlots[i].ContainedTile == null)
                {
                    continue;
                }
                if (_usedSlots[i].ContainedTile != null && _usedSlots[i].ContainedTile.Id == id)
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

        public void AddIdTile(int id)
        {
            if (!_listContainedTileId.ContainsKey(id))
            {
                _listContainedTileId.Add(id, 1);
                return;
            }

            if (_listContainedTileId[id] == 0)
            {
                _listContainedTileId[id] = 1;
                return;
            }

            _listContainedTileId[id] += 1;
        }

        public bool CheckLoseGame()
        {
            if (_numOfTilesMoving > 0)
                return false;
            return _numOfTilesInSlots >= _numberOfSlots;
        }

        public async void CollectTripleTile(int id, int index)
        {
            _listContainedTileId.Remove(id);
            int i = index;
            PlayableAdsManager.Instance.tileCollectSound.Play();
            for (int j = 0; j < 3; j++)
            {
                _usedSlots[index - j].ContainedTile.AnimCollect();
                _usedSlots[index - j].ContainedTile = null;
            }
            await Task.Delay(TimeSpan.FromSeconds(0.75f));
            int start = 9999;
            int step_ = 0;
            for(int j = index - 2; j < 8; j++){
                if(_usedSlots[j].ContainedTile == null || _usedSlots[j].ContainedTile.TileState == TileStateEnum.Collected){
                    step_ ++;
                }
                if(_usedSlots[j].ContainedTile != null && _usedSlots[j].ContainedTile.TileState != TileStateEnum.Collected){
                    start = Mathf.Min(start, j);
                    break;
                }
            }
            for(int j = start; j < Mathf.Min(start + _numOfTilesInSlots, 8 ); j ++){
                
                if (_usedSlots[j].ContainedTile == null)
                {
                    continue;
                }
                if (_usedSlots[j].ContainedTile.TileState == TileStateEnum.Collected)
                {
                    continue;
                }
                _usedSlots[j].MoveTileToLeftSlotWithStep(step_);
            }
            _currentFirstFreeSlotIndex -= 3;
            _numberOfTiles -= 3;
            if(PlayableAdsManager.Instance.IsInTutorial){
                Debug.Log("Tutorial");
                PlayableAdsManager.Instance.IsInTutorial = false;
                PlayableAdsManager.Instance.BaseStartSceneManager.CompleteTutorialOfAds();
                return;
            }
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

        public int NumberOfTilesInSlots
        {
            get
            {
                return _numOfTilesInSlots;
            }
            set
            {
                _numOfTilesInSlots = value;
            }
        }

        public int NumOfTilesMoving
        {
            get
            {
                return _numOfTilesMoving;
            }
            set
            {
                _numOfTilesMoving = value;
            }
        }
    }
}
