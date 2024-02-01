using UnityEngine;

public class Tile : MonoBehaviour
{
    [SerializeField] private int _tileId;
    private SpriteRenderer _backGroundSprite;
    private float _scaleDuration = 0.5f;
    private float _scaleTimer = 0.0f;
    private bool _isScaling = false;
    private bool _isSelect = false;

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
        _backGroundSprite.color = Color.red;
        PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
    }
    public void AnimCollect()
    {
        _isScaling = true;
        _scaleTimer = -0.2f;
    }

    private void FixedUpdate()
    {
        if (_isScaling)
        {
            _scaleTimer += Time.fixedDeltaTime;
            if (_scaleTimer < 0)
                _scaleTimer += Time.fixedDeltaTime * 2;

            if (_scaleTimer >= _scaleDuration)
            {
                _isScaling = false;
                gameObject.SetActive(false);
            }
            else
            {
                float scale = 1.4f - 1.4f * (_scaleTimer / _scaleDuration);
                transform.localScale = new Vector3(scale, scale, scale);
            }
        }
    }

    public Vector3 GetPosition()
    {
        var pos = transform.position;
        pos.y -= _backGroundSprite.bounds.size.y;
        pos.x += _backGroundSprite.bounds.size.x / 2;
        return pos;
    }
}
