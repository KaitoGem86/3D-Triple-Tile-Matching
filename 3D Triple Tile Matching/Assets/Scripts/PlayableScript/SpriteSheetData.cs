using UnityEngine;

namespace ProjectGamePlay{
    [CreateAssetMenu(fileName = "SpriteSheetData", menuName = "ScriptableObjects/SpriteSheetData", order = 1)]
    public class SpriteSheetData : ScriptableObject{
        public Sprite[] sprites;

        public Sprite GetSprite(int index){
            return sprites[index];
        }
    }
}