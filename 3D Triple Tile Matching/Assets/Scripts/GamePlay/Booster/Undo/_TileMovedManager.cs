using System.Collections.Generic;
using UnityEngine;

namespace Core.GamePlay.Booster
{
    public class _TileMovedManager
    {
        private Stack<int> _stackTileMoved; //stack save tile's moves
        private Stack<int> _tmpStackTileMoved; //stack used to remove tile's moves at index

        public _TileMovedManager()
        {
            _stackTileMoved = new Stack<int>();
            _tmpStackTileMoved = new Stack<int>();
        }

        public int GetLastTileMoved()
        {
            if (_stackTileMoved.Count == 0)
                return -1;
            int tileMoved = _stackTileMoved.Pop();
            return tileMoved;
        }

        public void RemoveTileMovedWhenCollect(int index)
        {
            RemoveTileMovedWhenCollect(index, 3);
        }

        public void RemoveTileMovedWhenUndo(int index)
        {
            RemoveTileMovedWhenCollect(index, 1);
        }

        private void RemoveTileMovedWhenCollect(int index, int step)
        {
            _tmpStackTileMoved.Clear();

            switch (step)
            {
                case 3:
                    while (_stackTileMoved.Count > 0)
                    {
                        int tileMoved = _stackTileMoved.Pop();
                        if (tileMoved != index && tileMoved != index - 1 && tileMoved != index - 2)
                        {
                            if (tileMoved > index)
                            {
                                tileMoved -= step;
                            }
                            _tmpStackTileMoved.Push(tileMoved);
                        }
                    }
                    break;
                case 1:
                    while (_stackTileMoved.Count > 0)
                    {
                        int tileMoved = _stackTileMoved.Pop();
                        if (tileMoved != index)
                        {
                            if (tileMoved > index)
                            {
                                tileMoved -= step;
                            }
                            _tmpStackTileMoved.Push(tileMoved);
                        }
                    }
                    break;
            }

            while (_tmpStackTileMoved.Count > 0)
            {
                int tileMoved = _tmpStackTileMoved.Pop();
                _stackTileMoved.Push(tileMoved);
            }
        }

        public void AddTileMoved(int index)
        {
            _tmpStackTileMoved.Clear();
            while (_stackTileMoved.Count > 0)
            {
                int tileMoved = _stackTileMoved.Pop();
                if (tileMoved >= index)
                {
                    tileMoved++;
                }
                _tmpStackTileMoved.Push(tileMoved);
            }
            while (_tmpStackTileMoved.Count > 0)
            {
                int tileMoved = _tmpStackTileMoved.Pop();
                _stackTileMoved.Push(tileMoved);
            }
            _stackTileMoved.Push(index);
        }

        public void Reset(){
            _stackTileMoved.Clear();
        }
    }
}