using CW.Common;
using UnityEngine;

public class _CameraController : MonoBehaviour
{
    [SerializeField] private float _sensitivity = 1.0f;
    [SerializeField] private float _damping = -1.0f;
    [SerializeField] [Range(0.0f, 1.0f)] private float _inertia;
    [SerializeField] private Transform _cameraRotation;

    private Vector3 _remainingDelta;
    private Vector3 _lastMousePosition;

    private void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
        _lastMousePosition = Input.mousePosition;
    }

    private void LateUpdate()
    {
        Vector3 currentMousePosition = Vector3.zero;
        if (Input.GetMouseButton(0))
            currentMousePosition = Input.mousePosition;
        Debug.Log(currentMousePosition);
        Vector3 mouseDelta = currentMousePosition - _lastMousePosition;

        float mouseX = mouseDelta.x * _sensitivity;
        float mouseY = mouseDelta.y * _sensitivity;

        Vector3 rotation = _cameraRotation.localRotation.eulerAngles;
        rotation.x -= mouseY;
        rotation.y += mouseX;
        rotation.z = 0f;

        _cameraRotation.localRotation = Quaternion.Euler(rotation);

        if (Input.GetMouseButtonUp(0))
        {
            _remainingDelta = new Vector3(mouseX, -mouseY, 0f) * _inertia;
        }

        _remainingDelta = Vector3.Lerp(_remainingDelta, Vector3.zero, _damping * Time.deltaTime);
        _cameraRotation.localRotation *= Quaternion.Euler(_remainingDelta);
        if(Input.GetMouseButton(0))
            _lastMousePosition = currentMousePosition;
        else
            _lastMousePosition = Vector3.zero;
    }
}
