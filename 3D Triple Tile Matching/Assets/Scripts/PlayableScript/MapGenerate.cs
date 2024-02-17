using System.Collections.Generic;
using System.Data.Common;
using UnityEngine;

namespace ProjectGamePlay
{
    public class MapGenerate
    {
        public static Dictionary<int, List<Tile>> GenerateTestMap(GameObject tilePrefab, GameObject tileRoot)
        {
            var dictMap = new Dictionary<int, List<Tile>>();
            for (int i = -2; i < 2; i++)
            {
                for (int j = -2; j < 4; j++)
                {
                    var tile = GameObject.Instantiate(tilePrefab, tileRoot.transform).GetComponent<Tile>();
                    tile.transform.position = new Vector3(i * 2.24f, j * 2.49f, 0);
                    if (!dictMap.ContainsKey(i))
                    {
                        dictMap.Add(i, new List<Tile>());
                    }
                    dictMap[i].Add(tile);
                }
            }
            return dictMap;
        }

        public static Dictionary<int, List<Tile>> GenerateTestMap(int numOfTiles, SpriteSheetData spriteSheet, GameObject tilePrefab, GameObject tileRoot)
        {
            TileDataController tileDataController = new TileDataController(spriteSheet, numOfTiles);
            Dictionary<int, List<Tile>> dictMap = new Dictionary<int, List<Tile>>();
            for (int i = 0; i < numOfTiles; i++)
            {
                float x = i % 4 - 1.5f;
                float y = i / 4 - 1.5f;
                int id = tileDataController.GetRandomTileId();
                var tile = GameObject.Instantiate(tilePrefab, tileRoot.transform).GetComponent<Tile>();
                tile.transform.position = new Vector3(x * 2.24f, y * 2.49f, 0);
                tile.SetSpriteIcon(id);
                if (!dictMap.ContainsKey(id))
                {
                    dictMap.Add(id, new List<Tile>());
                }
                dictMap[id].Add(tile);
            }
            return dictMap;
        }

