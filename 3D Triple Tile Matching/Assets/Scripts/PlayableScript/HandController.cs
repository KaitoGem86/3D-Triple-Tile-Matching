// using System;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProjectGamePlay;
using UnityEngine;

public class HandController : MonoBehaviour
{

    private bool _isMoving = false;
    private Vector3 _targetPos;
    Action _onCompleteMoving;

    private void FixedUpdate()
    {
        if (_isMoving)
        {
            var pos = Vector3.Lerp(transform.position, _targetPos, Time.fixedDeltaTime * 3);
            transform.position = pos;
            if (Vector3.Distance(transform.position, _targetPos) < 0.1f)
            {
                _isMoving = false;
                _onCompleteMoving?.Invoke();
            }
        }
    }

    public async void SetTargetPosToMove(Vector3 targetPos, Action onCompleteMoving, float timeDelay)
    {
        await Task.Delay(TimeSpan.FromSeconds(timeDelay));
        _targetPos = targetPos;
        _isMoving = true;
        _onCompleteMoving = onCompleteMoving;
    }

    public void AutoMoveToTripleGroup(List<Tile> listHint)
    {
        SetTargetPosToMove(
                    listHint[0].transform.position, () =>
                    {
                        listHint[0].SetTileMovingLayer();
                        listHint[0].Animator.SetBool("IsSelect", true);
                        PlayableAdsManager.Instance.tileTapSound.Play();
                        listHint[0].OnTileCollect();
                        SetTargetPosToMove(
                            listHint[1].transform.position, () =>
                            {
                                listHint[1].SetTileMovingLayer();
                                listHint[1].Animator.SetBool("IsSelect", true);
                                listHint[1].OnTileCollect();
                                PlayableAdsManager.Instance.tileTapSound.Play();
                                SetTargetPosToMove(
                                    listHint[2].transform.position, () =>
                                    {
                                        listHint[2].SetTileMovingLayer();
                                        listHint[2].Animator.SetBool("IsSelect", true);
                                        listHint[2].OnTileCollect();
                                        PlayableAdsManager.Instance.tileTapSound.Play();
                                        SetTargetPosToMove(
                                            new Vector3(15, -15, 0), () =>
                                            {
                                                gameObject.SetActive(false);
                                                gameObject.SetActive(false);
                                            },
                                            0.25f
                                        );
                                        PlayableAdsManager.Instance.IsCompleteTutorial = true;
                                    },
                                    0.5f
                                );
                            },
                            0.75f
                        );
                    }, 0.75f);
    }
}