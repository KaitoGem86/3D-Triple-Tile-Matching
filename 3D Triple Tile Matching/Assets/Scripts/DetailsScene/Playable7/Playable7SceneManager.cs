using UnityEngine;

namespace ProjectGamePlay
{
    public class Playable7SceneManager : BaseStartSceneManager
    {
        [SerializeField] private GameObject darkPanel;
        [SerializeField] private HandController handController;

        public override void StartScene()
        {
            PlayableAdsManager.Instance.IsCompleteTutorial = true;
            var listHint = PlayableAdsManager.Instance.ListTilesController.GetHint();
            SetAllTileToTutorialLayer(TileStateEnum.InBlock, TileStateEnum.InTutorial);
            darkPanel.SetActive(true);

            handController.SetTargetPosToMove(Vector2.zero, () =>
            {
                listHint[0].SetLayer(50);
                listHint[0].TileState = TileStateEnum.InBlock;
            }, 0.3f);
        }

        public void SetAllTileToTutorialLayer(TileStateEnum tileStateBefore, TileStateEnum tileStateAfter)
        {
            foreach (var tileLayer in PlayableAdsManager.Instance.ListTilesController.ListTiles)
            {
                foreach (var tile in tileLayer.Value)
                {
                    if (tile.TileState == tileStateBefore)
                        tile.TileState = tileStateAfter;
                }
            }
        }
    }
}