using UnityEngine;

namespace Core.Extensions.File
{
    public static class _JsonPath
    {
        private static string _jsonPath = Application.persistentDataPath + "/";
        private static string _jsonResourcesPath = "Assets" + "/";
        private const string _jsonExtension = ".json";


        /// <summary>
        /// Get Path with json name
        /// </summary>
        /// <param name="jsonName"></param>
        /// <returns></returns>
        public static string GetJsonPath(string jsonName)
        {
            return _jsonResourcesPath + jsonName + _jsonExtension;
        }
    }
}