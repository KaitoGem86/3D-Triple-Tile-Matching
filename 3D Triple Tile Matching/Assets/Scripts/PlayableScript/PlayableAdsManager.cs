using System.Collections.Generic;
using ObjectPool;
using ProjectGamePlay;
using TMPro;
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

    private Dictionary<int, List<ProjectGamePlay.Tile>> _listTile;
    private int numOfPlayerTurn = 3;
    private float _timer = 0;
    private Tile _currentSelectedTile;
    [SerializeField] Button _playNowButton;
    [SerializeField] Button _tryButton;
    [SerializeField] private Image _backgroundPanel;
    [SerializeField] private GameObject _tilePrefab;
    [SerializeField] private GameObject _tileRoot;
    [SerializeField] private Transform _slotRootPrefab;
    [SerializeField] private SpriteSheetData _spriteSheetData;
    [SerializeField] private LevelData _levelData;
    [SerializeField] private GameObject _collectEffectPrefab;
    [SerializeField] private bool _isEasyInFirstLayer;
    [SerializeField] private BaseStartSceneManager _baseStartSceneManager;


    public AudioSource tileTapSound;
    public AudioSource tileCollectSound;
    public AudioSource unCollectSound;

    private bool _isAllowSelectTile;
    private bool _isInTutorial;
    private bool _isCompleteGame;

    private void Start()
    {
        FindPanelAndButton();
        SlotHolder = new ProjectGamePlay.SlotHolder(_slotRootPrefab, _levelData.numOfTiles);
        ListTilesController = new ProjectGamePlay.ListTilesController();
        Dictionary<int, List<Tile>> dictMap = null;
        if(_isEasyInFirstLayer)
            dictMap = MapGenerate.GenerateMapWithTutorialInFirstLayer(_levelData, _spriteSheetData, _tilePrefab, _tileRoot);
        else
            dictMap = MapGenerate.GenerateMap(_levelData, _spriteSheetData, _tilePrefab, _tileRoot);
        _isInTutorial = true;
        _listTile = dictMap;
        ListTilesController.SetConnectForTile();
        Pooling.Instance.CreatePool(_TypeGameObjectEnum.CollectEffect, _collectEffectPrefab, 3);
        _baseStartSceneManager.StartScene();
    }

    private void FindPanelAndButton(){
        var canvas = GameObject.Find("Canvas");
        _backgroundPanel = canvas.transform.GetChild(1).GetComponent<Image>();
        _playNowButton = canvas.transform.GetChild(2).GetComponent<Button>();
        _tryButton = canvas.transform.GetChild(3).GetComponent<Button>();
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
        if(!_isAllowSelectTile){
            return;
        }
        if (numOfPlayerTurn == 0){
            return;
        }
        if(_isCompleteGame)
            return;
            
        if (Input.touchCount <= 0)
            return;
        _timer += Time.deltaTime;
        Touch touch = Input.GetTouch(0);
        if (touch.phase == TouchPhase.Ended)
        {
            if (_timer > 0.2f)
            {
                if (_currentSelectedTile != null && _currentSelectedTile.TileState == TileStateEnum.InBlock)
                {
                    _currentSelectedTile.Animator.SetBool("IsSelect", false);
                    _currentSelectedTile.ReturnToBlockLayer();
                    _currentSelectedTile = null;
                    return;
                }
            }
            Vector3 touchPosition = Camera.main.ScreenToWorldPoint(touch.position);
            if (Physics.Raycast(touchPosition - Vector3.forward * 10, Vector3.forward, out RaycastHit hit, 100f))
            {
                if (hit.transform.GetComponent<ProjectGamePlay.Tile>() != null)
                {
                    if (hit.transform.GetComponent<ProjectGamePlay.Tile>().TileState == TileStateEnum.InBlock)
                    {
                        hit.transform.GetComponent<ProjectGamePlay.Tile>().OnTileCollect();
                        tileTapSound.Play();
                    }
                }

            }
            _currentSelectedTile = null;
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
                    if (_currentSelectedTile.TileState == TileStateEnum.InBlock)
                    {
                        _currentSelectedTile.Animator.SetBool("IsSelect", true);
                        _currentSelectedTile.SetTileMovingLayer();
                    }
                }
            }
        }
    }

    public void ShowPopUpPlayNow()
    {
        _backgroundPanel.gameObject.SetActive(true);
         _playNowButton.gameObject.SetActive(true);
        //_playNowButton.GetComponent<PlayNowButton>().Active();
        _playNowButton.GetComponent<PlayNowButton>().ZoomInButton();
        Debug.Log("ShowPopUpPlayNow");
    }

    public void ShowPopUpTry(){
        _backgroundPanel.gameObject.SetActive(true);
        _tryButton.gameObject.SetActive(true);
        //_tryButton.GetComponent<PlayNowButton>().Active();
        _tryButton.GetComponent<PlayNowButton>().ZoomInButton();
    }

    public ProjectGamePlay.SlotHolder SlotHolder { get; set; }
    public ProjectGamePlay.ListTilesController ListTilesController { get; set; }
    public SpriteSheetData SpriteSheetData { get => _spriteSheetData; }
    public bool IsCompleteGame { get => _isCompleteGame; set => _isCompleteGame = value; }
    public bool IsAllowSelectTile { get => _isAllowSelectTile; set => _isAllowSelectTile = value;}
    public bool IsInTutorial { get => _isInTutorial; set => _isInTutorial = value; }
    public BaseStartSceneManager BaseStartSceneManager { get => _baseStartSceneManager; }
}
