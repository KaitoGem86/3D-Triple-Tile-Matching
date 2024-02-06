using System.Collections.Generic;
using ObjectPool;
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

    private Dictionary<int, List<ProjectGamePlay.Tile>> _listTile;
    private int numOfPlayerTurn = 3;
    private float _timer = 0;
    private Tile _currentSelectedTile;
    [SerializeField] Button playNowButton;
    [SerializeField] private Image _backgroundPanel;
    [SerializeField] private GameObject _title;
    [SerializeField] private GameObject _tilePrefab;
    [SerializeField] private GameObject _tileRoot;
    [SerializeField] private Transform _slotRootPrefab;
    [SerializeField] private SpriteSheetData _spriteSheetData;
    [SerializeField] private LevelData _levelData;
    [SerializeField] private GameObject _collectEffectPrefab;
    

    public AudioSource tileTapSound;
    public AudioSource tileCollectSound;
    public AudioSource unCollectSound;

    private void Start()
    {
        SlotHolder = new ProjectGamePlay.SlotHolder(_slotRootPrefab, 24);
        //var dictMap = MapGenerate.GenerateTestMap(24, _spriteSheetData, _tilePrefab, _tileRoot);
        var dictMap = MapGenerate.GenerateMap(_levelData, _spriteSheetData, _tilePrefab, _tileRoot);
        _listTile = dictMap;
        Pooling.Instance.CreatePool(_TypeGameObjectEnum.CollectEffect, _collectEffectPrefab, 3);
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
        if (numOfPlayerTurn == 0)
            return;
        if (Input.touchCount <= 0)
            return;
        _timer += Time.deltaTime;
        Touch touch = Input.GetTouch(0);
        if (touch.phase == TouchPhase.Ended)
        {
            if (_timer > 0.2f)
            {
                _currentSelectedTile.Animator.SetBool("IsSelect", false);
                _currentSelectedTile.ReturnToBlockLayer();
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
                    _currentSelectedTile.SetTileMovingLayer();
                }
            }
        }
    }

    public void ShowPopUpPlayNow()
    {
        _backgroundPanel.gameObject.SetActive(true);
        _title.SetActive(true);
        playNowButton.GetComponent<PlayNowButton>().ZoomInButton();
    }

    public ProjectGamePlay.SlotHolder SlotHolder { get; set; }
    public SpriteSheetData SpriteSheetData { get => _spriteSheetData; }
}
