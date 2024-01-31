using System.Collections.Generic;
using Core.File;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _CreateLevelToJson : MonoBehaviour
    {
#if UNITY_EDITOR
        [SerializeField] private _LevelDataSO _levelDataSO;
        [SerializeField] private string _path;

        // private void Start(){
        //     _CreateLevel();
        // }
        private _LevelData _levelData;

        public static void CreateLevel(List<Vector2> listPosition, string path){
            var levelData = new _LevelData();
            foreach (var item in listPosition){
                levelData._tileElementDatas.Add(new _TileElementData(1, new Vector3(item.x, item.y, 0)));
            }
            _JsonFileManager.SaveLevelJsonFile<_LevelData>(path, levelData);
        }

        [Button("Create Level To Json")]
        public void _CreateLevel(){
            _levelData = new _LevelData(_levelDataSO);
            foreach(var itemData in _levelDataSO.TileElementDatas){
                _levelData._tileElementDatas.Add(itemData);
            }
            _JsonFileManager.SaveLevelJsonFile<_LevelData>(_path, _levelData);
        }

        
#endif
    }
}