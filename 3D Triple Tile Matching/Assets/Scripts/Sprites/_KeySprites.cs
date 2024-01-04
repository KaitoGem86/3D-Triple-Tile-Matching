namespace Core.Manager
{
    public static class _KeySprites
    {
        private const string _tileSpritePath = "";

        public static string GetKeyTileSprite(int id){
            return _tileSpritePath + id.ToString();
        }
    }
}