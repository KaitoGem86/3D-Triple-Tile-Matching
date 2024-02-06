
using UnityEngine;

namespace ProjectGamePlay{
    public class RectangeleUtils{
        public static bool IsRectangleOverlap(Vector2 pos1, Vector2 pos2, Vector2 halfSize1, Vector2 halfSize2){
            if(pos1.x + halfSize1.x < pos2.x - halfSize2.x || pos1.x - halfSize1.x > pos2.x + halfSize2.x){
                return false;
            }
            if(pos1.y + halfSize1.y < pos2.y - halfSize2.y || pos1.y - halfSize1.y > pos2.y + halfSize2.y){
                return false;
            }
            return true;
        }
    }
}