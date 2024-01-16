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
            Vector3 rotation = _cameraRotation.rotation.eulerAngles;
            rotation.x -= remainTmp.y;
            rotation.y += remainTmp.x;
            _cameraRotation.rotation = Quaternion.Euler(rotation);

            if (_damping > 0.0f)
            {
                _remainingDelta = Vector3.Lerp(_remainingDelta, Vector3.zero,  Time.deltaTime);
            }
            // if(Input.GetMouseButtonDown(0)){
            //     _rid.AddRelativeTorque(new Vector3(0, 0, 1000));
            // }        
        }
    }
}
