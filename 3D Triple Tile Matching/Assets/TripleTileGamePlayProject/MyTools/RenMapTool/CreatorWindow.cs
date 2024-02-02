using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
public enum Floor
{
    Floor
}
#if UNITY_EDITOR
public class CreatorWindow : EditorWindow
{
    #region Private
    Texture2D headerSelec;
    Texture2D midSelect;
    Texture2D bottomSelect;
    private Color colorHeader = new Color(56f / 255f, 56f / 255f, 56f / 255f, 1);
    Rect headerRect;
    Rect midRect;
    Rect bottomRect;
    //STAT
    [HideInInspector] public static bool justOpened;
    [HideInInspector] public static bool unsaved;
    #endregion
    //Name
    public string fileName;
    public string filePathToSave = "Assets/Resources/LevelData";

    public int floorCount;
    public int tileCount;
    public int typeDataCount;
    public LevelManager level;

    //Data
    public List<ItemData> listItemDataOnMaps = new List<ItemData>();
    public ItemTile itemTilePrefab;

    [MenuItem("Window/Match-3 Creator")]
    static void OpenWindow()
    {
        justOpened = true;
        EditorWindow window = (CreatorWindow)EditorWindow.GetWindow(typeof(CreatorWindow), false);
        window.Show();
    }

    void OnGUI()
    {
        Draw();
        #region================================================ Header================================================================
        GUILayout.BeginArea(headerRect);
        GUILayout.Label("File", EditorStyles.boldLabel);//Label
        //fileName = EditorGUILayout.TextField("File Name", fileName);
        level = (LevelManager)EditorGUILayout.ObjectField("     LevelCurrent ", level, typeof(LevelManager), true);
        GUILayout.EndArea();
        #endregion

        #region ================================================Middle===============================================
        GUILayout.BeginArea(midRect);

        floorCount = EditorGUILayout.IntField("     FloorCount", floorCount);
        tileCount = EditorGUILayout.IntField("      TileCount", tileCount);
        typeDataCount = EditorGUILayout.IntField("      typeDataCount", typeDataCount);

        GUILayout.EndArea();
        #endregion

        #region ==============================================Bottom====================================================
        GUILayout.BeginArea(bottomRect);
        if (GUILayout.Button("MakeTileMap"))
        {
            SpawnTileMap();
            SaveTypeDataCount();
            EditorUtility.SetDirty(level);
            //this.Close();
        }
        if (GUILayout.Button("Save"))
        {
            CreateLevelData_ScriptableObject();
        }
        GUILayout.EndArea();
        #endregion
    }
    private void OnEnable()
    {
        InitTexture();
    }

    void OnDestroy()
    {
        if (!unsaved)
            return;

        if (EditorUtility.DisplayDialog("Save?",
                "Do you want to save before quit?", "Save", "No"))
        {
            //  SaveScriptable();
        }
    }

    void Draw()
    {
        DrawLayout();

    }
    void DrawLayout()
    {
        headerRect.x = 0;
        headerRect.y = 0;
        headerRect.width = Screen.width;
        headerRect.height = 100;

        midRect.x = 0;
        midRect.y = 100;
        midRect.width = Screen.width;
        midRect.height = Screen.height - 380;

        bottomRect.x = 0;
        bottomRect.y = Screen.height - 280;
        bottomRect.width = Screen.width;
        bottomRect.height = 280;

        GUI.DrawTexture(headerRect, headerSelec);
        GUI.DrawTexture(midRect, midSelect);
        GUI.DrawTexture(bottomRect, bottomSelect);
    }
    void InitTexture()
    {
        headerSelec = new Texture2D(1, 1);
        headerSelec.SetPixel(0, 0, colorHeader);
        headerSelec.Apply();

        midSelect = new Texture2D(1, 1);
        midSelect.SetPixel(0, 0, colorHeader);
        midSelect.Apply();

        bottomSelect = new Texture2D(1, 1);
        bottomSelect.SetPixel(0, 0, colorHeader);
        bottomSelect.Apply();
    }
    void SetStatUnSave()
    {
        if (justOpened)
        {
            justOpened = false;
            unsaved = true;
        }
    }
    void CreateLevelData_ScriptableObject()
    {
        if (string.IsNullOrEmpty(fileName) || string.IsNullOrEmpty(filePathToSave))
        {
            EditorUtility.DisplayDialog("Could not save", "File Name and File Path cannot be empty", "OK");
            return;
        }


        LevelData asset = ScriptableObject.CreateInstance<LevelData>();

        asset.listItemDataOnMaps = listItemDataOnMaps;
        asset.FloorCount = floorCount;

        AssetDatabase.CreateAsset(asset, filePathToSave + "/" + fileName + ".asset");
        AssetDatabase.SaveAssets();

        Debug.Log("Your level data is saved succesfully");

        unsaved = false;

        EditorUtility.SetDirty(asset);
        EditorUtility.FocusProjectWindow();
        Selection.activeObject = asset;
    }
    void SpawnTileMap()
    {
    }
    void SaveTypeDataCount()
    {

    }
}
#endif