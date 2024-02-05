using System.Collections;
using ObjectPool;
using UnityEngine;

namespace ProjectGamePlay
{
    public class Tile : MonoBehaviour
    {
        [SerializeField] private int _tileId;
        [SerializeField] private Animator _animator;
        [SerializeField] private SpriteRenderer _backGroundSprite;
        [SerializeField] private SpriteRenderer _iconSprite;
        private bool _isSelect = false;
        private bool _isMoving = false;
        private Vector3 _targetPos;

        private TileStateEnum _tileState = TileStateEnum.UnCollected;

        private void Start()
        {
            //_backGroundSprite = GetComponent<SpriteRenderer>();
            //PlayableAdsManager.Instance.AddTile(_tileId, this);
        }

        public void OnTileCollect()
        {
            if (_isSelect)
            {
                return;
            }
            _isSelect = true;
            var item = PlayableAdsManager.Instance.SlotHolder.GetSlotFreeForTile(_tileId);
            SetTargetPosToMove(item.Item2.GetSlotPosition());
            SetTileMovingLayer();
            _animator.SetBool("IsMoveToSlot", true);
            item.Item2.ContainedTile = this;
        }
        public void AnimCollect()
        {
            _animator.SetBool("IsCollected", true);
        }

        public void AnimUnCollected()
        {
            _isSelect = false;
            _backGroundSprite.color = Color.white;
        }

        private void FixedUpdate()
        {
            if (_isMoving)
            {
                var pos = Vector3.Lerp(transform.position, _targetPos, Time.fixedDeltaTime * 15);
                transform.position = pos;
                if (Vector3.Distance(transform.position, _targetPos) < 0.1f)
                {
                    _isMoving = false;
                }
            }
        }

        public void SetSpriteIcon(int index)
        {
            _tileId = index;
            var sprite = PlayableAdsManager.Instance.SpriteSheetData.GetSprite(index);
            _iconSprite.sprite = sprite;
        }

        public void SetTargetPosToMove(Vector3 targetPos)
        {
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

        public void SetTileMovingLayer()
        {
            _backGroundSprite.sortingOrder = 3;
            _iconSprite.sortingOrder = 4;
        }

        public void ReturnToBlockLayer()
        {
            _backGroundSprite.sortingOrder = 1;
            _iconSprite.sortingOrder = 2;
        }

        public void OnTileInSlot()
        {
            Debug.Log("OnTileInSlot");
            PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
        }

        private IEnumerator WaitForCompleteParticle(ParticleSystem ps){
            while (ps.isPlaying)
            {
                yield return new WaitForSeconds(0.1f);
            }
            Pooling.Instance.ReturnToPool(_TypeGameObjectEnum.CollectEffect, ps.gameObject);
        }

        public void OnCompleteMoveToSlot()
        {
            _animator.SetBool("IsMoveToSlot", false);
            _backGroundSprite.sortingOrder = 1;
            _iconSprite.sortingOrder = 2;
            var t = Pooling.Instance.SpawnFromPool(_TypeGameObjectEnum.CollectEffect, transform.position, Quaternion.identity).GetComponent<ParticleSystem>();
            t.Play();
            StartCoroutine(WaitForCompleteParticle(t));
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

        public Animator Animator
        {
            get => _animator;
        }
    }
}