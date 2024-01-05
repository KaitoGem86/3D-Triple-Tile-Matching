using Core.Level;
using UnityEngine;

namespace Core.File{
    public static class _JsonFileManager{
        public static T LoadJsonFile<T>(string path){
            string json = System.IO.File.ReadAllText(path);
            T item = UnityEngine.JsonUtility.FromJson<T>(json);
            return item;
        }

        public static void SaveJsonFile<T>(string path, T data){
            string json = UnityEngine.JsonUtility.ToJson(data);
            Debug.Log(json);
            System.IO.File.WriteAllText(path, json);
        }
    }
}