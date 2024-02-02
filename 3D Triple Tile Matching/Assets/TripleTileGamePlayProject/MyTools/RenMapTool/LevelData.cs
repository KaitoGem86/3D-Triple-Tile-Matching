using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[CreateAssetMenu(fileName = "LevelData", menuName = "Match-3 Creator/Create New Level Data", order = 1)]
[System.Serializable]
public class LevelData : ScriptableObject
{
    public List<ItemData> listItemDataOnMaps = new List<ItemData>();
    public int FloorCount;
    public int TileCount;
    [SerializeField] private List<ItemTileData> dataFromTilemap = new List<ItemTileData>();
}