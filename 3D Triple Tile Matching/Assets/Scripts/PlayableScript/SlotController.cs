using UnityEngine;

namespace ProjectGamePlay
{
    public class SlotController{
        private Transform _slotTransform;
        public SlotController(){

        }

        public SlotController(Transform slotTransform){
            _slotTransform = slotTransform;
        }
    }
}