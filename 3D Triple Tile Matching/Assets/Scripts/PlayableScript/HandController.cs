// using System;
using System.Collections.Generic;

// using Cysharp.Threading.Tasks;
using UnityEngine;

public class HandController : MonoBehaviour
{

    private float _time;
    private bool _isCompleteSegment;
    private bool _isCompleteSetVar;
    private bool _isCompleteTutorial = false;
    private float _timeFrame;
    private Vector3 _pos;
    private List<ProjectGamePlay.Tile> _listTile;

    void FixedUpdate()
    {
        if (_isCompleteTutorial)
        {
            _pos = new Vector3(15, -20, 0) - transform.position;
            _pos = _pos / 16;
            transform.position += _pos;
            if (Vector3.Distance(transform.position, new Vector3(15, -20, 0)) < 0.1f)
            {
                Destroy(gameObject);
            }
            return;
        }
        _time += Time.deltaTime;
        if (_time > 1.5f && _time < 2.25f)
        {
            if (!_isCompleteSetVar)
            {
                _isCompleteSetVar = true;
                _listTile = PlayableAdsManager.Instance.GetTile(1);
                _timeFrame = 8;
            }
            if (_isCompleteSegment)
            {
                return;
            }
            _pos = _listTile[0].GetPosition() - transform.position;
            _pos = _pos / _timeFrame;
            transform.position += _pos;
            if (Vector3.Distance(transform.position, _listTile[0].GetPosition()) < 0.1f)
            {
                _listTile[0].OnTileCollect();
                _isCompleteSegment = true;
                _isCompleteSetVar = false;
            }
        }
        else if (_time > 2.25f && _time < 2.75f)
        {
            _isCompleteSegment = false;
        }
        else if (_time > 2.75f && _time < 3.5f)
        {
            if (_isCompleteSegment)
            {
                return;
            }
            _pos = _listTile[1].GetPosition() - transform.position;
            _pos = _pos / _timeFrame;
            transform.position += _pos;
            if (Vector3.Distance(transform.position, _listTile[1].GetPosition()) < 0.1f)
            {
                _listTile[1].OnTileCollect();
                _isCompleteSegment = true;
                _isCompleteSetVar = false;
            }
        }
        else if (_time > 3.5f && _time < 4.0f)
        {
            _isCompleteSegment = false;

        }
        else if (_time > 4.0f && _time < 4.75f)
        {
            if (_isCompleteSegment)
            {
                return;
            }
            _pos = _listTile[2].GetPosition() - transform.position;
            _pos = _pos / _timeFrame;
            transform.position += _pos;
            if (Vector3.Distance(transform.position, _listTile[2].GetPosition()) < 0.1f)
            {
                _listTile[2].OnTileCollect();
                _isCompleteSegment = true;
                _isCompleteSetVar = false;
            }
        }
        else if (_time > 5.0f)
        {
            _isCompleteTutorial = true;

        }
    }
}