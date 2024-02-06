using UnityEngine;
using UnityEngine.Tilemaps;

namespace GenerateLevel
{
    public class MakeTileMap{
        private readonly Tile _tilePrefab;
        public MakeTileMap(Tile tilePrefab){
            _tilePrefab = tilePrefab;
        }

        public void GenTileMap(Texture2D texture, Tilemap tileMap){
            tileMap.ClearAllTiles();
            CreatePixelMap(texture, tileMap);
        }

        private void CreatePixelMap(Texture2D texture, Tilemap tileMap){
            Vector2Int offset = new Vector2Int(-texture.width / 2, -texture.height / 2);
            Color[] colors = texture.GetPixels();
            for(int x = 0; x < texture.width; x++){
                for(int y = 0; y < texture.height; y++){
                    if(colors[x + y * texture.width].a >= 0.5f){
                        Vector2Int position = new Vector2Int(x, y) - offset;
                        CreatePixelTile(tileMap, position, Color.blue, _tilePrefab);
                    }
                }
            }
        }

        private void CreatePixelTile(Tilemap tileMap, Vector2Int position, Color color, Tile tile){
            Vector3Int localPlace = new Vector3Int(position.x, position.y, 0);
            tileMap.SetTile(localPlace, tile);
            tileMap.SetTileFlags(localPlace, TileFlags.None);
            tileMap.SetColor(localPlace, color);
        }
    }
}