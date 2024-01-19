using ZBase.UnityScreenNavigator.Core;
using ZBase.UnityScreenNavigator.Core.Modals;
using ZBase.UnityScreenNavigator.Core.Views;

namespace Core.UI.Modals
{
    public class _Modal
    {
        // add modal, create base popup inherit from Modal, T is base popup
        // base pop up will have open or close animation method
        // animation method will be called when push or pop modal by these lines:
        //option.TryGetTransform(out var modal);
        //modal.GetComponent<T>().OpenAnimation(); 

        public static void ShowModal(_ModalEnum modalEnum)
        {
            var option = new ViewOptions(_KeyUIResources.GetModalPath(modalEnum), playAnimation: false);
            _ContainerUI.ModalContainer.Push(option);
        }

        public static async void ShowModalAsync<T>(_ModalEnum modalEnum) where T : _BaseModal
        {
            var option = new ViewOptions(_KeyUIResources.GetModalPath(modalEnum), playAnimation: false);
            await _ContainerUI.ModalContainer.PushAsync<T>(option);
            GetLastestModal().View.GetComponent<T>().Execute();
        }

        public static void HideModal<T>() where T : Modal
        {
            _ContainerUI.ModalContainer.Pop(playAnimation: false);
        }

        public static void HideModalAsync<T>() where T : Modal
        {
            _ContainerUI.ModalContainer.PopAsync(playAnimation: false);
        }

        public static void HideAllModal()
        {
            while (_ContainerUI.ModalContainer.Modals.Count > 0)
            {
                _ContainerUI.ModalContainer.Pop(playAnimation: false);
            }
        }

        private static ViewRef GetLastestModal()
        {
            if (_ContainerUI.ModalContainer.Modals.Count == 0) return default;
            return _ContainerUI.ModalContainer.Modals[_ContainerUI.ModalContainer.Modals.Count - 1];
        }
    }
}