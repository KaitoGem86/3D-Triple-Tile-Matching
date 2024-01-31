using DG.Tweening;
using UnityEngine;

public class Tile : MonoBehaviour
{
    [SerializeField] private int _tileId;
    private SpriteRenderer _backGroundSprite;

    private void Start(){
        _backGroundSprite = GetComponent<SpriteRenderer>();
        PlayableAdsManager.Instance.AddTile(_tileId, this);
    }

    private void OnMouseDown()
    {
        _backGroundSprite.color = Color.red;
        PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
    }

    public void AnimCollect()
    {
        transform.DOScale(Vector3.zero, 0.5f).SetEase(Ease.InBack).OnComplete(() => { gameObject.SetActive(false); });
    }
}
