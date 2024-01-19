using Core.Manager;
using Core.UI.Modals;
using UnityEngine;
using ZBase.UnityScreenNavigator.Core;
using ZBase.UnityScreenNavigator.Core.Activities;
using ZBase.UnityScreenNavigator.Core.Modals;
using ZBase.UnityScreenNavigator.Core.Screens;

namespace Core.UI{
    public class _UILaunch : UnityScreenNavigatorLauncher{
        protected override void Start()
        {
            base.Start();
            SetContainer();
            SetEvent();
        }

        private void SetContainer(){
            _ContainerUI.ActivityContainer = transform.Find("Activity").GetComponent<ActivityContainer>();
            _ContainerUI.ModalContainer = transform.Find("Modal").GetComponent<ModalContainer>();
            _ContainerUI.ScreenContainer = transform.Find("Screen").GetComponent<ScreenContainer>();
        }

        private void SetEvent(){
            _GameManager.Instance.OnWinGame -= () => _Modal.ShowModal<Modal>(_ModalEnum.WinGame);
            _GameManager.Instance.OnWinGame += () => _Modal.ShowModal<Modal>(_ModalEnum.WinGame);
            // _GameManager.Instance.OnLoseGame -= () => _Modal.ShowModal<Modal>(_ModalEnum.LoseGame);
            // _GameManager.Instance.OnLoseGame += () => _Modal.ShowModal<Modal>(_ModalEnum.LoseGame);
        }
    }
}