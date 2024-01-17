namespace Core.Resources{
    public class _KeyPrefabsResources
    {
        private const string _tilePrefabPath = "3DTile";
        private const string _slotPrefabPath = "SlotObject";
        private const string _cameraRotationPrefabPath = "CameraRotation";
        private const string _uiCameraPrefabPath = "UICamera";

        public static string GetKeyTilePrefab(int id){
            return _tilePrefabPath + id.ToString();
        }

        public static string GetKeySlotPrefab(int id){
            return _slotPrefabPath + id.ToString();
        }
    
        public static string GetKeyTilePrefab() => _tilePrefabPath;
        public static string GetKeySlotPrefab() => _slotPrefabPath;
        public static string GetKeyCameraRotationPrefab() => _cameraRotationPrefabPath;
        public static string GetKeyUICameraPrefab() => _uiCameraPrefabPath;
    }
}