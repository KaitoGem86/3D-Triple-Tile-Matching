using Test;
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
        /*async*/ void Start()
        {
            // var tmp = await AddressablesManager.LoadAssetAsync<GameObject>("3DTile");
            // var go = Instantiate(tmp).GetComponent<_TileController>();
            // go.Execute();
            _CreateJson.TestCreateJson();
            _CreateJson.TestLoadJson();
        }

        // Update is called once per frame
        void Update()
        {

        }
    }

}
