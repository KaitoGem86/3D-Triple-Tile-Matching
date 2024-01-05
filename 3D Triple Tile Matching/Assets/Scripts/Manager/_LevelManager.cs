using Core.Extensions.File;
using Core.File;
using Core.Level;

namespace Core.Manager
{
    public class _LevelManager{

        private _LevelData _levelData;

        public _LevelManager(){
            LoadLevel();
        }

        private void LoadLevel(){
            // if new level => load from level path
            // if continued level => load from saved path
            _levelData = _JsonFileManager.LoadJsonFile<_LevelData>(_JsonPath.GetJsonPath("LevelDataTest"));
            // GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("3DTile");
            // foreach(var item in _levelData._tileElementDatas){
            //     var tmpTile = GameObject.Instantiate(tmp);
            //     tmpTile.GetComponent<_TileController>().SetSprite(item.id);
            //     tmpTile.transform.position = item.position;
            // }                  
        }

        // Save level which is currently playing to saved path
        private void SaveLevel(){

        }
    }
}