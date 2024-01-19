using ZBase.UnityScreenNavigator.Core;
using ZBase.UnityScreenNavigator.Core.Views;

namespace Core.UI.Screens
{
    public class _Screen
    {
        public static void ShowScreen(_ScreenEnum screenEnum)
        {
            var option = new ViewOptions(_KeyUIResources.GetScreenPath(screenEnum), playAnimation: false);
            _ContainerUI.ScreenContainer.Push(option);
            GetLastestScreen().View.GetComponent<_BaseScreen>().Execute();
        }

        public static async void ShowScreenAsync<T>(_ScreenEnum screenEnum) where T : _BaseScreen
        {
            var option = new ViewOptions(_KeyUIResources.GetScreenPath(screenEnum), playAnimation: false);
            await _ContainerUI.ScreenContainer.PushAsync<T>(option);
            GetLastestScreen().View.GetComponent<_BaseScreen>().Execute();
        }

        public static void HideScreen<T>() where T : _BaseScreen
        {
            _ContainerUI.ScreenContainer.Pop(playAnimation: false);
        }

        public static async void HideScreenAsync<T>() where T : _BaseScreen
        {
            await _ContainerUI.ScreenContainer.PopAsync(playAnimation: false);
        }

        public static void HideAllModal()
        {
            while (_ContainerUI.ScreenContainer.Screens.Count > 0)
            {
                _ContainerUI.ScreenContainer.Pop(playAnimation: false);
            }
        }

        private static ViewRef GetLastestScreen(){
            if(_ContainerUI.ScreenContainer.Screens.Count == 0) return default;
            return _ContainerUI.ScreenContainer.Screens[_ContainerUI.ScreenContainer.Screens.Count - 1];
        }
    }
}