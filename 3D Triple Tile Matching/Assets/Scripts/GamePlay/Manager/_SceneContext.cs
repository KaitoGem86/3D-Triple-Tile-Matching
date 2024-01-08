using UnityEngine;

namespace Core.Manager
{
    public class _SceneContext : MonoBehaviour
    {
        private _LevelManager _levelManager;

        private void Awake()
        {
        }

        // Start is called before the first frame update
        void Start()
        {
            _levelManager = new _LevelManager();
            _GameManager.Instance.OnWinGame += () =>
            {
                Debug.Log("Win Game");
            };
        }

        // Update is called once per frame
        void Update()
        {

        }
    }

}
