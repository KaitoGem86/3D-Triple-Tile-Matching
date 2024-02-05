using System.Collections.Generic;
using ProjectGamePlay;
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

    private Dictionary<int, List<ProjectGamePlay.Tile>> _dictCollectTile;
    private Dictionary<int, List<ProjectGamePlay.Tile>> _listTile;
    private int numOfPlayerTurn = 3;
    private float _timer = 0;
    private Tile _currentSelectedTile;
    [SerializeField] Button playNowButton;
    [SerializeField] private Image _backgroundPanel;
    [SerializeField] private GameObject _title;
    [SerializeField] private GameObject _tilePrefab;
    [SerializeField] private Transform _slotRootPrefab;

    public AudioSource tileTapSound;
    public AudioSource tileCollectSound;
    public AudioSource unCollectSound;

    private void Start(){
        SlotHolder = new ProjectGamePlay.SlotHolder(_slotRootPrefab);
    }

    public void AddCollectTile(int tileId, ProjectGamePlay.Tile tile)
    {
        if (_dictCollectTile == null)
        {
            _dictCollectTile = new Dictionary<int, List<ProjectGamePlay.Tile>>();
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
                _dictCollectTile.Add(tileId, new List<ProjectGamePlay.Tile> { tile });
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

    public void AddTile(int tileId, ProjectGamePlay.Tile tile)
    {
        if (_listTile == null)
        {
            _listTile = new Dictionary<int, List<ProjectGamePlay.Tile>>();
        }

        if (_listTile.ContainsKey(tileId))
        {
            _listTile[tileId].Add(tile);
        }
        else
        {
            _listTile.Add(tileId, new List<ProjectGamePlay.Tile> { tile });
        }
    }

    public List<ProjectGamePlay.Tile> GetTile(int tileId)
    {
        if (_listTile.ContainsKey(tileId))
        {
            return _listTile[tileId];
        }
        return null;
    }

    public void LateUpdate()
    {
        if (numOfPlayerTurn == 0 )
            return;
        if (Input.touchCount <= 0)
            return;
        _timer += Time.deltaTime;
        Touch touch = Input.GetTouch(0);
        if (touch.phase == TouchPhase.Ended)
        {
            if(_timer > 0.2f)
            {
                _currentSelectedTile.Animator.SetBool("IsSelect", false);
                return;
            }
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);
            if (Physics.Raycast(touchPosition - Vector3.forward * 10, Vector3.forward, out RaycastHit hit, 100f))
            {
                if (hit.transform.GetComponent<ProjectGamePlay.Tile>() != null)
                {
                    hit.transform.GetComponent<ProjectGamePlay.Tile>().OnTileCollect();
                    tileTapSound.Play();
                }

            }
        }
        else if (touch.phase == TouchPhase.Began)
        {
            _timer = 0;
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);
            if (Physics.Raycast(touchPosition - Vector3.forward * 10, Vector3.forward, out RaycastHit hit, 100f))
            {
                if (hit.transform.GetComponent<ProjectGamePlay.Tile>() != null)
                {
                    _currentSelectedTile = hit.transform.GetComponent<ProjectGamePlay.Tile>();
                    _currentSelectedTile.Animator.SetBool("IsSelect", true);
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

    public ProjectGamePlay.SlotHolder SlotHolder { get; set; }
}
