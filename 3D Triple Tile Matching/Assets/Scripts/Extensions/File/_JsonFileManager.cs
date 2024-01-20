using Core.Extensions.File;
using Core.Level;
using UnityEditor;
using UnityEngine;
using UnityEngine.AddressableAssets;
using System.Threading.Tasks;


#if UNITY_EDITOR
using UnityEditor.AddressableAssets;
#endif

namespace Core.File{
    public static class _JsonFileManager{

        /// <summary>
        /// load json from addressables group by addressableName, return object
        /// only public fields will be serialized
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="addressablesName"></param>
        /// <returns></returns>
        public static async Task<T> LoadJsonFileFromAddressables<T>(string addressablesName){
            var textAsset = await AddressablesManager.LoadAssetAsync<TextAsset>(addressablesName);
            string json = textAsset.Value.text;
            T item = UnityEngine.JsonUtility.FromJson<T>(json);
            return item;
        }

#if UNITY_EDITOR
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

            AddressableAssetUtility.AddLevelDataAssetToAddressables("LevelDataTest", "TextData");
        }
#endif
    }

#if UNITY_EDITOR
    public class AddressableAssetUtility{
        public static void AddLevelDataAssetToAddressables(string addressName, string groupName){
            var settings = AddressableAssetSettingsDefaultObject.Settings;

            var group = settings.FindGroup(groupName);
            if (group == null){
                group = settings.CreateGroup(groupName, false, false, true, null);
            }

            var entry = settings.CreateOrMoveEntry(AssetDatabase.AssetPathToGUID(_JsonPath.GetJsonLevelDataPath(addressName)), group);
            entry.address = addressName;
            entry.SetLabel("TextData", true, true, true);
        }
    }
#endif
}