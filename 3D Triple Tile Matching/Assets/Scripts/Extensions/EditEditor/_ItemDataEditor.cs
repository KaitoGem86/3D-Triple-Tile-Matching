using UnityEngine;
using System.IO;
using Test;

namespace Extensions.Editor{
    
    public class _ItemDataEditor{
        
        [UnityEditor.MenuItem("Tools/Clear All Data")]
        public static void ClearAllData(){
            if(File.Exists(_CreateJson.JsonPath)){
                //Debug.Log("Clear Data Test");
                File.Delete(_CreateJson.JsonPath);
            }
        }
    }
}