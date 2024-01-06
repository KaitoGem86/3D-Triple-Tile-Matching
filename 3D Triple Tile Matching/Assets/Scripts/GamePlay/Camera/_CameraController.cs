using CW.Common;
using UnityEngine;

public class _CameraController : MonoBehaviour
{
    [SerializeField] private float _sensitivity = 1.0f;
    [SerializeField] private float _damping = -1.0f;
    [SerializeField][Range(0.0f, 1.0f)] private float _inertia;
    [SerializeField] private Transform _cameraRotation;

    private Vector3 _remainingDelta;
    private Vector3 _lastMousePosition;

    private void Update()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            if (touch.phase == TouchPhase.Moved)
            {
                float rotationX = -touch.deltaPosition.y * _sensitivity * Time.deltaTime;
                float rotationY = touch.deltaPosition.x * _sensitivity * Time.deltaTime;

                _cameraRotation.Rotate(rotationX, rotationY, 0, Space.Self);
            }
        }
        //this.transform.LookAt(Vector3.zero);
    }
}
