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
            Transform slot = _GameManager.Instance.SlotHolders.GetSlotPosition(0);
            Vector3 postion = slot.position;
            postion.z = Camera.main.nearClipPlane;
            postion = Camera.main.ScreenToWorldPoint(postion);
            this.transform.localScale = new Vector3(0.17f, 0.17f, 0.17f);
            this.transform.position = postion;
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