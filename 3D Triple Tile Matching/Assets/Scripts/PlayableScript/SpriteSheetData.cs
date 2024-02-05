using UnityEngine;

namespace ProjectGamePlay{
    [CreateAssetMenu(fileName = "SpriteSheetData", menuName = "ScriptableObjects/SpriteSheetData", order = 1)]
    public class SpriteSheetData : ScriptableObject{
        public Sprite[] sprites;

        public Sprite GetSprite(int index){
            if(index < 0 || index >= sprites.Length){
                throw new System.Exception("Dont exist sprite with index: " + index);
            }
            return sprites[index];
        }
    }
}