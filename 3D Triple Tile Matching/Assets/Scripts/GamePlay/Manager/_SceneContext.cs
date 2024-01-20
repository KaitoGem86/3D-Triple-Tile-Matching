using Core.GamePlay;
using Core.GamePlay.Booster;
using Core.ResourcesKey;
using Cysharp.Threading.Tasks;
using DG.Tweening;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.Manager
{
    public class _SceneContext : MonoBehaviour
    {
        [SerializeField] private Vector3 _pivotSlotsPosition;

        private _LevelManager _levelManager;
        private _SlotHolders _slotHolders;
        private _BoosterSystem _boosterSystem;

        private void Awake()
        {
            DOTween.Init();
            Application.targetFrameRate = 60;
        }

        // Start is called before the first frame update
        private void Start()
        {
            LoadDontDestroyObject();
            SetUpCamera();
            LoadSlot();
            LoadLevel();
            _GameManager.Instance.OnWinGame += () =>
            {
                Debug.Log("Win Game");
            };
            _GameManager.Instance.OnLoseGame += () =>
            {
                Debug.Log("Lose Game");
            };
        }

        private async void SetUpCamera(){
            var cameraRotationPrefab = await AddressablesManager.LoadAssetAsync<GameObject>(_KeyPrefabsResources.GetKeyCameraRotationPrefab());
            var cameraRotation = Instantiate(cameraRotationPrefab);
            _GameManager.Instance.CameraGamePlay = cameraRotation.GameObject().transform.GetChild(0).GetComponent<Camera>();
            var cameraUIPrefab = await AddressablesManager.LoadAssetAsync<GameObject>(_KeyPrefabsResources.GetKeyUICameraPrefab());
            var cameraUI = Instantiate(cameraUIPrefab);
            _GameManager.Instance.CameraCanvas = cameraUI.GameObject().GetComponent<Camera>();
            _GameManager.Instance.CameraGamePlay.GetComponent<_CameraController>().SetUp();
        }

        private void LoadSlot(){
            var slotHolder = new GameObject("SlotHolder");
            _slotHolders = new _SlotHolders(slotHolder, _pivotSlotsPosition);
            _GameManager.Instance.SlotHolders = _slotHolders;
            _slotHolders.Awake();
        }

        private async void LoadLevel(){
            _levelManager = new _LevelManager();
            await _levelManager.LoadLevel();
            await UniTask.WaitUntil(() => _levelManager.IsLoaded);
            _boosterSystem = new _BoosterSystem(_levelManager.ListTileController);
            _GameManager.Instance.LevelManager = _levelManager;
            _GameManager.Instance.BoosterSystem = _boosterSystem;
        }

        private async void LoadDontDestroyObject(){
            var tmp = await AddressablesManager.LoadAssetAsync<GameObject>(_KeyPrefabsResources.GetKeyDontDestroyOnLoadPrefab());
            var go = Instantiate(tmp);
            go.GetComponent<_DontDestroyOnLoad>().Awake();
        }
    }

}
