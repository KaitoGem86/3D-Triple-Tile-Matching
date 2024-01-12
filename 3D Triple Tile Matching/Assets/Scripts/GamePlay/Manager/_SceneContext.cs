using Core.GamePlay;
using DG.Tweening;
using UnityEngine;

namespace Core.Manager
{
    public class _SceneContext : MonoBehaviour
    {
        [SerializeField] private Vector3 _pivotSlotsPosition;

        private _LevelManager _levelManager;
        private _SlotHolders _slotHolders;

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
