using System.Collections.Generic;
using Core.Extensions.File;
using Core.File;
using Core.Level;
using Core.ResourcesKey;
using Core.Tile;
using Cysharp.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.Manager
{
    public class _LevelManager{

        private _LevelData _levelData;
        private List<_TileController> _listTileController;

        public _LevelManager(){
        }

        public async UniTask LoadLevel(){
            // if new level => load from level path
            // if continued level => load from saved path
            _levelData = _JsonFileManager.LoadJsonFile<_LevelData>("LevelDataTest");
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>(_KeyPrefabsResources.GetKeyTilePrefab());
            _listTileController = new List<_TileController>();
            foreach(var item in _levelData._tileElementDatas){
                var tmpTile = GameObject.Instantiate(tmp);
                tmpTile.name = item.id.ToString();
                tmpTile.GetComponent<_TileController>().InitTileCube(item.id);
                tmpTile.transform.position = item.position * 0.2f;
                _GameManager.Instance.NumOfTile++;
                _listTileController.Add(tmpTile.GetComponent<_TileController>());
            }
            IsLoaded = true;
        }

        // Save level which is currently playing to saved path
        private void SaveLevel(){

        }

        public List<_TileController> ListTileController => _listTileController;
        public bool IsLoaded {get; set;}
    }
}