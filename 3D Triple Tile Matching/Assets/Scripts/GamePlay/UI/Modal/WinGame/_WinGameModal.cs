using Core.Manager;
using UnityEngine;

namespace Core.UI.Modals{
    public class _WinGameModal : _BaseModal{
        public override void Execute(){
            base.Execute();
            _isExecute = true;
        }

        public async void NextLevel(){
            await  _GameManager.Instance.LevelManager.LoadLevel();
            _Modal.HideAllModal();
        }

        public void Replay(){
            Debug.Log("Replay");
        }
    }
}