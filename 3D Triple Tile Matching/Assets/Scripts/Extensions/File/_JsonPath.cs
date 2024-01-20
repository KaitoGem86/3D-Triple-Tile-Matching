using UnityEngine;

namespace Core.Extensions.File
{
    public static class _JsonPath
    {
        private const string _jsonExtension = ".json";

        private static string _jsonLevelDataPath = "Assets/TextData/LevelData/";

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