using UnityEngine;

namespace Core.Manager
{
    public class _SceneContext : MonoBehaviour
    {
        private _LevelManager _levelManager;

        private void Awake()
        {
            _levelManager = new _LevelManager();
        }

        // Start is called before the first frame update
        void Start()
        {
        }

        // Update is called once per frame
        void Update()
        {

        }
    }

}
