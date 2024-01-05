using Core.Manager;
using UnityEngine;

namespace Core.Tile{
    public class _TileController : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer[] _spriteRenderers;
        private int _id = 5;

        public void Execute(){
            SetSprite();
        }

        private void OnMouseDown(){
            Debug.Log("Tile Clicked");
        }
    
        public async void SetSprite(){
            var tmp = await _SpriteManager.GetTileSprite(_id);
            foreach (var spriteRenderer in _spriteRenderers)
            {
                spriteRenderer.sprite = tmp;
            }
        }

        public void InitTileCube(int id){
            _id = id;
            SetSprite();
        }
    }
}