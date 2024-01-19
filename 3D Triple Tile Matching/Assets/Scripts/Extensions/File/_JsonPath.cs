using UnityEngine;

namespace Core.Extensions.File
{
    public static class _JsonPath
    {
        private static string _jsonPath = Application.persistentDataPath + "/";
        private static string _jsonResourcesPath = "Assets" + "/";
        private const string _jsonExtension = ".json";

        private static string _jsonLevelDataPath = "Assets/TextData/LevelData/";



        /// <summary>
        /// Get Path with json name
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static string GetJsonPath(string jsonName)
        {
            return _jsonResourcesPath + jsonName + _jsonExtension;
        }

        /// <summary>
        /// Get Path to save json file, jsonName used as addressable name
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static string GetJsonLevelDataPath(string jsonName)
        {
            return _jsonLevelDataPath + jsonName + _jsonExtension;
        }
    }
}