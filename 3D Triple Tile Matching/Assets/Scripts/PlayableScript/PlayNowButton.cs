using System.Diagnostics;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class PlayNowButton : MonoBehaviour
{
    [SerializeField]
    private Animator _animator;
    [SerializeField]
    private Button _button;
    [SerializeField]
    private Image _buttonBackground;
    [SerializeField]
    private TMP_Text _buttonText;

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

    public void Active(){
        _button.interactable = true;
        _buttonBackground.color = new Color(255, 255, 255, 255);
        _buttonText.color = new Color(255, 255, 255, 255);
    }
}
