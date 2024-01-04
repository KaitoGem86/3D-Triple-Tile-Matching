using UnityEngine;

namespace Core.Level{
    public class _LevelData : ScriptableObject{
        [SerializeField] private _TileElementData[] _tileElementDatas;

        public _TileElementData[] TileElementDatas => _tileElementDatas;
    }
}