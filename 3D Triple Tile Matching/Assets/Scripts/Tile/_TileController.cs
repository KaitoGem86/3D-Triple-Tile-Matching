using UnityEngine;

namespace Core.Tile{
    public class _TileController : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer[] _spriteRenderers;


        private int _id;

        public void Execute(){
            SetSprite();
        }

        private void OnMouseDown(){
            Debug.Log("Tile Clicked");
        }
    
        private void SetSprite(){
              
        }
    }
}