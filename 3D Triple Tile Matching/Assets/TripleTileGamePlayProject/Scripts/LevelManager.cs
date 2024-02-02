
using DG.Tweening;
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.Tilemaps;

public enum LevelStat
{
    NORMAL,
    RESTART,
    SUFFER

}

#if UNITY_EDITOR
[CustomEditor(typeof(LevelManager))]
public class YourScriptEditor : Editor
{

    public override void OnInspectorGUI()
    {
        LevelManager level = (LevelManager)target;
        LevelManager copy;

        if (GUILayout.Button("MakeACopy"))
        {
            copy = Instantiate(level);
            EditorUtility.SetDirty(level);
            AssetDatabase.SaveAssets();

        }
        GUILayout.Label("CHỈ DÙNG KHI ĐÃ MỞ PREFABS ASSET!!!!!!!!");
        if (GUILayout.Button("RenMapAndSetData"))
        {
            level.SetUpTileMapAndFloor();
            level.SetUpReferrent();
            level.GetTypeDataRandom();
            level.DrawRandomTile();
        }
        if (GUILayout.Button("KeepTheMapAndSetDataCount"))
        {
            level.GetTypeDataRandom();
            EditorUtility.SetDirty(level);
            AssetDatabase.SaveAssets();
        }
        base.OnInspectorGUI();

    }
}
#endif
[Serializable]
public class ItemTileData
{

    public int floorIndex;
    public Vector2Int posTile;
    public ItemData itemData;
    public int indexOnMap;
    public ItemTileData(int _floorIndex, int _indexOnMap, Vector2Int _posTile)
    {
        floorIndex = _floorIndex;
        indexOnMap = _indexOnMap;
        posTile = _posTile;
    }
}

public class LevelManager : MonoBehaviour
{
    [Range(3f, 20f)]
    public int typeDataCount = 4;
    public int floorCount = 4;
    public int tileCount = 15;
    public static LevelManager instance;
    [HideInInspector] public LevelStat levelStat = LevelStat.NORMAL;
    public int slotMax = 7;
    public int workTileCount = 0;
    public bool tinhdoixungPer4 = false;
    public bool tinhdoixungPer2 = false;
    //================================DATA===============================================
    [Header("Resource---------------------")]
    [SerializeField] private int tileCountReally = 0;
    [SerializeField] private int tileWorkCount = 0;
    public List<Tile> tileMapTilePrefab;
    public List<Sprite> fruits;
    public List<ItemData> allTypeData = new List<ItemData>();
    public ItemTile itemTilePrefab;
    public Tilemap tilemapPrefab;
    [Header("Data------------------")]

    [Tooltip("các loại ItemData sử dụng")]

    public List<ItemData> listDataUse = new List<ItemData>();


    //==============================REFERENTS====================================================
    [Header("REFERENTS----------------------------")]
    public GameObject tileMapParent;
    public GameObject floorParent;
    public SlotHolder slotHolder;
    public GameObject tileMapGroup;
    public List<Tilemap> listTileMaps = new List<Tilemap>();
    public List<Transform> listFloors = new List<Transform>();
    //==============================IN GAME PLAY==================================================
    [SerializeField] private List<ItemTileData> dataOfTilemap = new List<ItemTileData>();
    [SerializeField] public List<ItemTile> listItemTiles = new List<ItemTile>();
    public List<ItemTile> listUndo = new List<ItemTile>();
    //==============================TEST===============================
    public Sprite input;

    public bool makeDataRandom = false;
    public int AI_totalTileper4;
    public int AI_totalfloor;

    private Texture2D texture2D => input.texture;


