using System.Threading.Tasks;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.Manager
{
    public static class _SpriteManager
    {
        public static Task<Sprite> GetTileSprite(int id){
            return Addressables.LoadAssetAsync<Sprite>(_KeySprites.GetKeyTileSprite(id)).Task;
        }
    }
}