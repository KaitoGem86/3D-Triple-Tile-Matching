using Core.Extensions.File;
using Core.File;
using Core.Level;
using Core.Tile;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.Manager
{
    public class _LevelManager{

        private _LevelData _levelData;

        public _LevelManager(){
            LoadLevel();
        }

        private async void LoadLevel(){
            // if new level => load from level path
            // if continued level => load from saved path
            _levelData = _JsonFileManager.LoadJsonFile<_LevelData>(_JsonPath.GetJsonPath("LevelDataTest"));
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("3DTile");
            foreach(var item in _levelData._tileElementDatas){
                var tmpTile = GameObject.Instantiate(tmp);
                tmpTile.name = item.id.ToString();
                tmpTile.GetComponent<_TileController>().InitTileCube(item.id);
                tmpTile.transform.position = item.position * 0.2f;
                _GameManager.Instance.NumOfTile++;
            }                  
        }

        // Save level which is currently playing to saved path
        private void SaveLevel(){

        }
    }
}