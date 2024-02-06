using System;
using System.Collections.Generic;
using UnityEngine;

namespace ProjectGamePlay{
    [Serializable]
    public class TileData{
        public int tileFloor;
        public Vector3 tilePosition;
        public Vector3 tileScale;
    }

    [CreateAssetMenu(fileName = "LevelData", menuName = "ScriptableObjects/LevelData")]
    public class LevelData : ScriptableObject{
        public string levelName;
        public int numOfTiles;
        public List<TileData> tileData = new List<TileData>();
    }
}