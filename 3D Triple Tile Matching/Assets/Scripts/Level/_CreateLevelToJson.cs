using Core.File;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _CreateLevelToJson : MonoBehaviour
    {
        [SerializeField] private _LevelData _levelData;
        [SerializeField] private string _path;

        // private void Start(){
        //     _CreateLevel();
        // }

        [Button("Create Level To Json")]
        public void _CreateLevel(){
            _JsonFileManager.SaveJsonFile<_LevelData>(_path, _levelData);
        }
    }
}