using System.Diagnostics;
using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    [SerializeField]
    private Animator _animator;

    public void Start(){
    }
    public void OnMouseDown()
    {
        string url = "https://play.google.com/store/apps/details?id=net.percas.triple.tile.pair.matching.puzzle.master";
        Application.OpenURL(url);
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void ZoomInButton(){
        _animator.SetBool("IsZoomIn", true);
    }

    public void CompleteZoomInButton(){
        _animator.SetBool("IsZoomIn", false);
    }
}
