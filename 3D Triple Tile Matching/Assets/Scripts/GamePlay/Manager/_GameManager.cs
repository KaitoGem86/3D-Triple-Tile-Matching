using Core.GamePlay;
using UnityEngine;

namespace Core.Manager
{
    public class _GameManager : MonoBehaviour
    {
        public static _GameManager Instance;

        private void Awake()
        {
            if (Instance == null)
            {
                Instance = this;
            }
        }

        public _SlotHolders SlotHolders;
    }
}