using System.IO;
using Core.Level;
using UnityEngine;

namespace Test{
    public static class _CreateJson{
        public static string JsonPath = Application.dataPath + "/Data.json";

        public static void TestCreateJson(){
            _TileElementData tileElementData = new _TileElementData();
            tileElementData.id = 1;
            tileElementData.position = Vector3.zero;
            string json = JsonUtility.ToJson(tileElementData);
            File.WriteAllText(JsonPath, json);
        }

        public static void TestLoadJson(){
            string json = File.ReadAllText(JsonPath);
            _TileElementData tile = JsonUtility.FromJson<_TileElementData>(json);
            Debug.Log(tile.id);
            Debug.Log(tile.position);
        }
    }
}