using System.Collections.Generic;
using Core.File;
using NaughtyAttributes;
using UnityEngine;

namespace Core.Level{
    public class _ReadMapData : MonoBehaviour{
        private List<Vector2> _listPosition = new List<Vector2>();

        [SerializeField] private Texture2D _texture2D;

#if UNITY_EDITOR
    [SerializeField] private int _levelId;

    [Button("ReadTexture")]
        public void ReadTexture(){
            var color = _texture2D.GetPixels();
            Debug.Log(_texture2D.width + " " + _texture2D.height);
            var width = _texture2D.width;
            var height = _texture2D.height;
            var offsetx = width / 2;
            var offsety = height / 2;
            for (int i = 0; i < color.Length; i++){
                if(color[i].a > 0.5f){
                    _listPosition.Add(new Vector2(i % width - offsetx, i / width - offsety));
                }
            }
            _CreateLevelToJson.CreateLevel(_listPosition, "Level" + _levelId);
        }

    [Button("ConvertTextureToLayerData")]
        public void ConvertTextureToLayerData(){
            var mapLayerData = new _MapLayerData(_texture2D);
            _JsonFileManager.SaveLayerJsonFile<_MapLayerData>("Layer" + _levelId, mapLayerData);
        }
#endif
    }
}