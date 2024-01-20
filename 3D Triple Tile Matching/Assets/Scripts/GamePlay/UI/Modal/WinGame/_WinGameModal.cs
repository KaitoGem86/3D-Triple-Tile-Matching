using Core.Manager;
using UnityEngine;

namespace Core.UI.Modals{
    public class _WinGameModal : _BaseModal{
        public override void Execute(){
            base.Execute();
            _isExecute = true;
        }

        public void NextLevel(){
            _GameManager.Instance.NextLevel();
            _Modal.HideAllModal();
        }

        public void Replay(){
            Debug.Log("Replay");
        }
    }
}