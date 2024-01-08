using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.GamePlay
{
    public class _SlotHolders : MonoBehaviour
    {
        private int _numberOfSlots = 7;
        private int _currentFirtFreeSlotIndex = 0;

        // use queue instead of list
        private List<_SlotController> _usedSlots;
        private List<int> _listContainedTileId;

        private async void Awake()
        {
            _usedSlots = new List<_SlotController>();
            _listContainedTileId = new List<int>();
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("Slot");
            for (int i = 0; i < _numberOfSlots; i++)
            {
                Transform tmpSlot = Instantiate(tmp, transform).transform;
                _usedSlots.Add(new _SlotController(tmpSlot, null, null));
            }
            for (int i = 0; i < _numberOfSlots; i++)
            {
                _usedSlots[i].LeftSlot = (i == 0 ? null : _usedSlots[i - 1]);
                _usedSlots[i].RightSlot = (i == _numberOfSlots - 1 ? null : _usedSlots[i + 1]);
            }
        }

        public _SlotController GetSlotFree()
        {
            if (_currentFirtFreeSlotIndex >= _numberOfSlots)
                return null;
            return _usedSlots[_currentFirtFreeSlotIndex++];
        }

        public _SlotController GetSlotFreeForTile(int id)
        {
            if (!_listContainedTileId.Contains(id))
            {
                _listContainedTileId.Add(id);
                return GetSlotFree();
            }

            int index = _currentFirtFreeSlotIndex;
            for (int i = _currentFirtFreeSlotIndex - 1; i > 0; i--)
            {
                index = i + 1;
                if (_usedSlots[i].ContainedTile.Id == id)
                {
                    index += 1;
                    break;
                }
                _usedSlots[i].MoveTileToRightSlot();
            }
            _currentFirtFreeSlotIndex++;
            return _usedSlots[index - 1];
        }
    }
}