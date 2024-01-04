using Core.Tile;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.AddressableAssets;

namespace Core.Manager
{
    public class _SceneContext : MonoBehaviour
    {
        // Start is called before the first frame update
        async void Start()
        {
            var tmp = await AddressablesManager.LoadAssetAsync<GameObject>("3DTile");
            var go = Instantiate(tmp).GetComponent<_TileController>();
            go.Execute();
        }

        // Update is called once per frame
        void Update()
        {

        }
    }

}
