using UnityEngine;

namespace Core.Level{
    [System.Serializable]
    public class _TileElementData{
        public int id;
        public Vector3 position;
        public _TileElementData(int id, Vector3 position){
            this.id = id;
            this.position = position;
        }

        public _TileElementData(){
            id = 0;
            position = Vector3.zero;
        }
    }
}