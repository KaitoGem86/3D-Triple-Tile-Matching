namespace Core.File{
    public static class _JsonFileManager{
        public static T LoadJsonFile<T>(string path){
            string json = System.IO.File.ReadAllText(path);
            return UnityEngine.JsonUtility.FromJson<T>(json);
        }

        public static void SaveJsonFile<T>(string path, T data){
            string json = UnityEngine.JsonUtility.ToJson(data);
            System.IO.File.WriteAllText(path, json);
        }
    }
}