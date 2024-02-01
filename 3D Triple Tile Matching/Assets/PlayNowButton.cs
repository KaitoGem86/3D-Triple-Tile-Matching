using UnityEngine;

public class PlayNowButton : MonoBehaviour
{
    public void Start(){
        Debug.Log("PlayNowButton.Start");
        Debug.Log(this.gameObject.transform.position);
    }
    public void OnMouseDown()
    {
        Debug.Log("PlayNowButton.OnMouseDown");
    }
}
