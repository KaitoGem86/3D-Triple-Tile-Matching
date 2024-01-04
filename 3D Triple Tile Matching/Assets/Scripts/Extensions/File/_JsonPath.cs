using UnityEngine;

namespace Core.Extensions.File
{
    public static class _JsonPath
    {
        private static string _jsonPath = Application.dataPath + "/Data/";
        private const string _jsonExtension = ".json";

        public static string GetJsonPath(string jsonName)
        {
            return _jsonPath + jsonName + _jsonExtension;
        }
    }
}