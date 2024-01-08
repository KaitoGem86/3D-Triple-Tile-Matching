using Core.GamePlay;
using Core.Manager;
using UnityEngine;

namespace Core.Tile
{
    public class _TileController : MonoBehaviour
    {
        [SerializeField] private SpriteRenderer[] _spriteRenderers;

        private int _id = 5;
        private _TileStateEnum _tileState;

        public void Execute()
        {
            SetSprite();
        }

        private void OnMouseDown()
        {
            if (_tileState == _TileStateEnum.Selected)
                return;
            _tileState = _TileStateEnum.Selected;
            var selectSlotTupple = _GameManager.Instance.SlotHolders.GetSlotFreeForTile(_id);
            var slot = selectSlotTupple.Item2;
            Vector3 postion = slot.Transform.position;
            this.transform.localScale = new Vector3(6f, 6f, 6f);
            this.transform.position = postion;
            this.transform.SetParent(slot.Transform);
            slot.ContainedTile = this;
            // check can collect triple tile group
            _GameManager.Instance.SlotHolders.CollectTripleTile(_id, selectSlotTupple.Item1);
        }

        public async void SetSprite()
        {
            var tmp = await _SpriteManager.GetTileSprite(_id);
            foreach (var spriteRenderer in _spriteRenderers)
            {
                spriteRenderer.sprite = tmp;
            }
        }

        public void InitTileCube(int id)
        {
            _id = id;
            _tileState = _TileStateEnum.Default;
            SetSprite();
        }

        public int Id => _id;
    }
}