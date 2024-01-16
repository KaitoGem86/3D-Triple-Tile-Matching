using Core.Manager;
using UnityEngine;

namespace Core.GamePlay.Booster{
    public class _Hint{
        public void Use(){
            Debug.Log("Hint");
            _GameManager.Instance.BoosterSystem.ListHintTileManager.GetHintTile();
        }
    }
}