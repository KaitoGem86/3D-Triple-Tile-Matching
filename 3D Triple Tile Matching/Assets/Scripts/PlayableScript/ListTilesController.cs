using System.Collections.Generic;
using UnityEngine;

namespace ProjectGamePlay{
    public class ListTilesController{
        private Dictionary<int, List<Tile>> _dictListTilesInFloor;

        public ListTilesController(){
            _dictListTilesInFloor = new Dictionary<int, List<Tile>>();
        }

        public void AddTileToFloor(int floor, Tile tile){
            if(!_dictListTilesInFloor.ContainsKey(floor)){
                _dictListTilesInFloor.Add(floor, new List<Tile>());
            }
            _dictListTilesInFloor[floor].Add(tile);
        }

        public void RemoveTileFromFloor(int floor, Tile tile){
            if(_dictListTilesInFloor.ContainsKey(floor)){
                _dictListTilesInFloor[floor].Remove(tile);
            }
        }

        public List<Tile> GetListTilesInFloor(int floor){
            if(_dictListTilesInFloor.ContainsKey(floor)){
                return _dictListTilesInFloor[floor];
            }
            return null;
        }

        public void SetConnectForTile(){
            foreach(var listTile in _dictListTilesInFloor){
                if(listTile.Key == 0){
                    continue;
                }
                for(int i = 0; i < listTile.Value.Count; i++){
                    listTile.Value[i].SetTileBehind(GetListTilesInFloor(listTile.Key - 1));
                }               
            }
        }

        public List<Tile> GetHint(){
            var dictCheck = new Dictionary<int, List<Tile>>();
            foreach(var listTile in _dictListTilesInFloor){
                if(listTile.Key == 0){
                    continue;
                }
                for(int i = 0; i < listTile.Value.Count; i++){
                    if(listTile.Value[i].TileState == TileStateEnum.InBlock){
                        if(!dictCheck.ContainsKey(listTile.Value[i].Id)){
                            dictCheck.Add(listTile.Value[i].Id, new List<Tile>());
                        }
                        dictCheck[listTile.Value[i].Id].Add(listTile.Value[i]);
                        if(dictCheck[listTile.Value[i].Id].Count == 3){
                            return dictCheck[listTile.Value[i].Id];
                        }
                    }
                }               
            }
            return null;
        }

        public List<Tile> GetTilesInLowerFloorById(int id, int floor, int numOfNeededTiles){
            var listTiles = new List<Tile>();
            for(int i = 0; i < floor; i++){
                if(_dictListTilesInFloor.ContainsKey(i)){
                    foreach(var tile in _dictListTilesInFloor[i]){
                        if(tile.Id == id){
                            listTiles.Add(tile);
                            if(listTiles.Count == numOfNeededTiles){
                                return listTiles;
                            }
                        }
                    }
                }
            }
            Debug.LogError("Not enough tiles in lower floor");
            return null;
        }

        public List<Tile> GetTilesInFloorExceptedId(int floor, int id, int numOfNeededTiles){
            var listTiles = new List<Tile>();
            if(_dictListTilesInFloor.ContainsKey(floor)){
                foreach(var tile in _dictListTilesInFloor[floor]){
                    if(tile.Id != id){
                        listTiles.Add(tile);
                        if(listTiles.Count == numOfNeededTiles){
                            return listTiles;
                        }
                    }
                }
            }
            Debug.LogError("Not enough tiles in floor to get excepted id");
            return listTiles;
        }

        public Dictionary<int, List<Tile>> ListTiles => _dictListTilesInFloor;
    }
}