using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    public void OnMouseDown()
    {
        Debug.Log("PlayNowButton.OnMouseDown");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
