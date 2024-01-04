namespace Core.Manager
{
    public static class _KeySprites
    {
        private const string _spritePath = "";

        public static string GetKeyTileSprite(int id){
            return _spritePath + id.ToString();
        }
    }
}