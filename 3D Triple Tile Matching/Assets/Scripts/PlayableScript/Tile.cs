using UnityEngine;

namespace ProjectGamePlay
{
    public class Tile : MonoBehaviour
    {
        [SerializeField] private int _tileId;
        [SerializeField] private Animator _animator;
        private SpriteRenderer _backGroundSprite;
        private bool _isSelect = false;
        private bool _isMoving = false;
        private Vector3 _targetPos;

        private TileStateEnum _tileState = TileStateEnum.UnCollected;
        private SlotHolder _slotHolder;

        private void Start()
        {
            _backGroundSprite = GetComponent<SpriteRenderer>();
            PlayableAdsManager.Instance.AddTile(_tileId, this);
        }

        public void OnTileCollect()
        {
            if (_isSelect)
            {
                return;
            }
            _isSelect = true;
            //_backGroundSprite.color = Color.red;
            var item = PlayableAdsManager.Instance.SlotHolder.GetSlotFreeForTile(_tileId);
            SetTargetPosToMove(item.Item2.GetSlotPosition());
            item.Item2.ContainedTile = this;
            PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
        }
        public void AnimCollect()
        {
        }

        public void AnimUnCollected()
        {
            _isSelect = false;
            _backGroundSprite.color = Color.white;
        }

        private void FixedUpdate()
        {
            if(_isMoving){
                var pos = Vector3.Lerp(transform.position, _targetPos, Time.fixedDeltaTime * 15);
                transform.position = pos;
                if(Vector3.Distance(transform.position, _targetPos) < 0.1f){
                    _isMoving = false;
                }
            }
        }

        public void SetTargetPosToMove(Vector3 targetPos){
            _targetPos = targetPos;
            _isMoving = true;
        }

        public Vector3 GetPosition()
        {
            var pos = transform.position;
            pos.y -= _backGroundSprite.bounds.size.y;
            pos.x += _backGroundSprite.bounds.size.x / 2;
            return pos;
        }

        public TileStateEnum TileState
        {
            get => _tileState;
            set => _tileState = value;
        }

        public int Id
        {
            get => _tileId;
            set => _tileId = value;
        } 
    }
}