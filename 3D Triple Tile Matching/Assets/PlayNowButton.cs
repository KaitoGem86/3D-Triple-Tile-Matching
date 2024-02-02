using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    [SerializeField]
    private Animator _animator;

    public void Start(){
    }
    public void OnMouseDown()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void ZoomInButton(){
        _animator.SetBool("IsZoomIn", true);
    }

    public void CompleteZoomInButton(){
        _animator.SetBool("IsZoomIn", false);
    }
}
