using System.Collections.Generic;

namespace  Core.GamePlay.Booster
{
    public class _BoosterSystem
    {
           private Dictionary<_BoosterEnum, int> _dictNumOfBooster;
            private readonly _Hint _hint;
            private readonly _Shuffle _shuffle;
            private readonly _Undo _undo;

            public _BoosterSystem()
            {
                _hint = new _Hint();
                _shuffle = new _Shuffle();
                _undo = new _Undo();
                _dictNumOfBooster = new Dictionary<_BoosterEnum, int>();
                _dictNumOfBooster.Add(_BoosterEnum.Hint, 1);
                _dictNumOfBooster.Add(_BoosterEnum.Shuffle, 1);
                _dictNumOfBooster.Add(_BoosterEnum.Undo, 1);
            }

            public void UseBooster(_BoosterEnum boosterEnum)
            {
                switch (boosterEnum)
                {
                    case _BoosterEnum.Hint:
                        if(_dictNumOfBooster[_BoosterEnum.Hint] > 0)
                            _hint.Use();
                        break;
                    case _BoosterEnum.Shuffle:
                        if(_dictNumOfBooster[_BoosterEnum.Shuffle] > 0)
                            _shuffle.Use();
                        break;
                    case _BoosterEnum.Undo:
                        if(_dictNumOfBooster[_BoosterEnum.Undo] > 0)
                            _undo.Use();
                        break;
                }
            }
    }    
}