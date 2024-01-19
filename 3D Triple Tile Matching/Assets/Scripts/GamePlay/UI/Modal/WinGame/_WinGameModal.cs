using UnityEngine;

namespace Core.UI.Modals{
    public class _WinGameModal : _BaseModal{
        public override void Execute(){
            base.Execute();
            _isExecute = true;
        }

        public void NextLevel(){
            Debug.Log("Next Level");
        }

        public void Replay(){
            Debug.Log("Replay");
        }
    }
}