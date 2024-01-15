using Core.Manager;
using UnityEngine;
using UnityEngine.UI;

namespace Core.UI{
    public class _UILauncher : MonoBehaviour{
        [SerializeField] private Button _hintButton;
        [SerializeField] private Button _shuffleButton;
        [SerializeField] private Button _undoButton;

        private void Start(){
            _hintButton.onClick.RemoveAllListeners();
            _shuffleButton.onClick.RemoveAllListeners();
            _undoButton.onClick.RemoveAllListeners();
            _hintButton.onClick.AddListener(() => _GameManager.Instance.BoosterSystem.UseBooster(GamePlay.Booster._BoosterEnum.Hint));
            _shuffleButton.onClick.AddListener(() => _GameManager.Instance.BoosterSystem.UseBooster(GamePlay.Booster._BoosterEnum.Shuffle));
            _undoButton.onClick.AddListener(() => _GameManager.Instance.BoosterSystem.UseBooster(GamePlay.Booster._BoosterEnum.Undo));
        }
    }
}