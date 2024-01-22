using System.Threading.Tasks;
using Core.File;

namespace Core.Level{
    public class _MixLayerToLevel{
        public static void MixLayerToLevel(_LevelDataSO levelDataSO, _LevelData levelData){
            foreach(var itemData in levelDataSO.TileElementDatas){
                levelData._tileElementDatas.Add(itemData);
            }
        }

        public static void MixLayerToLevel(_LevelDataSO levelDataSO, _LevelData levelData, int layer){
            foreach(var itemData in levelDataSO.TileElementDatas){
                if(itemData.id == layer){
                    levelData._tileElementDatas.Add(itemData);
                }
            }
        }

        public async Task<_LevelData> MixLayerToLevel(){
            var middleLayer = await _JsonFileManager.LoadJsonFileFromAddressables<_LevelData>("Level2");
            var topLayer = await _JsonFileManager.LoadJsonFileFromAddressables<_LevelData>("Level3");
            
            var levelData = new _LevelData();
            foreach(var itemData in middleLayer._tileElementDatas){
                levelData._tileElementDatas.Add(itemData);
            }
            foreach(var itemData in topLayer._tileElementDatas){
                levelData._tileElementDatas.Add(itemData);
            }
            return middleLayer;
        }
    }
}