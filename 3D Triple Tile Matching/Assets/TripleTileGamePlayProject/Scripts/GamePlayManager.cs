using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GamePlayManager : MonoBehaviour
{
    Camera _cam;
    public static GamePlayManager instance;
    [Header("Select LEvel")]
    public int level = 1;
    private GameObject levelGame;
    public int maxlevel;
    public int levelEasyer = 0;
    public GameObject PopUpWin;
    public void Awake()
    {
        _cam = Camera.main;
        instance = this;
    }
    private void Start()
    {

        SetCam();
        Application.targetFrameRate = 60;
        LoadLevelGame();
    }
    public void LoadLevelGame()
    {

        levelGame = Instantiate(Resources.Load("NewLevel/Level" + level) as GameObject);

    }
    public void ShowPopupWin()
    {
        PopUpWin.SetActive(true);
    }
    public void HidePopupWin()
    {
        PopUpWin.SetActive(false);
    }
    public void NextLevel()
    {
        level++;
        if (level > maxlevel)
            level = maxlevel;
        Destroy(levelGame);
        LoadLevelGame();
    }
    public void SufferClick()
    {
        if (LevelManager.instance.levelStat == LevelStat.RESTART) return;
        levelGame.GetComponent<LevelManager>().Suffer();
    }
    public void HintClick()
    {
        if (LevelManager.instance.levelStat == LevelStat.RESTART) return;
        levelGame.GetComponent<LevelManager>().Hint();
    }
    public void UndoClick()
    {
        if (LevelManager.instance.levelStat == LevelStat.RESTART) return;
        levelGame.GetComponent<LevelManager>().Undo();
    }
    void SetCam()
    {
        if (Screen.height >= 1920 * Mathf.RoundToInt(Screen.dpi / 160))
        {
            // _size = 2.65f;
            _cam.orthographicSize = 10f;
        }
        else
        {
            // _size = 2.2f;
            _cam.orthographicSize = 12f;
        }
    }
}