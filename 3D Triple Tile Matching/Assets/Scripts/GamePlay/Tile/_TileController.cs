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
            if (_tileState == _TileStateEnum.Selected || _tileState == _TileStateEnum.Moving)
                return;
            _tileState = _TileStateEnum.Moving;
            var selectSlotTupple = _GameManager.Instance.SlotHolders.GetSlotFreeForTile(_id);
            var slot = selectSlotTupple.Item2;
            slot.ContainedTile = this;
            Vector3 postion = slot.Position;
            Vector3 tmpPosition = _GameManager.Instance.CanvasGamePlay.worldCamera.WorldToScreenPoint(postion);
            tmpPosition = _GameManager.Instance.CameraGamePlay.ScreenToWorldPoint(tmpPosition);
            AnimatedMovingToSlot(tmpPosition, _GameManager.Instance.SlotHolders.SyncRotation.eulerAngles + _GameManager.Instance.SlotHolders.transform.TransformDirection(Vector3.forward * 30) - (-_GameManager.Instance.CameraGamePlay.transform.rotation.eulerAngles + _GameManager.Instance.CanvasGamePlay.worldCamera.transform.rotation.eulerAngles), this.transform.localScale * 0.5f)
                .OnComplete(
                    () =>
                    {
                        _tileState = _TileStateEnum.Selected;
                        this.transform.SetParent(slot.RectTransform);
                        SetLayer("TransparentFX");
                        transform.position = postion;
                        this.transform.DOLocalRotate(this.transform.localEulerAngles + Vector3.forward * 180, 3, RotateMode.FastBeyond360).SetLoops(-1, LoopType.Incremental).SetEase(Ease.Linear);
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

        public Sequence AnimatedCollected()
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(this.transform.DOScale(Vector3.zero, 0.5f).SetEase(Ease.InOutBack).OnComplete(() =>
            {
                gameObject.SetActive(false);
            }));
            return sequence;
        }

        private void SetLayer(string layer)
        {
            this.gameObject.layer = LayerMask.NameToLayer(layer);
            foreach (Transform child in this.transform)
            {
                child.gameObject.layer = LayerMask.NameToLayer(layer);
            }
        }

        public _TileStateEnum TileState => _tileState;
    }
}