using System.Collections.Generic;
using UnityEngine;

namespace ProjectGamePlay
{
    public class SlotHolder
    {
        private List<SlotController> _listSlot;
        
        public SlotHolder(Transform slotRoot){
            _listSlot ??= new List<SlotController>();
            for (int i = 0; i < slotRoot.childCount; i++)
            {
                _listSlot.Add(new SlotController(slotRoot.GetChild(i)));
            }
        }

        public SlotController GetSlot(int index){
            return _listSlot[index];
        }

    }
}
