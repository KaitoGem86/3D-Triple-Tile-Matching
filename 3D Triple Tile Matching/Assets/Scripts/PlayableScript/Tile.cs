using System;
using DG.Tweening;
using UnityEngine;

public class Tile : MonoBehaviour
{
    [SerializeField] private int _tileId;
    private SpriteRenderer _backGroundSprite;

    private Action _onDeviceData;

    private void Start(){
        _backGroundSprite = GetComponent<SpriteRenderer>();
        PlayableAdsManager.Instance.AddTile(_tileId, this);
        Luna.Unity.LifeCycle.OnResume +=  () =>{ Debug.Log("onDeviceData: "); };
    }

    // void Update(){
    //     if (Input.GetMouseButtonDown(0)){
    //         Vector2 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
    //         RaycastHit2D hit = Physics2D.Raycast(mousePosition, Vector2.zero);
    //         if (hit.collider != null){
    //             if (hit.collider.gameObject == gameObject){
    //                 OnMouseDown();
    //             }
    //         }
    //     }
    // }

    public void OnMouseDown()
    {
        _backGroundSprite.color = Color.red;
        PlayableAdsManager.Instance.AddCollectTile(_tileId, this);
    }

    public void AnimCollect()
    {
        transform.DOScale(Vector3.zero, 0.5f).SetEase(Ease.InBack).OnComplete(() => { gameObject.SetActive(false); });
    }
}
