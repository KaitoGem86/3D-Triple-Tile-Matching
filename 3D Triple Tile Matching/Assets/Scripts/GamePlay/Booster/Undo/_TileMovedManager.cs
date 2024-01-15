using System.Collections.Generic;
using UnityEngine;

namespace Core.GamePlay.Booster{
    public class _TileMovedManager{
        private Stack<_TileMoved> _stackTileMoved; //stack save tile's moves
        private Stack<_TileMoved> _tmpStackTileMoved; //stack used to remove tile's moves at index

        public _TileMoved GetLastTileMoved(){
            _TileMoved tileMoved = _stackTileMoved.Pop();
            return tileMoved;
        }
    }

    public struct _TileMoved
    {
        private Vector3 _startPosition;
        private int _slotIndex;

        public _TileMoved(Vector3 startPosition, int slotIndex)
        {
            _startPosition = startPosition;
            _slotIndex = slotIndex;
        }

        public Vector3 StartPosition => _startPosition;
        public int SlotIndex => _slotIndex;
    }
}