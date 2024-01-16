using System.Collections.Generic;
using Core.Tile;
using UnityEngine;

namespace Core.GamePlay.Booster
{
    public class _ListHintTileManager{
        private Dictionary<int, List<_TileController>> _listTileCollect;

        public _ListHintTileManager(List<_TileController> listTile){
            _listTileCollect = new Dictionary<int, List<_TileController>>();
            SetStartHintList(listTile);
        }

        private void SetStartHintList(List<_TileController> listTile){
            foreach(_TileController tile in listTile){
                if(tile.CheckCanHint())
                    AddTile(tile);
            }
            Debug.Log(_listTileCollect.Count);
        }

        public void AddTile(_TileController tile){
            if(!_listTileCollect.ContainsKey(tile.Id))
                _listTileCollect.Add(tile.Id, new List<_TileController>());
            if(!_listTileCollect[tile.Id].Contains(tile))
                _listTileCollect[tile.Id].Add(tile);
        }

        public void RemoveTile(_TileController tile){
            if(_listTileCollect.ContainsKey(tile.Id))
                _listTileCollect[tile.Id].Remove(tile);
            Debug.Log("Hint tile has id " + tile.Id + " has been removed, remaining tile is " + _listTileCollect[tile.Id].Count);
        }

        public void GetHintTile(){
            foreach(KeyValuePair<int, List<_TileController>> pair in _listTileCollect){
                if(pair.Value.Count >= 3){
                    pair.Value[0].OnMouseDown();
                    pair.Value[1].OnMouseDown();
                    pair.Value[2].OnMouseDown();
                    return;
                }
            }
        }
    }
}