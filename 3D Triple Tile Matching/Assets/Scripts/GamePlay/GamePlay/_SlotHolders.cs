using System.Collections.Generic;
using Core.Extensions.File;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.GamePlay
{
    public class _SlotHolders : MonoBehaviour
    {
        private int _numberOfSlots = 7;
        private List<Transform> _slots;

        private async void Awake()
        {
            _slots = new List<Transform>();
            GameObject tmp = await AddressablesManager.LoadAssetAsync<GameObject>("Slot");
            for (int i = 0; i < _numberOfSlots; i++)
            {
                Transform tmpSlot = Instantiate(tmp, transform).transform;
                _slots.Add(tmpSlot);
            }
        }

        public Transform GetSlotPosition(int index)
        {
            Debug.Log(_slots[index].position);
            return _slots[index];
        }
    }
}