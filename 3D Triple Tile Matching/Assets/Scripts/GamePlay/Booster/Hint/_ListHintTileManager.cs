using System.Collections.Generic;
using System.Linq;
using Core.Manager;
using Core.Tile;
using UnityEngine;

namespace Core.GamePlay.Booster
{
    public class _ListHintTileManager
    {
        private Dictionary<int, List<_TileController>> _listTileCollect;

        public _ListHintTileManager(List<_TileController> listTile)
        {
            _listTileCollect = new Dictionary<int, List<_TileController>>();
            SetStartHintList(listTile);
        }

        private void SetStartHintList(List<_TileController> listTile)
        {
            foreach (_TileController tile in listTile)
            {
                if (tile.CheckCanHint())
                    AddTile(tile);
            }
            Debug.Log(_listTileCollect.Count);
        }

        public void AddTile(_TileController tile)
        {
            if (!_listTileCollect.ContainsKey(tile.Id))
                _listTileCollect.Add(tile.Id, new List<_TileController>());
            if (!_listTileCollect[tile.Id].Contains(tile))
                _listTileCollect[tile.Id].Add(tile);
        }

        public void RemoveTile(_TileController tile)
        {
            if (_listTileCollect.ContainsKey(tile.Id))
                _listTileCollect[tile.Id].Remove(tile);
            Debug.Log("Hint tile has id " + tile.Id + " has been removed, remaining tile is " + _listTileCollect[tile.Id].Count);
        }

        public void GetHintTile()
        {
            if (_GameManager.Instance.SlotHolders.ListContainedTileId?.Count != 0)
            {
                var sortedDict = _GameManager.Instance.SlotHolders.ListContainedTileId.OrderByDescending(pair => pair.Value);
                foreach (var keyValuePair in sortedDict)
                {
                    if (_listTileCollect.ContainsKey(keyValuePair.Key) && _listTileCollect.ContainsKey(keyValuePair.Key) && _listTileCollect[keyValuePair.Key].Count >= 3 - keyValuePair.Value)
                    {
                        for (int i = 0; i < 3 - keyValuePair.Value; i++)
                        {
                            _listTileCollect[keyValuePair.Key][0].OnMouseDown();
                        }
                        return;
                    }
                }
            }

            foreach (KeyValuePair<int, List<_TileController>> pair in _listTileCollect)
            {
                if (pair.Value.Count >= 3)
                {
                    pair.Value[0].OnMouseDown();
                    pair.Value[0].OnMouseDown();
                    pair.Value[0].OnMouseDown();
                    return;
                }
            }
        }
    }
}