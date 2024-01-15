using Core.GamePlay;
using Core.GamePlay.Booster;
using DG.Tweening;
using UnityEngine;

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
        void Start()
        {
            _levelManager = new _LevelManager();
            _slotHolders = new _SlotHolders(GameObject.Find("SlotHolder"), _pivotSlotsPosition);
            _boosterSystem = new _BoosterSystem();
            _GameManager.Instance.BoosterSystem = _boosterSystem;
            _GameManager.Instance.SlotHolders = _slotHolders;
            _slotHolders.Awake();
            _GameManager.Instance.OnWinGame += () =>
            {
                Debug.Log("Win Game");
            };
            _GameManager.Instance.OnLoseGame += () =>
            {
                Debug.Log("Lose Game");
            };
        }

        // Update is called once per frame
        void Update()
        {

        }
    }

}
