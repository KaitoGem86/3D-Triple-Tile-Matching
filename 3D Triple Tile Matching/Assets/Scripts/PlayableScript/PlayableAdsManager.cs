using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class PlayableAdsManager : MonoBehaviour
{
    private static PlayableAdsManager instance;
    public static PlayableAdsManager Instance
    {
        get
        {
            if (instance == null)
            {
                instance = FindObjectOfType<PlayableAdsManager>();
            }
            return instance;
        }
    }

    void Awake(){
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(gameObject);
        }

        DOTween.Init();
    }

    private Dictionary<int, List<Tile>> _dictCollectTile;
    private Dictionary<int, List<Tile>> _listTile;

    public void AddCollectTile(int tileId, Tile tile)
    {
        if (_dictCollectTile == null)
        {
            _dictCollectTile = new Dictionary<int, List<Tile>>();
        }

        if (_dictCollectTile.ContainsKey(tileId))
        {
            _dictCollectTile[tileId].Add(tile);
        }
        else
        {
            _dictCollectTile.Add(tileId, new List<Tile> { tile });
        }

        if (_dictCollectTile[tileId].Count == 3)
        {
            foreach (var item in _dictCollectTile[tileId])
            {
                item.AnimCollect();
                _listTile[tileId].Remove(item);
            }
            _dictCollectTile.Remove(tileId);
        }
    }

    public void AddTile(int tileId, Tile tile)
    {
        if (_listTile == null)
        {
            _listTile = new Dictionary<int, List<Tile>>();
        }

        if (_listTile.ContainsKey(tileId))
        {
            _listTile[tileId].Add(tile);
        }
        else
        {
            _listTile.Add(tileId, new List<Tile> { tile });
        }
    }
}
