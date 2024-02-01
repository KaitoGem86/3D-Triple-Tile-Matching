using System.Collections.Generic;
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

        Application.targetFrameRate = 60;
        Luna.Unity.Playable.InstallFullGame();
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
            Luna.Unity.LifeCycle.GameEnded();
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

    public List<Tile> GetTile(int tileId)
    {
        if (_listTile.ContainsKey(tileId))
        {
            return _listTile[tileId];
        }
        return null;
    }

    public void Update(){
        if(Input.touchCount <= 0)
            return;
        Touch touch = Input.GetTouch(0);
        if ( touch.phase == TouchPhase.Ended)
        {
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);
            Debug.DrawRay(touchPosition, Vector3.forward * 100, Color.red, 100f);
            if(Physics.Raycast(touchPosition - Vector3.forward * 10, Vector3.forward, out RaycastHit hit, 100f))
            {
                Debug.Log("Tile.OnMouseDown");
                if(hit.transform.GetComponent<Tile>() != null)
                    hit.transform.GetComponent<Tile>().OnTileCollect();
            }
        }
    }
}
