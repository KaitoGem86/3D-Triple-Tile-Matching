using UnityEngine;

namespace Core.Level{
    [CreateAssetMenu(fileName = "LevelData", menuName = "Level/LevelData", order = 0)]
    public class _LevelDataSO : ScriptableObject{
        [SerializeField] private _TileElementData[] _tileElementDatas;

        public _TileElementData[] TileElementDatas => _tileElementDatas;
    }
}