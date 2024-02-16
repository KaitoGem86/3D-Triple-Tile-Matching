using UnityEngine;

namespace ProjectGamePlay{
    public class Playable6SceneManager : BaseStartSceneManager{
        [SerializeField] private HandController _handController;    
        public override void StartScene() 
        {
            var listHint = PlayableAdsManager.Instance.ListTilesController.GetHint();
            _handController.AutoMoveToTripleGroup(listHint);
        }
    }
}