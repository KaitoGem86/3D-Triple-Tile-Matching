using UnityEngine;
using System.IO;
using Core.Extensions.File;

namespace Extensions.Editor{
    
    public class _ItemDataEditor{
        
        [UnityEditor.MenuItem("Tools/Clear All Data")]
        public static void ClearAllData(){
            if(File.Exists(_JsonPath.GetJsonPath("LevelDataTest"))){
                Debug.Log("Clear Data Test");
                File.Delete(_JsonPath.GetJsonPath("LevelDataTest"));
            }
        }
    }
}