using ZBase.UnityScreenNavigator.Core.Screens;
using ZBase.UnityScreenNavigator.Core.Views;

namespace Core.UI.Screens
{
    public class _Screen
    {
           public static void ShowScreen<T>(_ScreenEnum screenEnum) where T : Screen
        {
            var option = new ViewOptions(_KeyUIResources.GetScreenPath(screenEnum), playAnimation: false);
            _ContainerUI.ScreenContainer.Push<T>(option);
        }

        public static void ShowScreenAsync<T>(_ScreenEnum screenEnum) where T : Screen
        {
            var option = new ViewOptions(_KeyUIResources.GetScreenPath(screenEnum), playAnimation: false);
            _ContainerUI.ScreenContainer.PushAsync<T>(option);
        }

        public static void HideScreen<T>() where T : Screen
        {
            _ContainerUI.ScreenContainer.Pop(playAnimation: false);
        }

        public static void HideScreenAsync<T>() where T : Screen
        {
            _ContainerUI.ScreenContainer.PopAsync(playAnimation: false);
        }

        public static void HideAllModal()
        {
            while (_ContainerUI.ScreenContainer.Screens.Count > 0)
            {
                _ContainerUI.ScreenContainer.Pop(playAnimation: false);
            }
        }
    }
}