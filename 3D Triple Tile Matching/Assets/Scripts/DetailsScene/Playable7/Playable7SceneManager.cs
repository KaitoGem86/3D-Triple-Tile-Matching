using System.Collections.Generic;
using UnityEngine;

namespace ProjectGamePlay
{
    public class Playable7SceneManager : BaseStartSceneManager
    {
        [SerializeField] private GameObject _darkPanel;
        [SerializeField] private HandController _handController;
        private List<Tile> listHint;
        int indexHint = 0;

        public override void StartScene()
        {
            PlayableAdsManager.Instance.IsAllowSelectTile = true;
            listHint = PlayableAdsManager.Instance.ListTilesController.GetHint();
            SetAllTileToTutorialLayer(TileStateEnum.InBlock, TileStateEnum.InTutorial);
            _darkPanel.SetActive(true);
            SetNextHint();
        }

        private void SetAllTileToTutorialLayer(TileStateEnum tileStateBefore, TileStateEnum tileStateAfter)
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

        public override void CompleteTutorialOfAds()
        {
            _darkPanel.SetActive(false);
            PlayableAdsManager.Instance.IsAllowSelectTile = true;
            SetAllTileToTutorialLayer(TileStateEnum.InTutorial, TileStateEnum.InBlock);
        }

        public void SetNextHint()
        {
            if (indexHint == 3)
            {
                _handController.SetTargetPosToMove(new Vector3(15, -15, 0), () =>
                            {
                                gameObject.SetActive(false);
                            },
                            0.25f);
                return;
            }
            listHint[indexHint].SetLayer(50);
            listHint[indexHint].TileState = TileStateEnum.InBlock;
            Debug.Log("SetNextHint: " + listHint[indexHint].transform.position + " " + listHint[indexHint].gameObject.name);
            _handController.SetTargetPosToMove(listHint[indexHint].transform.position, () =>
                {
                    indexHint++;
                }, 0.3f);
        }
    }
}