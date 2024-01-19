using Core.Manager;
using UnityEngine;
using UnityEngine.UI;

namespace Core.UI.Screens
{
    public class _GamePlayScreen : _BaseScreen   
    {
            [SerializeField] Button _hintButton;
            [SerializeField] Button _undoButton;
            

            public override void Execute(){
                if(_isExecute) return;
                AddListener();
                _isExecute = true;
            }

            private void AddListener(){
                _hintButton.onClick.RemoveAllListeners();
                _undoButton.onClick.RemoveAllListeners();
                _hintButton.onClick.AddListener(() => _GameManager.Instance.BoosterSystem.UseBooster(GamePlay.Booster._BoosterEnum.Hint));
                _undoButton.onClick.AddListener(() => _GameManager.Instance.BoosterSystem.UseBooster(GamePlay.Booster._BoosterEnum.Undo));
            }
    }
}