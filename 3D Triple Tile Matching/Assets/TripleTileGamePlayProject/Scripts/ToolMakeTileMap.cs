using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Tilemaps;

public class ToolMakeTileMap : MonoBehaviour
{
    public static ToolMakeTileMap instance;
    public Tile tilePrefabs;

    private void Awake()
    {
        instance = this;
    }
    public void MakeTileMap(Texture2D texture, Tilemap tilemap)
    {
        tilemap.ClearAllTiles();
        CreatePixelMap(texture, tilemap);
    }
    void CreatePixelMap(Texture2D texture, Tilemap tilemap)
    {
        Vector2Int offset = new Vector2Int(texture.width / 2, texture.height / 2);
        Color[] colors = texture.GetPixels();
        for (int x = 0; x < texture.width; x++)
        {
            for (int y = 0; y < texture.height; y++)
            {
                if (colors[x + y * texture.width].a >= 0.5f)
                {
                    Node pixel = new Node()
                    {
                        position = new Vector2Int(x, y)
                    };
                    CreatePixelTile(tilemap, pixel.position - offset, Color.blue, tilePrefabs);
                }
            }
        }
    }
    void CreatePixelTile(Tilemap tileMap, Vector2Int position, Color color, Tile tilePrefabs)
    {

        Vector3Int cell = new Vector3Int(position.x, position.y, 0);
        tileMap.SetTile(cell, tilePrefabs);
        tileMap.SetTileFlags(cell, TileFlags.None);
        tileMap.SetColor(cell, color);
    }

    public void MoveTilemap(Tilemap tilemap, Vector3Int moveOffset, Vector3Int pos)
    {
        Debug.Log("Work");
        Matrix4x4 matrix = Matrix4x4.TRS(-tilemap.CellToWorld(moveOffset), Quaternion.identity, Vector3.one);
        tilemap.SetTransformMatrix(pos, matrix);
    }
}
