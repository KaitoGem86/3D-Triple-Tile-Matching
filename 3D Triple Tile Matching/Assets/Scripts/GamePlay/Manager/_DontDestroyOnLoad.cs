using UnityEngine;
namespace Core.Manager{
    public class _DontDestroyOnLoad : MonoBehaviour{
        public void Awake(){
            DontDestroyOnLoad(gameObject);
        }
    }
}