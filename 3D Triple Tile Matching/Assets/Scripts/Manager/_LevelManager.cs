using UnityEngine;

namespace Core.Manager
{
    public class _LevelManager{
        public _LevelManager(){
            LoadLevel();
        }

        private void LoadLevel(){
            // if new level => load from level path
            // if continued level => load from saved path
            Debug.Log("Load Level");
        }

        // Save level which is currently playing to saved path
        private void SaveLevel(){

        }
    }
}