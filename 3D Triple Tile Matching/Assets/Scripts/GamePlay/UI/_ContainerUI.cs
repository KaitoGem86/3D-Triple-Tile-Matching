using ZBase.UnityScreenNavigator.Core.Activities;
using ZBase.UnityScreenNavigator.Core.Modals;
using ZBase.UnityScreenNavigator.Core.Screens;

namespace Core.UI{
    public class _ContainerUI{
        private static ActivityContainer _activityContainer;
        private static ModalContainer _modalContainer;
        private static ScreenContainer _screenContainer;

        public static ActivityContainer ActivityContainer{
            get{
                if (_activityContainer == null){
                    throw new System.Exception("ActivityContainer is null");
                }
                return _activityContainer;
            }
            set{
                _activityContainer = value;
            }
        }

        public static ModalContainer ModalContainer{
            get{
                if (_modalContainer == null){
                    throw new System.Exception("ModalContainer is null");
                }
                return _modalContainer;
            }
            set {
                _modalContainer = value;
            }
        }

        public static ScreenContainer ScreenContainer{
            get{
                if (_screenContainer == null){
                    throw new System.Exception("ScreenContainer is null");
                }
                return _screenContainer;
            }
            set{
                _screenContainer = value;
            }
        }
    }
}