    private void Awake()
    {
        instance = this;
    }
    public void Start()
    {
        // GPTCODE();
        levelStat = LevelStat.NORMAL;
        slotHolder.SpawnSlot();
        if (input != null)
        {
            ToolMakeTileMap.instance.MakeTileMap(texture2D, listTileMaps[0]);
        }

        if (tinhdoixungPer4)
        {
            ReadDataPerFour();
        }
        else if (tinhdoixungPer2)
        {
            ReadDataPerTwo();
        }
        else
        {
            ReadDataTileMap();
        }

        CheckData();
        GetConnect();

    }
    private void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            ChooseTypeToHint();
        }
    }
    public void SetUpReferrent()
    {
        listTileMaps.Clear();
        for (int i = 0; i < tileMapParent.transform.childCount; i++)
        {
            listTileMaps.Add(tileMapParent.transform.GetChild(i).GetComponent<Tilemap>());
        }
        listFloors.Clear();
        for (int i = 0; i < floorParent.transform.childCount; i++)
        {
            listFloors.Add(floorParent.transform.GetChild(i));
        }
    }
    public void SetUpTileMapAndFloor()
    {
        listTileMaps.Clear();
        tileMapParent.transform.DeleteAllChild();
        floorParent.transform.DeleteAllChild();
        for (int i = 0; i < floorCount; i++)
        {
            Tilemap tilemap = Instantiate(tilemapPrefab, tileMapParent.transform);
            tilemap.name = "TileMap  " + i;
            tilemap.GetComponent<TilemapRenderer>().sortingLayerName = "Floor" + (i + 1);
            GameObject floor = new GameObject();
            floor.transform.SetParent(floorParent.transform);
            floor.name = "Floor   " + i;
            if (i % 2 == 1)
            {
                tilemap.transform.localPosition = new Vector3(0.5f, 0.5f, 0);
                floor.transform.localPosition = new Vector3(0.5f, 0.5f, 0);


            }
            else
            {
                tilemap.transform.localPosition = Vector3.zero;
                floor.transform.localPosition = Vector3.zero;
            }
        }
    }
    public void GetTypeDataRandom()
    {
        listDataUse.Clear();
        HashSet<ItemData> chosenIndices = new HashSet<ItemData>();
        int radomX = 0;


        for (int i = 0; i < typeDataCount; i++)
        {
            do
            {
                radomX = UnityEngine.Random.Range(0, allTypeData.Count);
            }
            while (chosenIndices.Contains(allTypeData[radomX]));

            chosenIndices.Add(allTypeData[radomX]);
        }

        foreach (ItemData item in chosenIndices)
        {
            listDataUse.Add(item);
        }
    }
    public void ReadDataTileMap()
    {

        dataOfTilemap.Clear();
        int indexOnMap = 0;
        for (int i = 0; i < listTileMaps.Count; i++)
        {
            for (int y = listTileMaps[i].cellBounds.yMin; y < listTileMaps[i].cellBounds.yMax; y++)
            {
                for (int x = listTileMaps[i].cellBounds.xMin; x < listTileMaps[i].cellBounds.xMax; x++)
                {
                    //Debug.Log("i:" + i + "   j:" + j);
                    if (listTileMaps[i].HasTile(new Vector3Int(x, y, 0)))
                    {
                        indexOnMap++;
                        ItemTileData itemTileData = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                        dataOfTilemap.Add(itemTileData);
                    }

                }
            }
        }
        tileMapGroup.SetActive(false);
    }
    public void ReadDataPerFour()
    {
        dataOfTilemap.Clear();
        int indexOnMap = 0;
        for (int i = 0; i < listTileMaps.Count; i++)
        {
            for (int y = listTileMaps[i].cellBounds.yMin; y <= 0; y++)
            {
                for (int x = listTileMaps[i].cellBounds.xMin; x <= 0; x++)
                {
                    if (listTileMaps[i].HasTile(new Vector3Int(x, y, 0)))
                    {
                        if ((x == 0 || y == 0) && i % 2 == 0)
                        {
                            if (x == y)
                            {
                                indexOnMap++;
                                ItemTileData itemTileDataCenter = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                                dataOfTilemap.Add(itemTileDataCenter);
                                continue;

                            }
                            indexOnMap++;
                            ItemTileData itemTileDataCenterDown = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                            dataOfTilemap.Add(itemTileDataCenterDown);

                            indexOnMap++;
                            ItemTileData itemTileDataCenterUp = new ItemTileData(i, indexOnMap, new Vector2Int(-x, -y));
                            dataOfTilemap.Add(itemTileDataCenterUp);
                            continue;
                        }
                        if ((x == 0 || y == 0) && i % 2 == 1)
                        {
                            continue;
                        }
                        indexOnMap++;
                        ItemTileData itemTileDataBottomLeft = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                        dataOfTilemap.Add(itemTileDataBottomLeft);

                        indexOnMap++;
                        ItemTileData itemTileDataBottomRight = new ItemTileData(i, indexOnMap, new Vector2Int(-x - i % 2, y));
                        dataOfTilemap.Add(itemTileDataBottomRight);

                        indexOnMap++;
                        ItemTileData itemTileDataTopRight = new ItemTileData(i, indexOnMap, new Vector2Int(-x - i % 2, -y - i % 2));
                        dataOfTilemap.Add(itemTileDataTopRight);

                        indexOnMap++;
                        ItemTileData itemTileDataTopLeft = new ItemTileData(i, indexOnMap, new Vector2Int(x, -y - i % 2));
                        dataOfTilemap.Add(itemTileDataTopLeft);
                    }

                }
            }


        }
        tileMapGroup.SetActive(false);
    }
    public void ReadDataPerTwo()
    {
        dataOfTilemap.Clear();
        int indexOnMap = 0;
        for (int i = 0; i < listTileMaps.Count; i++)
        {
            for (int y = listTileMaps[i].cellBounds.yMin; y < listTileMaps[i].cellBounds.yMax; y++)
            {
                for (int x = listTileMaps[i].cellBounds.xMin; x <= 0; x++)
                {
                    if (listTileMaps[i].HasTile(new Vector3Int(x, y, 0)))
                    {
                        if ((x == 0) && i % 2 == 0)
                        {
                            indexOnMap++;
                            ItemTileData itemTileDataCenterDown = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                            dataOfTilemap.Add(itemTileDataCenterDown);
                            continue;
                        }
                        if ((x == 0) && i % 2 == 1)
                        {
                            continue;
                        }
                        indexOnMap++;
                        ItemTileData itemTileDataBottomLeft = new ItemTileData(i, indexOnMap, new Vector2Int(x, y));
                        dataOfTilemap.Add(itemTileDataBottomLeft);

                        indexOnMap++;
                        ItemTileData itemTileDataTopLeft = new ItemTileData(i, indexOnMap, new Vector2Int(-x - i % 2, y));
                        dataOfTilemap.Add(itemTileDataTopLeft);
                    }

                }
            }


        }
        tileMapGroup.SetActive(false);
    }
    public void DrawRandomTile()
    {
        int totalremain4 = tileCount % 4;
        int totalper4 = (tileCount - totalremain4) / 4;
        foreach (var tilemap in listTileMaps)
        {
            tilemap.ClearAllTiles();
        }
        HashSet<Vector3Int> chosenIndices = new HashSet<Vector3Int>();
        int radomX = 0;
        int radomY = 0;
        int radomFloor = 0;

        for (int i = 0; i < totalper4; i++)
        {
            do
            {
                radomFloor = UnityEngine.Random.Range(0, floorCount);
                radomX = UnityEngine.Random.Range(-4, 0);
                radomY = UnityEngine.Random.Range(-4, 0);


            }
            while (chosenIndices.Contains(new Vector3Int(radomX, radomY, radomFloor)));

            chosenIndices.Add(new Vector3Int(radomX, radomY, radomFloor));
        }

        if (totalremain4 == 1) { chosenIndices.Add(new Vector3Int(0, 0, 0)); }
        else if (totalremain4 == 2) { chosenIndices.Add(new Vector3Int(-1, 0, 0)); chosenIndices.Add(new Vector3Int(0, -1, 0)); }
        else if (totalremain4 == 3) { chosenIndices.Add(new Vector3Int(-1, 0, 0)); chosenIndices.Add(new Vector3Int(0, -1, 0)); chosenIndices.Add(new Vector3Int(0, 0, 0)); }
        else { }


        int test = 0;
        while (!CheckHashSetDontHaveFallTile(chosenIndices))
        {
            test = 0;
            List<Vector3Int> lstDelete = new List<Vector3Int>();
            int tileFall = 0;
            foreach (var vec in chosenIndices)
            {
                if (!HasLeastOneNeiboir(vec, chosenIndices))
                {

                    if (vec.z < floorCount - 1)
                    {

                        lstDelete.Add(vec);
                    }
                    else
                    {
                        test++;
                    }
                }
            }

            foreach (var vec in lstDelete)
            {
                chosenIndices.Remove(vec);
            }

        }
        tileCountReally = chosenIndices.Count * 4;
        tileWorkCount = test * 4;
        dataOfTilemap.Clear();
        foreach (var vec in chosenIndices)
        {
            listTileMaps[vec.z].SetTile(new Vector3Int(vec.x, vec.y, 0), tileMapTilePrefab[vec.z]);
        }
    }

    public bool HasLeastOneNeiboir(Vector3Int vector3, HashSet<Vector3Int> chosenIndices)
    {
        if (vector3.z % 2 == 0)
        {
            if (chosenIndices.Contains(vector3 + new Vector3Int(-1, -1, 1))
                || chosenIndices.Contains(vector3 + new Vector3Int(-1, 0, 1))
                || chosenIndices.Contains(vector3 + new Vector3Int(0, -1, 1))
                || chosenIndices.Contains(vector3 + new Vector3Int(0, 0, 1)))
            {
                return true;
            }
        }
        else if ((vector3.z % 2 == 1))
        {
            if (chosenIndices.Contains(vector3 + new Vector3Int(1, 1, 1))
             || chosenIndices.Contains(vector3 + new Vector3Int(1, 0, 1))
             || chosenIndices.Contains(vector3 + new Vector3Int(0, 1, 1))
             || chosenIndices.Contains(vector3 + new Vector3Int(0, 0, 1)))
            {
                return true;
            }
        }

        return false;
    }
    bool CheckHashSetDontHaveFallTile(HashSet<Vector3Int> chosenIndices)
    {
        foreach (var vector in chosenIndices)
        {
            if (vector.z == floorCount - 1) { continue; }
            if (!HasLeastOneNeiboir(vector, chosenIndices))
            {
                return false;
            }
        }
        return true;
    }
    public void CheckData()
    {
        Debug.Log("SumTile =" + dataOfTilemap.Count + "Sum_Data =" + listDataUse.Count);
        List<ItemData> getItemData = new List<ItemData>();
        getItemData.Clear();
        if (dataOfTilemap.Count % 3 != 0)
        {
            Debug.LogError("Số phần tử phải là x3: " + dataOfTilemap.Count);
            int tileNeedDelete = dataOfTilemap.Count % 3;
            for (int i = 0; i < tileNeedDelete; i++)
            {
                dataOfTilemap.RemoveAt(dataOfTilemap.Count - 1);
            }

        }
        if (listDataUse.Count < dataOfTilemap.Count / 3)
        {
            int[] tilePerType = new int[listDataUse.Count];
            for (int i = 0; i < listDataUse.Count; i++)
            {
                tilePerType[i] = 1;
                ItemData itemData = listDataUse[i];
                //Add 3 phan tu
                getItemData.Add(itemData);
                getItemData.Add(itemData);
                getItemData.Add(itemData);
            }
            int remain = dataOfTilemap.Count / 3 - listDataUse.Count;
            for (int i = 0; i < remain; i++)
            {
                int random = 0;
                //do
                //{
                random = UnityEngine.Random.Range(0, tilePerType.Length);
                //}
                //while (tilePerType[random] >= 3);
                tilePerType[random]++;
                ItemData itemData = listDataUse[random];

                //Add 3 phan tu
                getItemData.Add(itemData);
                getItemData.Add(itemData);
                getItemData.Add(itemData);
            }

            for (int i = 0; i < tilePerType.Length; i++)
            {
                Debug.Log("Type Loai " + listDataUse[i].itemType + "Soluong la:  " + tilePerType[i]);
            }
        }
        else
        {
            //Tao 1 list lay so luong ItemData = tilemap => chia ngau nhien
            for (int i = 0; i < dataOfTilemap.Count / 3; i++)
            {
                ItemData itemData = listDataUse[i % listDataUse.Count];

                //Add 3 phan tu
                getItemData.Add(itemData);
                getItemData.Add(itemData);
                getItemData.Add(itemData);
            }
        }
        if (GamePlayManager.instance.levelEasyer == 0)
        {
            for (int i = 0; i < dataOfTilemap.Count; i++)
            {
                ItemData itemData = getItemData[UnityEngine.Random.Range(0, getItemData.Count)];
                dataOfTilemap[i].itemData = itemData;
                getItemData.Remove(itemData);
            }
        }
        else
        {
            Debug.Log("EASYER!!!!");
            for (int i = 0; i < dataOfTilemap.Count; i++)
            {
                int ran;
                if (GamePlayManager.instance.levelEasyer >= getItemData.Count)
                {
                    ran = getItemData.Count - 1;
                }
                else
                {
                    ran = UnityEngine.Random.Range(GamePlayManager.instance.levelEasyer, getItemData.Count);
                }


                ItemData itemData = getItemData[ran];
                dataOfTilemap[i].itemData = itemData;
                getItemData.Remove(itemData);


            }
        }

        SpawnTile();
    }
    public void SpawnTile()
    {
        for (int i = 0; i < dataOfTilemap.Count; i++)
        {
            ItemTile itemTile = Instantiate(itemTilePrefab, listFloors[dataOfTilemap[i].floorIndex]);
            itemTile.InitTile(dataOfTilemap[i].indexOnMap, dataOfTilemap[i].floorIndex, dataOfTilemap[i].posTile, dataOfTilemap[i].itemData);
            itemTile.name = "Tile" + dataOfTilemap[i].posTile.x + "-" + dataOfTilemap[i].posTile.y + "  in Floor  " + dataOfTilemap[i].floorIndex;
            itemTile.name = $"(({dataOfTilemap[i].posTile.x})_({dataOfTilemap[i].posTile.y})) in Flloor {dataOfTilemap[i].floorIndex}";
            itemTile.itemTileState = ITEMTILE_STATE.FLOOR;
            listItemTiles.Add(itemTile);
        }

    }
    public void GetConnect()
    {
        foreach (var item in listItemTiles)
        {
            item.tileConnect.listTileFrontof = GetTileFloorUper(item);
            if (item.tileConnect.listTileFrontof.Count > 0)
            {
                item.SetTouch_Avaiable(false);
                item.SetShadow_Avaiable(true);
            }
            else
            {
                workTileCount++;
            }
            item.tileConnect.listTileBehind = GetTileFloorDown(item);
        }
    }

    public bool CheckWin()
    {
        if (listItemTiles.Count == 0)
        {
            Debug.Log("Win");
            return true;
        }
        return false;
    }

    public void Restart()
    {
        slotHolder.Clear();
        foreach (var y in listItemTiles) { Destroy(y.gameObject); }
        dataOfTilemap = new List<ItemTileData>();
        listItemTiles = new List<ItemTile>();
        Start();
    }
    public void TryAgain()
    {
        Undo();
        Undo();
        Undo();
        Suffer();
    }
    public void Suffer()
    {
        if (levelStat != LevelStat.NORMAL) return;
        List<ItemData> itemDatas = new List<ItemData>();

        foreach (var x in listItemTiles)
        {
            x.transform.DOMove(new Vector3(0, 10, 0), 0.25f);
            itemDatas.Add(x.itemData);
            levelStat = LevelStat.SUFFER;
        }
        FunctionCommon.DelayTime(0.5f, () =>
        {
            levelStat = LevelStat.NORMAL;
            foreach (var y in listItemTiles)
            {
                y.transform.DOLocalMove(y.localPos, 0.25f);
                y.itemData = itemDatas[UnityEngine.Random.Range(0, itemDatas.Count)];
                y.icon.sprite = LevelManager.instance.fruits[(int)y.itemData.itemType - 1];
                itemDatas.Remove(y.itemData);
            }
        });

    }
    public void Hint()
    {
        if (levelStat != LevelStat.NORMAL) return;
        ITEM_TYPE x;
        List<ItemTile> chosse = ChooseTypeToHint();
        if (chosse.Count == 2)
        {
            x = chosse[0].itemData.itemType;
            for (int i = listItemTiles.Count - 1; i >= 0; i--)
            {
                if (listItemTiles[i].itemData.itemType == x)
                {
                    listItemTiles[i].SetTouchItemTile();
                    break;
                }
            }
        }
        else if (chosse.Count == 1)
        {
            if (slotHolder.CountSlotNotNull() == slotHolder.listItemSlots.Count - 1)
            {
                Debug.Log("Can't Hint");
                return;
            }
            x = chosse[0].itemData.itemType;
            int time = 0;
            for (int i = listItemTiles.Count - 1; i >= 0; i--)
            {
                if (listItemTiles[i].itemData.itemType == x)
                {
                    listItemTiles[i].SetTouchItemTile();
                    time++;
                }
                if (time == 2) break;
            }
        }
        else if (chosse.Count == 0)
        {
            x = listItemTiles[listItemTiles.Count - 1].itemData.itemType;
            int time = 0;
            for (int i = listItemTiles.Count - 1; i >= 0; i--)
            {
                if (listItemTiles[i].itemData.itemType == x)
                {
                    listItemTiles[i].SetTouchItemTile();
                    time++;
                }
                if (time == 3) break;
            }
        }
    }
    public void Undo()
    {
        if (levelStat != LevelStat.NORMAL) return;
        if (listUndo.Count > 0)
        {
            ItemTile lastUndo = listUndo[listUndo.Count - 1];
            listItemTiles.Add(lastUndo);
            lastUndo.SetUndo();
            listUndo.Remove(lastUndo);
            lastUndo.slot.itemTile = null;

            slotHolder.SortData();
        }
    }
    public List<ItemTile> ChooseTypeToHint()
    {
        List<ItemTile> result = new List<ItemTile>();
        Dictionary<int, int> numberCounts = new Dictionary<int, int>();
        foreach (var slot in slotHolder.listItemSlots)
        {
            if (slot.tileIsNull || slot.slotStat.Equals(SlotStat.WaitToDesTroy)) continue;
            if (numberCounts.ContainsKey((int)slot.itemTile.itemData.itemType))
            {
                numberCounts[(int)slot.itemTile.itemData.itemType]++;
            }
            else
            {
                numberCounts[(int)slot.itemTile.itemData.itemType] = 1;
            }
        }

        int maxCount = 0;
        int mostFrequentNumber = 0;

        foreach (KeyValuePair<int, int> entry in numberCounts)
        {
            if (entry.Value > maxCount)
            {
                maxCount = entry.Value;
                mostFrequentNumber = entry.Key;
            }
        }
        foreach (var slot in slotHolder.listItemSlots)
        {
            if (slot.tileIsNull) continue;
            if ((int)slot.itemTile.itemData.itemType == mostFrequentNumber)
            {
                result.Add(slot.itemTile);
            }
        }
        return result;
    }
    private ItemTile GetItemTileTile(Vector2Int posTile, int floorIndex)
    {
        foreach (var itemTile in listItemTiles)
        {
            if (itemTile.floorIndex == floorIndex && itemTile.posTile.Equals(posTile))
            {
                return itemTile;
            }
        }
        return null;
    }
    public List<ItemTile> GetTileFloorUper(ItemTile itemTile)
    {
        List<ItemTile> result = new List<ItemTile>();
        if (itemTile.floorIndex % 2 == 0) //
        {
            ItemTile itemTile1 = GetItemTileTile(itemTile.posTile + Vector2Int.left, itemTile.floorIndex + 1);
            if (itemTile1 is not null)
            {
                result.Add(itemTile1);
            }
            ItemTile itemTile2 = GetItemTileTile(itemTile.posTile + Vector2Int.down, itemTile.floorIndex + 1);
            if (itemTile2 is not null)
            {
                result.Add(itemTile2);
            }
            ItemTile itemTile3 = GetItemTileTile(itemTile.posTile - Vector2Int.one, itemTile.floorIndex + 1);
            if (itemTile3 is not null)
            {
                result.Add(itemTile3);
            }
            ItemTile itemTile4 = GetItemTileTile(itemTile.posTile + Vector2Int.zero, itemTile.floorIndex + 1);
            if (itemTile4 is not null)
            {
                result.Add(itemTile4);
            }
        }
        else
        {

            ItemTile itemTile1 = GetItemTileTile(itemTile.posTile + Vector2Int.right, itemTile.floorIndex + 1);
            if (itemTile1 is not null)
            {
                result.Add(itemTile1);
            }
            ItemTile itemTile2 = GetItemTileTile(itemTile.posTile + Vector2Int.up, itemTile.floorIndex + 1);
            if (itemTile2 is not null)
            {
                result.Add(itemTile2);
            }
            ItemTile itemTile3 = GetItemTileTile(itemTile.posTile + Vector2Int.one, itemTile.floorIndex + 1);
            if (itemTile3 is not null)
            {
                result.Add(itemTile3);
            }
            ItemTile itemTile4 = GetItemTileTile(itemTile.posTile + Vector2Int.zero, itemTile.floorIndex + 1);
            if (itemTile4 is not null)
            {
                result.Add(itemTile4);
            }
        }
        return result;
    }
    public List<ItemTile> GetTileFloorDown(ItemTile itemTile)
    {
        if (itemTile.floorIndex == 0) return null;
        List<ItemTile> result = new List<ItemTile>();
        if (itemTile.floorIndex % 2 == 1)
        {
            ItemTile itemTile1 = GetItemTileTile(itemTile.posTile + Vector2Int.right, itemTile.floorIndex - 1);
            if (itemTile1 is not null)
            {
                result.Add(itemTile1);
            }
            ItemTile itemTile2 = GetItemTileTile(itemTile.posTile + Vector2Int.up, itemTile.floorIndex - 1);
            if (itemTile2 is not null)
            {
                result.Add(itemTile2);
            }
            ItemTile itemTile3 = GetItemTileTile(itemTile.posTile + Vector2Int.one, itemTile.floorIndex - 1);
            if (itemTile3 is not null)
            {
                result.Add(itemTile3);
            }
            ItemTile itemTile4 = GetItemTileTile(itemTile.posTile + Vector2Int.zero, itemTile.floorIndex - 1);
            if (itemTile4 is not null)
            {
                result.Add(itemTile4);
            }
        }
        else
        {
            ItemTile itemTile1 = GetItemTileTile(itemTile.posTile + Vector2Int.left, itemTile.floorIndex - 1);
            if (itemTile1 is not null)
            {
                result.Add(itemTile1);
            }
            ItemTile itemTile2 = GetItemTileTile(itemTile.posTile + Vector2Int.down, itemTile.floorIndex - 1);
            if (itemTile2 is not null)
            {
                result.Add(itemTile2);
            }
            ItemTile itemTile3 = GetItemTileTile(itemTile.posTile - Vector2Int.one, itemTile.floorIndex - 1);
            if (itemTile3 is not null)
            {
                result.Add(itemTile3);
            }
            ItemTile itemTile4 = GetItemTileTile(itemTile.posTile + Vector2Int.zero, itemTile.floorIndex - 1);
            if (itemTile4 is not null)
            {
                result.Add(itemTile4);
            }
        }
        return result;
    }
    //========================================Slot================================================

    public IEnumerator DoRestart()
    {
        levelStat = LevelStat.RESTART;
        yield return new WaitForSeconds(4);
        Restart();
    }

    public IEnumerator DoNextLevel()
    {
        levelStat = LevelStat.RESTART;
        yield return new WaitForSeconds(1);
        GamePlayManager.instance.ShowPopupWin();
        // GamePlayManager.instance.NextLevel();
    }

}




public class Node
{
    public Vector2Int position;
}

