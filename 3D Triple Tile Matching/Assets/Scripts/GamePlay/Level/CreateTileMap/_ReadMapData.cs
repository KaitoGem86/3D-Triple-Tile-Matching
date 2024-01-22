using System.Collections.Generic;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _ReadMapData : MonoBehaviour{
        private List<Vector2> _listPosition;

        [SerializeField] private Texture2D _texture2D;

#if UNITY_EDITOR
    [Button("ReadTexture")]
        public void ReadTexture(){
            var color = _texture2D.GetPixels();
            Debug.Log(_texture2D.width + " " + _texture2D.height);
            foreach (var c in color){
                Debug.Log(c);
            }
        }
#endif
    }
}