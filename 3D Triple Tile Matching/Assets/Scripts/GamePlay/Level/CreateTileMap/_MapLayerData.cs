using System.Collections.Generic;
using UnityEngine;

namespace Core.Level{
    public class _MapLayerData{
        public List<Vector2> _listPosition = new List<Vector2>();

        public _MapLayerData(Texture2D texture2D){
            var color = texture2D.GetPixels();
            Debug.Log(texture2D.width + " " + texture2D.height);
            var width = texture2D.width;
            var height = texture2D.height;
            var offsetx = width / 2;
            var offsety = height / 2;
            for (int i = 0; i < color.Length; i++){
                if(color[i].a > 0.5f){
                    _listPosition.Add(new Vector2(i % width - offsetx, i / width - offsety));
                }
            }
        }

        public List<Vector3> SetDeepLayer(int layer){
            var listPosition = new List<Vector3>();
            foreach (var item in _listPosition){
                listPosition.Add(new Vector3(item.x, item.y, layer));
            }
            return listPosition;
        } 
    }
}