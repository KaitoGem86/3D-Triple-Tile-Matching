using Core.Manager;
using Core.Tile;
using Cysharp.Threading.Tasks;
using DG.Tweening;
using UnityEngine;

namespace Core.GamePlay
{
    public class _SlotController
    {
        private readonly RectTransform _slotTrf;
        private _SlotController _leftSlot;
        private _SlotController _rightSlot;
        private _TileController _containedTile;

        public _SlotController(RectTransform slotTrf, _SlotController leftSlot, _SlotController rightSlot)
        {
            _slotTrf = slotTrf;
            _containedTile = null;
            _leftSlot = leftSlot;
            _rightSlot = rightSlot;
        }

        public void MoveTileToLeftSlot()
        {
            _leftSlot.ContainedTile = _containedTile;
            _containedTile.AnimatedMovingToSlot(_leftSlot.RectTransform.position);
            _containedTile.transform.SetParent(_leftSlot.RectTransform);
            _containedTile = null;
        }

        public void MoveTileToLeftSlotWithStep(int step)
        {
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

        public void MoveTileToRightSlot()
        {
            _rightSlot.ContainedTile = _containedTile;
            switch (_containedTile.TileState)
            {
                case _TileStateEnum.Selected:
                    _containedTile.AnimatedMovingToSlot(_rightSlot);
                    break;
                case _TileStateEnum.Moving:
                    _containedTile.CurrentAnimSequence.Kill();
                    _containedTile.AnimatedMovingToSlot(_rightSlot);
                    break;
                default:
                    throw new System.Exception("TileState is not Selected or Moving");
            }
            _containedTile = null;
        }


        public RectTransform RectTransform => _slotTrf;
        public Vector3 Position
        {
            get
            {
                var position = _slotTrf.position;
                position = _GameManager.Instance.CanvasGamePlay.worldCamera.WorldToScreenPoint(position);
                position = _GameManager.Instance.CanvasGamePlay.worldCamera.ScreenToWorldPoint(position);
                return position;
            }
        }
        public _SlotController LeftSlot { get => _leftSlot; set => _leftSlot = value; }
        public _SlotController RightSlot { get => _rightSlot; set => _rightSlot = value; }
        public _TileController ContainedTile { get => _containedTile; set => _containedTile = value; }
    }
}