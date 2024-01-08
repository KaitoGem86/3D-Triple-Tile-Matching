using System;
using Core.GamePlay;
using UnityEngine;

namespace Core.Manager
{
    public class _GameManager : MonoBehaviour
    {
        public static _GameManager Instance;

        private int _numOfTile;
        private Action _onWinGame;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
        }

        public _SlotHolders SlotHolders;
        
        [HideInInspector]
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

        public Action OnWinGame
        {
            get => _onWinGame;
            set => _onWinGame = value;
        }

    }
}