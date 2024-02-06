// using System;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
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
}