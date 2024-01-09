using Core.GamePlay;
using Core.Manager;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UIElements;

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
            Vector3 postion = slot.Position;
            Vector3 tmpPosition = _GameManager.Instance.CanvasGamePlay.worldCamera.WorldToScreenPoint(postion);
            tmpPosition = _GameManager.Instance.CameraGamePlay.ScreenToWorldPoint(tmpPosition);
            AnimatedMovingToSlot(tmpPosition, slot.RectTransform.rotation.eulerAngles - (-_GameManager.Instance.CameraGamePlay.transform.rotation.eulerAngles + _GameManager.Instance.CanvasGamePlay.worldCamera.transform.rotation.eulerAngles), this.transform.localScale * 0.5f)
                .OnComplete(
                    () =>
                    {
                        this.transform.SetParent(slot.RectTransform);
                        SetLayer("TransparentFX");
                        transform.position = postion;
                        transform.rotation = slot.RectTransform.rotation;
                        this.transform.DOLocalRotate(Vector3.forward * 200, 3).SetLoops(-1, LoopType.Incremental).SetEase(Ease.Linear);
                        slot.ContainedTile = this;
                        // check can collect triple tile group
                        _GameManager.Instance.SlotHolders.CollectTripleTile(_id, selectSlotTupple.Item1);
                        //check if lose games
                        _GameManager.Instance.SlotHolders.CheckLoseGame();
                    }
                );
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

        public Sequence AnimatedMovingToSlot(Vector3 position, Vector3 rotation = default, Vector3 scale = default)
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(this.transform.DOMove(position, 0.5f));
            if (rotation != default)
                sequence.Join(this.transform.DORotate(rotation, 0.5f));
            if (scale != default)
                sequence.Join(this.transform.DOScale(scale, 0.5f));
            return sequence;
        }

        private void SetLayer(string layer){
            this.gameObject.layer = LayerMask.NameToLayer(layer);
            foreach (Transform child in this.transform)
            {
                child.gameObject.layer = LayerMask.NameToLayer(layer);
            }
        }
    }
}