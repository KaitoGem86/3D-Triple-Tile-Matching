using System;
using Core.GamePlay;
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
        public Camera CameraCanvas;
        public Camera CameraGamePlay;
        
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

    }
}