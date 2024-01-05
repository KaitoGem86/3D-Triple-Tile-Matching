using Core.Level;
using UnityEngine;

namespace Core.File{
    public static class _JsonFileManager{

        /// <summary>
        /// load json from path, return object
        /// only public fields will be serialized
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="path"></param>
        /// <returns></returns>
        public static T LoadJsonFile<T>(string path){
            string json = System.IO.File.ReadAllText(path);
            T item = UnityEngine.JsonUtility.FromJson<T>(json);
            return item;
        }


        /// <summary>
        /// save object to json file
        /// only public fields will be serialized
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="path"></param>
        /// <param name="data"></param>
        public static void SaveJsonFile<T>(string path, T data){
            string json = UnityEngine.JsonUtility.ToJson(data);
            Debug.Log(json);
            System.IO.File.WriteAllText(path, json);
        }
    }
}