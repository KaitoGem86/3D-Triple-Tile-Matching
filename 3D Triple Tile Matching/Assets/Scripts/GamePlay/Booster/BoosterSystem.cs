using System.Collections.Generic;

namespace  Core.GamePlay.Booster
{
    public class BoosterSystem
    {
           private Dictionary<BoosterEnum, int> _dictNumOfBooster;
            private readonly Hint _hint;
            private readonly Shuffle _shuffle;
            private readonly Undo _undo;

            public BoosterSystem()
            {
                _hint = new Hint();
                _shuffle = new Shuffle();
                _undo = new Undo();
                _dictNumOfBooster = new Dictionary<BoosterEnum, int>();
                _dictNumOfBooster.Add(BoosterEnum.Hint, 0);
                _dictNumOfBooster.Add(BoosterEnum.Shuffle, 0);
                _dictNumOfBooster.Add(BoosterEnum.Undo, 0);
            }

            public void UseBooster(BoosterEnum boosterEnum)
            {
                switch (boosterEnum)
                {
                    case BoosterEnum.Hint:
                        if(_dictNumOfBooster[BoosterEnum.Hint] > 0)
                            _hint.Use();
                        break;
                    case BoosterEnum.Shuffle:
                        if(_dictNumOfBooster[BoosterEnum.Shuffle] > 0)
                            _shuffle.Use();
                        break;
                    case BoosterEnum.Undo:
                        if(_dictNumOfBooster[BoosterEnum.Undo] > 0)
                            _undo.Use();
                        break;
                }
            }
    }    
}