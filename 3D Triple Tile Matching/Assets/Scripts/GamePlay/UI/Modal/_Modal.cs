using ZBase.UnityScreenNavigator.Core.Modals;
using ZBase.UnityScreenNavigator.Core.Views;

namespace Core.UI.Modals{
    public class _Modal{
        public static void ShowModal<T>(_ModalEnum modalEnum) where T : Modal{
            var option = new ViewOptions(_KeyUIResources.GetModalPath(modalEnum), playAnimation: false);
            _ContainerUI.ModalContainer.Push<T>(option);
        }

        public static void ShowModalAsync<T>(_ModalEnum modalEnum) where T : Modal{
            var option = new ViewOptions(_KeyUIResources.GetModalPath(modalEnum), playAnimation: false);
            _ContainerUI.ModalContainer.PushAsync<T>(option);
        }
    }
}