        public static Dictionary<int, List<Tile>> GenerateMapWithTutorialInFirstLayer(LevelData levelData, SpriteSheetData spriteSheet, GameObject tilePrefab, GameObject tileRoot)
        {
            TileDataController tileDataController = new TileDataController(spriteSheet, levelData.numOfTiles);
            Dictionary<int, List<Tile>> dictMap = new Dictionary<int, List<Tile>>();
            int maxFloor = 0;
            for (int i = 0; i < 3; i++)
            {
                float x = levelData.tileData[i].tilePosition.x;
                float y = levelData.tileData[i].tilePosition.y;
                float z = -levelData.tileData[i].tileFloor;
                int id = tileDataController.GetTileId(0);
                var tile = GameObject.Instantiate(tilePrefab, new Vector3(x, y, z), Quaternion.identity).GetComponent<Tile>();
                tile.transform.localScale = levelData.tileData[i].tileScale;
                tile.transform.SetParent(tileRoot.transform);
                tile.name = "Tile " + i;
                tile.SetSpriteIcon(id);
                tile.SetTileOnFloor(levelData.tileData[i].tileFloor);
                PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData[i].tileFloor, tile);
                if (!dictMap.ContainsKey(id))
                {
                    dictMap.Add(id, new List<Tile>());
                }
                dictMap[id].Add(tile);
            }
            for (int i = 3; i < levelData.numOfTiles; i++)
            {
                float x = levelData.tileData[i].tilePosition.x;
                float y = levelData.tileData[i].tilePosition.y;
                float z = -levelData.tileData[i].tileFloor;
                int id = tileDataController.GetRandomTileId();
                var tile = GameObject.Instantiate(tilePrefab, new Vector3(x, y, z), Quaternion.identity).GetComponent<Tile>();
                tile.transform.localScale = levelData.tileData[i].tileScale;
                tile.transform.SetParent(tileRoot.transform);
                tile.name = "Tile " + i;
                tile.SetSpriteIcon(id);
                tile.SetTileOnFloor(levelData.tileData[i].tileFloor);
                maxFloor = Mathf.Max(maxFloor, levelData.tileData[i].tileFloor);
                PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData[i].tileFloor, tile);
                if (!dictMap.ContainsKey(id))
                {
                    dictMap.Add(id, new List<Tile>());
                }
                dictMap[id].Add(tile);
            }
            MakeMapEasyer(3, maxFloor);
            return dictMap;
        }

        public static Dictionary<int, List<Tile>> GenerateMap(LevelData levelData, SpriteSheetData spriteSheet, GameObject tilePrefab, GameObject tileRoot)
        {
            TileDataController tileDataController = new TileDataController(spriteSheet, levelData.numOfTiles);
            Dictionary<int, List<Tile>> dictMap = new Dictionary<int, List<Tile>>();
            for (int i = 0; i < levelData.numOfTiles; i++)
            {
                float x = levelData.tileData[i].tilePosition.x;
                float y = levelData.tileData[i].tilePosition.y;
                float z = -levelData.tileData[i].tileFloor;
                int id = tileDataController.GetRandomTileId();
                var tile = GameObject.Instantiate(tilePrefab, new Vector3(x, y, z), Quaternion.identity).GetComponent<Tile>();
                tile.transform.localScale = levelData.tileData[i].tileScale;
                tile.transform.SetParent(tileRoot.transform);
                tile.name = "Tile " + i;
                tile.SetSpriteIcon(id);
                tile.SetTileOnFloor(levelData.tileData[i].tileFloor);
                PlayableAdsManager.Instance.ListTilesController.AddTileToFloor(levelData.tileData[i].tileFloor, tile);
                if (!dictMap.ContainsKey(id))
                {
                    dictMap.Add(id, new List<Tile>());
                }
                dictMap[id].Add(tile);
            }
            return dictMap;
        }

        //easyLevel describe how many floors have triple group on it 
        private static void MakeMapEasyer(int easyLevel, int numOfFloors)
        {
            for(int i = numOfFloors; i > numOfFloors - easyLevel; i--){
                List<Tile> tilesInFloor = PlayableAdsManager.Instance.ListTilesController.GetListTilesInFloor(i);
                var (isExist, count, id) = CheckGroupTripleExistInFloor(tilesInFloor);
                if(isExist){
                    continue;
                }
                var listLowerTiles = PlayableAdsManager.Instance.ListTilesController.GetTilesInLowerFloorById(id, i, 3 - count);
                var listReplaceTiles = PlayableAdsManager.Instance.ListTilesController.GetTilesInFloorExceptedId(i, id, 3 - count);
                for(int j = 0; j < 3 - count; j++){
                    int replaceId = listReplaceTiles[j].Id;
                    listReplaceTiles[j].SetSpriteIcon(listLowerTiles[j].Id);
                    listLowerTiles[j].SetSpriteIcon(replaceId);
                }
            }
        }

        private static (bool, int, int) CheckGroupTripleExistInFloor(List<Tile> listTilesInFloor)
        {
            int currentId = -1;
            int count = 0;
            Dictionary<int, int> countMatrix = new Dictionary<int, int>();
            foreach (var Tile in listTilesInFloor)
            {
                if (countMatrix.ContainsKey(Tile.Id))
                {
                    countMatrix[Tile.Id]++;
                    count = Mathf.Max(count, countMatrix[Tile.Id]);
                    if(count == countMatrix[Tile.Id]){
                        currentId = Tile.Id;
                    }
                }
                else
                {
                    countMatrix.Add(Tile.Id, 1);
                    count = Mathf.Max(count, 1);
                    if(count == 1){
                        currentId = Tile.Id;
                    }
                }
                if (count >= 3)
                {
                    return (true,3,-1);
                }
            }
            return (false, count, currentId);
        }
    }

    public class TileDataController
    {
        public Dictionary<int, int> dictTilesData = new Dictionary<int, int>();
        public List<int> listTilesData;
        public int totalTiles;

        public TileDataController(SpriteSheetData spriteSheetData, int total)
        {
            totalTiles = total;
            dictTilesData = new Dictionary<int, int>();
            listTilesData = new List<int>();
            int numOfTripleTiles = total / 3;
            int numOfSprites = spriteSheetData.sprites.Length;
            for (int i = 0; i < numOfSprites; i++)
            {
                dictTilesData.Add(i, 0);
                listTilesData.Add(i);
            }
            for (int i = 0; i < numOfTripleTiles; i++)
            {
                dictTilesData[i % numOfSprites] += 3;
            }
        }

        public int GetRandomTileId()
        {
            int random = Random.Range(0, listTilesData.Count);
            int randomId = listTilesData[random];
            if (dictTilesData[randomId] > 0)
            {
                dictTilesData[randomId]--;
                if (dictTilesData[randomId] == 0)
                {
                    dictTilesData.Remove(randomId);
                    listTilesData.Remove(randomId);
                }
            }
            return randomId;
        }

        public int GetTileId(int id)
        {
            int tileId = listTilesData[id];
            if (dictTilesData[tileId] > 0)
            {
                dictTilesData[tileId]--;
                if (dictTilesData[tileId] == 0)
                {
                    dictTilesData.Remove(tileId);
                    listTilesData.Remove(tileId);
                }
            }
            return tileId;
        }
    }
}