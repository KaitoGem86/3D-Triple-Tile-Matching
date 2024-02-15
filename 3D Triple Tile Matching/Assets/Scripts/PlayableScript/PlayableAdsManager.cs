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
    [SerializeField] Button playNowButton;
    [SerializeField] private Image _backgroundPanel;
    [SerializeField] private GameObject _tilePrefab;
    [SerializeField] private GameObject _tileRoot;
    [SerializeField] private Transform _slotRootPrefab;
    [SerializeField] private SpriteSheetData _spriteSheetData;
    [SerializeField] private LevelData _levelData;
    [SerializeField] private GameObject _collectEffectPrefab;
    [SerializeField] private HandController _handController;
    [SerializeField] private TMP_Text _buttonText;


    public AudioSource tileTapSound;
    public AudioSource tileCollectSound;
    public AudioSource unCollectSound;

    private bool _isCompleteTutorial;
    private bool _isCompleteGame;

    private void Start()
    {
        SlotHolder = new ProjectGamePlay.SlotHolder(_slotRootPrefab, _levelData.numOfTiles);
        ListTilesController = new ProjectGamePlay.ListTilesController();
        //var dictMap = MapGenerate.GenerateTestMap(24, _spriteSheetData, _tilePrefab, _tileRoot);
        var dictMap = MapGenerate.GenerateMap(_levelData, _spriteSheetData, _tilePrefab, _tileRoot);
        _listTile = dictMap;
        ListTilesController.SetConnectForTile();
        Pooling.Instance.CreatePool(_TypeGameObjectEnum.CollectEffect, _collectEffectPrefab, 3);
        var listHint = ListTilesController.GetHint();
        _handController.SetTargetPosToMove(
            listHint[0].transform.position, ()=>{
                listHint[0].SetTileMovingLayer();
                listHint[0].Animator.SetBool("IsSelect", true);
                tileTapSound.Play();
                listHint[0].OnTileCollect();
                _handController.SetTargetPosToMove(
                    listHint[1].transform.position, ()=>{
                        listHint[1].SetTileMovingLayer();
                        listHint[1].Animator.SetBool("IsSelect", true);
                        listHint[1].OnTileCollect();
                        tileTapSound.Play();
                        _handController.SetTargetPosToMove(
                            listHint[2].transform.position, ()=>{
                                listHint[2].SetTileMovingLayer();
                                listHint[2].Animator.SetBool("IsSelect", true);
                                listHint[2].OnTileCollect();
                                tileTapSound.Play();
                                _handController.SetTargetPosToMove(
                                    new Vector3(15, -15, 0), ()=>{
                                        _handController.gameObject.SetActive(false);
                                        _handController.gameObject.SetActive(false);
                                    },
                                    0.25f
                                );
                                _isCompleteTutorial = true;
                            },
                            0.5f
                        );
                    },
                    0.75f
                );
            }, 0.75f);
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
        if(!_isCompleteTutorial){
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
        _buttonText.text = "PLAY NOW";
        _backgroundPanel.gameObject.SetActive(true);
        playNowButton.gameObject.SetActive(true);
        playNowButton.GetComponent<PlayNowButton>().ZoomInButton();
    }

    public void ShowPopUpTry(){
        _buttonText.text = "TRY";
        _backgroundPanel.gameObject.SetActive(true);
        playNowButton.gameObject.SetActive(true);
        playNowButton.GetComponent<PlayNowButton>().ZoomInButton();
    }

    public ProjectGamePlay.SlotHolder SlotHolder { get; set; }
    public ProjectGamePlay.ListTilesController ListTilesController { get; set; }
    public SpriteSheetData SpriteSheetData { get => _spriteSheetData; }
    public bool IsCompleteGame { get => _isCompleteGame; set => _isCompleteGame = value; }
}
