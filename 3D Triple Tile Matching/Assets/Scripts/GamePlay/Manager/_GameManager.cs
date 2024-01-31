using System;
using Core.GamePlay;
using Core.GamePlay.Booster;
using UnityEngine;

namespace Core.Manager
{
    public class _GameManager : MonoBehaviour
    {
        public static _GameManager Instance;

        private int _numOfTile;
        private int _numOfFreeSlot;
        private Action _onWinGame;
        private Action _onLoseGame;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
        }

        public _SlotHolders SlotHolders;
        public _LevelManager LevelManager;
        public Camera CameraCanvas;
        public Camera CameraGamePlay;
        public _BoosterSystem BoosterSystem;
        
        public int NumOfTile {
            get => _numOfTile;
            set {
                _numOfTile = value;
                if (value == 0)
                {
                    _onWinGame?.Invoke();
                }
            }
        }

        public int NumOfFreeSlot{
            get => _numOfFreeSlot;
            set {
                if (value == 0)
                {
                    _onLoseGame?.Invoke();
                }
                _numOfFreeSlot = value;
            }
        }

        public Action OnWinGame
        {
            get => _onWinGame;
            set => _onWinGame = value;
        }

        public Action OnLoseGame
        {
            get => _onLoseGame;
            set => _onLoseGame = value;
        }

        public void NextLevel(){
            Luna.Unity.LifeCycle.GameEnded();
            return;
            // await LevelManager.LoadLevel();
            // await UniTask.WaitUntil(() => LevelManager.IsLoaded);
            // BoosterSystem.Reset(LevelManager.ListTileController);
        }

    }
}