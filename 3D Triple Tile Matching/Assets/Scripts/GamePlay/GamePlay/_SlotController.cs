using Core.Tile;
using UnityEngine;

namespace Core.GamePlay{
    public class _SlotController {
        private readonly Transform _slotTrf;
        private _SlotController _leftSlot;
        private _SlotController _rightSlot;
        private _TileController _containedTile;

        public _SlotController(Transform slotTrf, _SlotController leftSlot, _SlotController rightSlot){
            _slotTrf = slotTrf;
            _containedTile = null;
            _leftSlot = leftSlot;
            _rightSlot = rightSlot;
        }

        public void MoveTileToLeftSlot(){
            _leftSlot.ContainedTile = _containedTile;
            _containedTile.transform.position = _leftSlot.Transform.position;
            _containedTile = null;
        }

        public void MoveTileToLeftSlotWithStep(int step){
            if(step == 0) return;
            if(step == 1) MoveTileToLeftSlot();
            else{
                var slot = this;
                for(int i = 0; i < step; i++){
                    if(slot == null) return;
                    slot.MoveTileToLeftSlot();
                    slot = slot.LeftSlot;
                }
            }
        }

        public void MoveTileToRightSlot(){
            _rightSlot.ContainedTile = _containedTile;
            _containedTile.transform.position = _rightSlot.Transform.position;
            _containedTile.transform.SetParent(_rightSlot.Transform);
            _containedTile = null;
        }


        public Transform Transform => _slotTrf;
        public _SlotController LeftSlot { get => _leftSlot; set => _leftSlot = value;}
        public _SlotController RightSlot { get => _rightSlot; set => _rightSlot = value;}
        public _TileController ContainedTile { get => _containedTile; set => _containedTile = value;}
    }
}