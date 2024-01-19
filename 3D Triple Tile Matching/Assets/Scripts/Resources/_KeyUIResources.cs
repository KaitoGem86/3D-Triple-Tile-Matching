using Core.UI.Modals;

namespace Core.UI{
    public class _KeyUIResources{
        private const string _activity = "ActivityContainer";
        private const string _winGameModal = "WinGamePopUp";

        public static string GetModalPath(_ModalEnum modalEnum){
            return modalEnum switch{
                _ModalEnum.WinGame => _winGameModal,
                _ => throw new System.Exception("Modal not found"),
            };
        } 
    }
}