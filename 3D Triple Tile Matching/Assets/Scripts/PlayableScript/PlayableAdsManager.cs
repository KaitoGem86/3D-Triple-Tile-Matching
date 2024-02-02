using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

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

    void Awake()
    {
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
    private int numOfPlayerTurn = 3;
    [SerializeField] Button playNowButton;
    [SerializeField] private Image _backgroundPanel;
    [SerializeField] private GameObject _title;

    public AudioSource tileTapSound;
    public AudioSource tileCollectSound;
    public AudioSource unCollectSound;

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
            if (_dictCollectTile.Count != 0)
            {
                unCollectSound.Play();
                tile.AnimUnCollected();
                foreach (var item in _dictCollectTile)
                {
                    foreach (var tileItem in item.Value)
                    {
                        tileItem.AnimUnCollected();
                    }
                }
                _dictCollectTile.Clear();
                return;
            }
            else
            {
                _dictCollectTile.Add(tileId, new List<Tile> { tile });
            }
        }

        if (_dictCollectTile[tileId].Count == 3)
        {
            tileCollectSound.Play();
            foreach (var item in _dictCollectTile[tileId])
            {
                item.AnimCollect();
                _listTile[tileId].Remove(item);
            }
            numOfPlayerTurn--;
            if (numOfPlayerTurn == 0)
            {
                ShowPopUpPlayNow();
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

    public List<Tile> GetTile(int tileId)
    {
        if (_listTile.ContainsKey(tileId))
        {
            return _listTile[tileId];
        }
        return null;
    }

    public void Update()
    {
        if (numOfPlayerTurn == 0 || numOfPlayerTurn == 3)
            return;
        if (Input.touchCount <= 0)
            return;
        Touch touch = Input.GetTouch(0);
        if (touch.phase == TouchPhase.Ended)
        {
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);
            if (Physics.Raycast(touchPosition - Vector3.forward * 10, Vector3.forward, out RaycastHit hit, 100f))
            {
                if (hit.transform.GetComponent<Tile>() != null)
                {
                    hit.transform.GetComponent<Tile>().OnTileCollect();
                    tileTapSound.Play();
                }

            }
        }
    }

    private void ShowPopUpPlayNow()
    {
        _backgroundPanel.gameObject.SetActive(true);
        _title.SetActive(true);
        playNowButton.GetComponent<PlayNowButton>().ZoomInButton();
    }
}
