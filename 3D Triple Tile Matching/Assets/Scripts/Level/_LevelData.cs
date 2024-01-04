using UnityEngine;

namespace Core.Level{
    [CreateAssetMenu(fileName = "LevelData", menuName = "Level/LevelData")]
    public class _LevelData : ScriptableObject{
        [SerializeField] private _TileElementData[] _tileElementDatas;

        public _TileElementData[] TileElementDatas => _tileElementDatas;
    }
}