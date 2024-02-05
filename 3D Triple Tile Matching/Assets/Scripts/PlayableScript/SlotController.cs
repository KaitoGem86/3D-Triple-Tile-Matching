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