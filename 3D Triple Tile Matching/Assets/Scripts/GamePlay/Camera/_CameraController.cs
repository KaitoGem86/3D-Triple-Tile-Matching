using Core.CameraGamePlay;
using Core.Manager;
using UnityEngine;

namespace Core.GamePlay
{
    public class _CameraController : MonoBehaviour
    {
        [SerializeField] private float _sensitivity = 1.0f;
        [SerializeField] private float _damping = -1.0f;
        [SerializeField][Range(0.0f, 1.0f)] private float _inertia;
        [SerializeField] private Transform _cameraRotation;
        [SerializeField] private Transform _camera;
        [SerializeField] private Rigidbody _rid; 


        private Vector3 _remainingDelta;
        private Vector3 _lastMousePosition;

        private void Awake()
        {
            SetCameraSize();
        }


        private void LateUpdate()
        {
            if ((Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began) || Input.GetMouseButtonDown(0))
            {
                _lastMousePosition = Input.mousePosition;
            }
            else if ((Input.touchCount > 0 && Input.GetTouch(0).phase != TouchPhase.Began) || Input.GetMouseButton(0))
            {
                Vector3 mouseDelta = Input.mousePosition - _lastMousePosition;
                _lastMousePosition = Input.mousePosition;

                _remainingDelta = mouseDelta * _sensitivity * Time.deltaTime;
            }

            Vector3 remainTmp = _remainingDelta;
            // Vector3 rotation = _cameraRotation.rotation.eulerAngles;
            // remainTmp = _GameManager.Instance.CameraGamePlay.transform.InverseTransformDirection(remainTmp);
            // rotation.x -= remainTmp.y;
            // rotation.y += remainTmp.x;
            // _cameraRotation.rotation = Quaternion.Euler(rotation);
            _cameraRotation.Rotate(Vector3.left, remainTmp.y, Space.Self);
            _cameraRotation.Rotate(Vector3.up, remainTmp.x, Space.Self);
                                                                                                                                                                                                                                                                    
            if (_damping > 0.0f)
            {
                _remainingDelta = Vector3.Lerp(_remainingDelta, Vector3.zero, _inertia);
            }     
        }

        //Set Camera size by modify position.z and position.y of camera
        private void SetCameraSize(){
            var cameraSize = _GameManager.Instance.CameraCanvas.aspect;
            if(cameraSize < 0.5 && cameraSize > 0.4)
                _GameManager.Instance.CameraCanvas.transform.position = _ConstantCameraSetting._9x21PositionSetting;
            if(cameraSize < 0.6 && cameraSize > 0.5)
                _GameManager.Instance.CameraCanvas.transform.position = _ConstantCameraSetting._9x16PositionSetting;
            Debug.Log(cameraSize);
        }
    }
}
