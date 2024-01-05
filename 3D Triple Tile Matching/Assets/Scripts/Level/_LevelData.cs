using System;
using System.Collections.Generic;

namespace Core.Level{
    [Serializable]
    public class _LevelData{
        public List<_TileElementData> _tileElementDatas;

        public _LevelData(_LevelDataSO levelDataSO){
            _tileElementDatas = new List<_TileElementData>();
            // for(int i = 0; i < levelDataSO.TileElementDatas.Length; i++){
            //     _tileElementDatas[i] = levelDataSO.TileElementDatas[i];
            // }
        }

        // public List<_TileElementData> TileElementDatas => _tileElementDatas;
    }
}