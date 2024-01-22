using System;
using System.Collections.Generic;

namespace Core.Level{
    [Serializable]
    public class _LevelData{
        public List<_TileElementData> _tileElementDatas;

        public _LevelData(_LevelDataSO levelDataSO){
            _tileElementDatas = new List<_TileElementData>();
        }

        public _LevelData(){
            _tileElementDatas = new List<_TileElementData>();
        }

        // public List<_TileElementData> TileElementDatas => _tileElementDatas;
    }
}