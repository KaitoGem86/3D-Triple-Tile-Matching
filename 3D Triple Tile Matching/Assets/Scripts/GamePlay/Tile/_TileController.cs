using Core.GamePlay;
using Core.Manager;
using DG.Tweening;
using UnityEngine;

namespace Core.Tile
{
    public class _TileController : MonoBehaviour
    {
        private Vector3 _defaultScale;

        [SerializeField] private SpriteRenderer[] _spriteRenderers;

        private BoxCollider _boxCollider;
        private int _id = 0;
        private int _index = 0;
        private _TileStateEnum _tileState;
        private bool _isCanCollectTripleTile = false;
        private Vector3 _undoPosition;

        void Start()
        {
            _defaultScale = this.transform.localScale * 0.5f;
            _boxCollider = GetComponent<BoxCollider>();
        }


        public void OnMouseDown()
        {
            if (_tileState == _TileStateEnum.Selected || _tileState == _TileStateEnum.Moving)
                return;
            _undoPosition = this.transform.position;
            _tileState = _TileStateEnum.Moving;
            var selectSlotTupple = _GameManager.Instance.SlotHolders.GetSlotFreeForTile(_id);
            var slot = selectSlotTupple.Item2;
            _index = selectSlotTupple.Item1;
            slot.ContainedTile = this;
            _GameManager.Instance.BoosterSystem.ListHintTileManager.RemoveTile(this);
            _GameManager.Instance.SlotHolders.TileMovedManager.AddTileMoved(_index);
            _isCanCollectTripleTile = _GameManager.Instance.SlotHolders.NumOfTilesWithId(_id) == 3;
            AnimatedMovingToSlot(slot);
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

        public Sequence AnimatedMovingToSlot(_SlotController slot)
        {
            switch (_tileState)
            {
                case _TileStateEnum.Selected:
                    return MoveTileFromSlotToSlot(slot);
                case _TileStateEnum.Moving:
                case _TileStateEnum.Default:
                    return MoveFromTileBlockToSlot(slot);
                default:
                    throw new System.Exception("TileState is not Selected or Moving");
            }
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

        private Sequence MoveFromTileBlockToSlot(_SlotController slot)
        {
            var slotPostion = slot.Position;
            Sequence sequence = DOTween.Sequence();
            sequence.Append(this.transform.DOMove(slotPostion, 0.5f));
            sequence.Join(this.transform.DORotate(_GameManager.Instance.SlotHolders.SyncRotation.eulerAngles + Vector3.forward * 30, 0.5f));
            sequence.Join(this.transform.DOScale(_defaultScale, 0.5f));
            CurrentAnimSequence = sequence;
            sequence.OnComplete(() =>
            {
                this.transform.SetParent(slot.Transform);
                _tileState = _TileStateEnum.Selected;

                transform.position = slot.Position;
                transform.rotation = _GameManager.Instance.SlotHolders.SyncRotation;
                this.transform.DOLocalRotate(this.transform.localEulerAngles + Vector3.forward * 180, 3, RotateMode.FastBeyond360).SetLoops(-1, LoopType.Incremental).SetEase(Ease.Linear);
                // check can collect triple tile group
                if (_isCanCollectTripleTile)
                    _GameManager.Instance.SlotHolders.CollectTripleTile(_id, _index);
                //check if lose games
                _GameManager.Instance.SlotHolders.CheckLoseGame();
            });
            sequence.OnStart(() =>
            {
                SetLayer("TransparentFX");
                Vector3 pos = transform.position;
                pos = _GameManager.Instance.CameraGamePlay.WorldToScreenPoint(pos);
                pos = _GameManager.Instance.CameraCanvas.ScreenToWorldPoint(pos);
                transform.position = pos;
                Vector3 rot = transform.rotation.eulerAngles;
                rot -= (-_GameManager.Instance.CameraGamePlay.transform.rotation.eulerAngles + _GameManager.Instance.CameraCanvas.transform.rotation.eulerAngles);
                transform.rotation = Quaternion.Euler(rot);
            });
            return sequence;
        }

        private Sequence MoveTileFromSlotToSlot(_SlotController slot)
        {
            Sequence sequence = DOTween.Sequence();
            sequence.Append(this.transform.DOMove(slot.Position, 0.5f));
            sequence.OnStart(() =>
            {
                this.transform.SetParent(slot.Transform);
            });
            return sequence;
        }

        public void Undo()
        {
            _tileState = _TileStateEnum.Moving;
            Vector3 undoPos = _GameManager.Instance.CameraGamePlay.WorldToScreenPoint(_undoPosition);
            undoPos = _GameManager.Instance.CameraCanvas.ScreenToWorldPoint(undoPos);
            transform.SetParent(null);
            _GameManager.Instance.SlotHolders.UndoTile(_index, _id);
            transform.DOKill();
            Sequence sequence = DOTween.Sequence();
            sequence.Append(this.transform.DOMove(undoPos, 0.25f));
            sequence.Join(this.transform.DOScale(_defaultScale * 2, 0.25f));
            sequence.Join(this.transform.DORotate(-_GameManager.Instance.CameraGamePlay.transform.rotation.eulerAngles + _GameManager.Instance.CameraCanvas.transform.rotation.eulerAngles, 0.25f));
            sequence.OnComplete(() =>
            {
                SetLayer("GameElement");
                _tileState = _TileStateEnum.Default;
                Debug.Log(_undoPosition + " " + _id);
                this.transform.position = _undoPosition;
                this.transform.rotation = Quaternion.identity;
            });
        }

        public bool CheckCanHint(){
            _boxCollider.enabled = false;
            if(!Physics.Raycast(transform.position, Vector3.forward, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.forward * 10, Color.red, 10);
                return true;
            }
            if(!Physics.Raycast(transform.position, Vector3.back, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.back * 10, Color.red, 10);
                return true;
            }
            if(!Physics.Raycast(transform.position, Vector3.left, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.left * 10, Color.red, 10);
                return true;
            }
            if(!Physics.Raycast(transform.position, Vector3.right, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.right * 10, Color.red, 10);
                return true;
            }
            if(!Physics.Raycast(transform.position, Vector3.up, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.up * 10, Color.red, 10);
                return true;
            }
            if(!Physics.Raycast(transform.position, Vector3.down, 10, LayerMask.GetMask("GameElement"))){
                _boxCollider.enabled = true;
                Debug.DrawRay(transform.position, Vector3.down * 10, Color.red, 10);
                return true;
            }
            _boxCollider.enabled = true;
            return false;
        }


        public _TileStateEnum TileState { get => _tileState; set => _tileState = value; }
        public Sequence CurrentAnimSequence { get; private set; }
        public int Index
        {
            get => _index;
            set => _index = value;
        }
    }
}