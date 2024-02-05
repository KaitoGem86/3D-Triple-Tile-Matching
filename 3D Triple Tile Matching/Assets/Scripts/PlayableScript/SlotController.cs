using UnityEngine;

namespace ProjectGamePlay
{
    public class SlotController{
        private Transform _slotTransform;
        private Tile _containedTile;
        private SlotController leftSlot;
        private SlotController rightSlot;

        public SlotController(Transform slotTransform){
            _slotTransform = slotTransform;
        }

        public Vector3 GetSlotPosition(){
            return _slotTransform.position;
        }

        public void MoveTileToRightSlot()
        {
            if (ContainedTile == null)
            {
                return;
            }
            if (RightSlot == null)
            {
                return;
            }
            ContainedTile.Index += 1;
            ContainedTile.SetTargetPosToMove(RightSlot.GetSlotPosition());
            rightSlot.ContainedTile = ContainedTile;
            ContainedTile = null;
        }

        public void MoveTileToLeftSlot(){
            if(ContainedTile == null){
                return;
            }
            if(LeftSlot == null){
                return;
            }
            ContainedTile.Index -= 1;
            ContainedTile.SetTargetPosToMove(LeftSlot.GetSlotPosition());
            leftSlot.ContainedTile = ContainedTile;
            ContainedTile = null;
        }

        public void MoveTileToLeftSlotWithStep(int step)
        {
            if(_containedTile == null) return;
            if (step == 0) return;
            if (step == 1) MoveTileToLeftSlot();
            else
            {
                var slot = this;
                for (int i = 0; i < step; i++)
                {
                    if (slot == null) return;
                    slot.MoveTileToLeftSlot();
                    slot = slot.LeftSlot;
                }
            }
        }

        public Tile ContainedTile { 
            get => _containedTile; 
            set => _containedTile = value; }
        public SlotController LeftSlot { 
            get => leftSlot; 
            set => leftSlot = value; }
        public SlotController RightSlot { 
            get => rightSlot; 
            set => rightSlot = value; }
    }
}