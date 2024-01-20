using System.Collections.Generic;
using Core.Manager;
using Core.Tile;

namespace  Core.GamePlay.Booster
{
    public class _BoosterSystem
    {
           private Dictionary<_BoosterEnum, int> _dictNumOfBooster;
            private readonly _Hint _hint;

            private readonly _Undo _undo;

            public _BoosterSystem(List<_TileController> listTile)
            {
                _hint = new _Hint();
                _undo = new _Undo();
                _dictNumOfBooster = new Dictionary<_BoosterEnum, int>();
                _dictNumOfBooster.Add(_BoosterEnum.Hint, 1);
                _dictNumOfBooster.Add(_BoosterEnum.Undo, 1);
                ListHintTileManager = new _ListHintTileManager(listTile);
                TileMovedManager = new _TileMovedManager();
            }

            public void UseBooster(_BoosterEnum boosterEnum)
            {
                switch (boosterEnum)
                {
                    case _BoosterEnum.Hint:
                        if(_dictNumOfBooster[_BoosterEnum.Hint] > 0)
                            _hint.Use();
                        break;
                    case _BoosterEnum.Undo:
                        if(_dictNumOfBooster[_BoosterEnum.Undo] > 0)
                            _undo.Use();
                        break;
                }
            }

            public void Reset(List<_TileController> listTile){
                TileMovedManager.Reset();
                ListHintTileManager.SetStartHintList(listTile);
            }

            public _ListHintTileManager ListHintTileManager { get; set; }
            public _TileMovedManager TileMovedManager { get; set; }

    }    
}