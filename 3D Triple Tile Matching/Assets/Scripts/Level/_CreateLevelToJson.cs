using Core.Extensions.File;
using Core.File;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _CreateLevelToJson : MonoBehaviour
    {
        [SerializeField] private _LevelDataSO _levelDataSO;
        [SerializeField] private string _path;

        // private void Start(){
        //     _CreateLevel();
        // }
        private _LevelData _levelData;

        [Button("Create Level To Json")]
        public void _CreateLevel(){
            _levelData = new _LevelData(_levelDataSO);
            foreach(var itemData in _levelDataSO.TileElementDatas){
                _levelData._tileElementDatas.Add(itemData);
            }
            _JsonFileManager.SaveJsonFile<_LevelData>(_JsonPath.GetJsonPath(_path), _levelData);
        }
    }
}