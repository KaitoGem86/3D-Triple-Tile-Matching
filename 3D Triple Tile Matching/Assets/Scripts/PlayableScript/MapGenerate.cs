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
    }
}