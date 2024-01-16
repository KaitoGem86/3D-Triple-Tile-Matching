using Core.Manager;
using UnityEngine;

namespace Core.GamePlay.Booster
{
    public class _Undo{
        public void Use(){
            Debug.Log("Undo");
            _GameManager.Instance.SlotHolders.UsedSlots[0].ContainedTile?.Undo();
        }
    }
}