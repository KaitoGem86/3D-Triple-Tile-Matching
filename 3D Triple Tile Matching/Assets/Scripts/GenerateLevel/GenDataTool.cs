using System.Collections.Generic;
using ProjectGamePlay;
using UnityEditor;
using UnityEngine;

namespace GenerateLevel{
#if UNITY_EDITOR
    [CustomEditor(typeof(GenDataTool))]
    public class GenerateEditor : Editor{
        public override void OnInspectorGUI()
        {
            GenDataTool genDataTool = (GenDataTool)target;
            GenDataTool copy = genDataTool;
            if(GUILayout.Button("Generate Level Data")){
                Debug.Log("Generate Level Data");
                copy.ReadMapFromGameObject();
            }
            base.OnInspectorGUI();
        }
    }
#endif


    public class GenDataTool : MonoBehaviour{
        [SerializeField] public GameObject levelRoot;
        [SerializeField] public LevelData levelData;

        public void ReadMapFromGameObject(){
            var listLayers = new List<Transform>();
            levelData.numOfTiles = 0;
            levelData.tileData.Clear();
            foreach(Transform child in levelRoot.transform){
                listLayers.Add(child);
            }
            foreach(Transform layer in listLayers){
                foreach(Transform tile in layer){
                    var tileData = new TileData();
                    tileData.tileFloor = tile.GetComponent<SpriteRenderer>().sortingOrder/3;
                    tileData.tilePosition = tile.position;
                    tileData.tilePosition.z = -tileData.tileFloor;
                    tileData.tileScale = tile.localScale;
                    levelData.tileData.Add(tileData);
                }
                levelData.numOfTiles += layer.childCount;
            }
            Debug.Log("Number of layers: " + listLayers.Count);
            Debug.Log("Number of tiles: " + levelData.numOfTiles);
        }
    }
}