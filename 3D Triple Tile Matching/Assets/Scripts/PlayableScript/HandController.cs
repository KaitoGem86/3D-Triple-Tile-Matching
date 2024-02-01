// using System;
using System.Collections;
using System.Collections.Generic;

// using Cysharp.Threading.Tasks;
using DG.Tweening;
using UnityEngine;

public class HandController : MonoBehaviour{

    void Start(){
    }

    private float _time;
    private bool _isCompleteSegment;
    private bool _isCompleteSetVar;
    private bool _isCompleteTutorial = false;
    private float _timeFrame;
    private Vector3 _direction;
    private Vector3 _pos;
    private List<Tile> _listTile;

    // void FixedUpdate(){
    //     if(_isCompleteTutorial){
    //         return;
    //     }
    //     _time += Time.deltaTime;
    //     if(_time > 1.5f && _time < 2.75f){
    //         if(_isCompleteSegment){
    //             return;
    //         }
    //         if(!_isCompleteSetVar){
    //             _isCompleteSetVar = true;
    //             _pos = transform.position;
    //             _timeFrame = 0.75f / Time.fixedDeltaTime;
    //             Debug.Log("TimeFrame: " + _timeFrame);
    //         }
    //         _listTile = PlayableAdsManager.Instance.GetTile(1);
    //         Debug.Log("Move 1");
    //         var pos = Vector3.Lerp(_pos, _listTile[0].GetPosition(), 1/_timeFrame);
    //         transform.position = pos;
    //         if(Vector3.Distance(transform.position, _listTile[0].GetPosition()) < 0.1f){
    //             _listTile[0].OnMouseDown();
    //             _isCompleteSegment = false;
    //             _isCompleteSetVar = false;
    //         }
    //     }
    //     else if(_time > 2.75f && _time < 4.0f){
    //         if(_isCompleteSegment){
    //             return;
    //         }
    //         if(!_isCompleteSetVar){
    //             _isCompleteSetVar = true;
    //             _pos = transform.position;
    //             _timeFrame = 0.75f / Time.fixedDeltaTime;
    //             Debug.Log("TimeFrame: " + _timeFrame);
    //         }
    //         Debug.Log("Move 2");
    //         var pos = Vector3.Lerp(_pos, _listTile[1].GetPosition(), 1/_timeFrame);
    //         transform.position = pos;
    //         if(Vector3.Distance(transform.position, _listTile[1].GetPosition()) < 0.1f){
    //             _listTile[0].OnMouseDown();
    //             _isCompleteSegment = false;
    //             _isCompleteSetVar = false;
    //         }
    //     }
    //     else if(_time > 4.0f && _time < 5.25f){
    //         if(_isCompleteSegment){
    //             return;
    //         }
    //         if(!_isCompleteSetVar){
    //             _isCompleteSetVar = true;
    //             _pos = transform.position;
    //             _timeFrame = 0.75f / Time.fixedDeltaTime;
    //             Debug.Log("TimeFrame: " + _timeFrame);
    //         }
    //         Debug.Log("Move 3");
    //         var pos = Vector3.Lerp(_pos, _listTile[2].GetPosition(), 1/_timeFrame);
    //         transform.position = pos;
    //         if(Vector3.Distance(transform.position, _listTile[2].GetPosition()) < 0.1f){
    //             _listTile[0].OnMouseDown();
    //             _isCompleteSegment = false;
    //             _isCompleteSetVar = false;
    //             _isCompleteTutorial = true;
    //         }
    //     }
    // }

    void LateUpdate(){
        transform.position = transform.position + Vector3.left * Time.deltaTime;
    }
}