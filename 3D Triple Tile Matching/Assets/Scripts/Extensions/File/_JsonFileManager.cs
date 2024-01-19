using Core.Extensions.File;
using Core.Level;
using UnityEditor;
using UnityEditor.AddressableAssets;
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
            //string json = System.IO.File.ReadAllText(path);
            string json = Resources.Load<TextAsset>(path).text;
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

            AddressableAssetUtility.AddAssetToAddressables("LevelDataTest", "TextData");
        }
    }

    public class AddressableAssetUtility{
        public static void AddAssetToAddressables(string addressName, string groupName){
            var settings = AddressableAssetSettingsDefaultObject.Settings;

            var group = settings.FindGroup(groupName);
            if (group == null){
                group = settings.CreateGroup(groupName, false, false, true, null);
            }

            var entry = settings.CreateOrMoveEntry(AssetDatabase.AssetPathToGUID(_JsonPath.GetJsonPath(addressName)), group);
            entry.address = addressName;
        }
    }
}