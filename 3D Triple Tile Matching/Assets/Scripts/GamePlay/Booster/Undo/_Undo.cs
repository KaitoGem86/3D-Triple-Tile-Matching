using Core.Manager;

namespace Core.GamePlay.Booster
{
    public class _Undo{
        public void Use(){
            int undoIndex = _GameManager.Instance.SlotHolders.TileMovedManager.GetLastTileMoved();
            if (undoIndex == -1)
            {
                return;
            }
            _GameManager.Instance.SlotHolders.UsedSlots[undoIndex].ContainedTile?.Undo();
        }
    }
}