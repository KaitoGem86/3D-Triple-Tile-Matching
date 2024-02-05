using System.Collections.Generic;
using UnityEngine;

namespace ProjectGamePlay{
    public class MapGenerate{
        public static Dictionary<int, List<Tile>> GenerateTestMap(GameObject tilePrefab, GameObject tileRoot){
            var dictMap = new Dictionary<int, List<Tile>>();
            for(int i = -2; i < 2; i++){
                for(int j = -2; j < 4; j++){
                    var tile = GameObject.Instantiate(tilePrefab, tileRoot.transform).GetComponent<Tile>();
                    tile.transform.position = new Vector3(i * 2.24f, j * 2.49f, 0);
                    if(!dictMap.ContainsKey(i)){
                        dictMap.Add(i, new List<Tile>());
                    }
                    dictMap[i].Add(tile);
                }
            }
            return dictMap;
        }

        public static Dictionary<int, List<Tile>> GenerateTestMap(int numOfTiles, SpriteSheetData spriteSheet, GameObject tilePrefab, GameObject tileRoot){
            TileDataController tileDataController = new TileDataController(spriteSheet, numOfTiles);
            Dictionary<int, List<Tile>> dictMap = new Dictionary<int, List<Tile>>();
            for(int i = 0; i < numOfTiles; i++){
                float x = i % 4 - 1.5f;
                float y = i / 4 - 1.5f;
                int id = tileDataController.GetRandomTileId();
                var tile = GameObject.Instantiate(tilePrefab, tileRoot.transform).GetComponent<Tile>();
                tile.transform.position = new Vector3(x * 2.24f, y * 2.49f, 0);
                tile.SetSpriteIcon(id);
                if(!dictMap.ContainsKey(id)){
                    dictMap.Add(id, new List<Tile>());
                }
                dictMap[id].Add(tile);
            }
            return dictMap;
        }
    }

    public class TileDataController{
        public Dictionary<int, int> dictTilesData = new Dictionary<int, int>();
        public List<int> listTilesData;
        public int totalTiles;

        public TileDataController(SpriteSheetData spriteSheetData, int total){
            totalTiles = total;
            dictTilesData = new Dictionary<int, int>();
            listTilesData = new List<int>();
            int numOfTripleTiles = total / 3;
            int numOfSprites = spriteSheetData.sprites.Length;
            for(int i = 0; i < numOfSprites; i++){
                dictTilesData.Add(i, 0);
                listTilesData.Add(i);
            }
            for(int i = 0; i < numOfTripleTiles; i++){
                dictTilesData[i % numOfSprites] += 3;
            }
        }

        public int GetRandomTileId(){
            int random = Random.Range(0, listTilesData.Count);
            int randomId = listTilesData[random];
            if(dictTilesData[randomId] > 0){
                dictTilesData[randomId]--;
                if(dictTilesData[randomId] == 0){
                    dictTilesData.Remove(randomId);
                    listTilesData.Remove(randomId);
                }
            }
            return randomId;
        }
    }
}