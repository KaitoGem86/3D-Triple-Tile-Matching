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
        }

        private void SetContainer(){
            _ContainerUI.ActivityContainer = transform.Find("Activity").GetComponent<ActivityContainer>();
            _ContainerUI.ModalContainer = transform.Find("Modal").GetComponent<ModalContainer>();
            _ContainerUI.ScreenContainer = transform.Find("Screen").GetComponent<ScreenContainer>();
        }
    }
}