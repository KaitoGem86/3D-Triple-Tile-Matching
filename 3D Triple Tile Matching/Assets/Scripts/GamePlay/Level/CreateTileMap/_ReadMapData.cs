using System.Collections.Generic;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _ReadMapData : MonoBehaviour{
        private List<Vector2> _listPosition = new List<Vector2>();

        [SerializeField] private Texture2D _texture2D;

#if UNITY_EDITOR
    [Button("ReadTexture")]
        public void ReadTexture(){
            var color = _texture2D.GetPixels();
            Debug.Log(_texture2D.width + " " + _texture2D.height);
            var width = _texture2D.width;
            var height = _texture2D.height;
            for (int i = 0; i < color.Length; i++){
                if(color[i].a > 0.5f){
                    _listPosition.Add(new Vector2(i % width, i / width));
                }
            }
            _CreateLevelToJson.CreateLevel(_listPosition, "Level1");
        }
#endif
    }
}