using UnityEngine;
using System.Collections;

public class Exit : MonoBehaviour {

	public GUISkin _guiSkin;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void OnGUI(){
		GUI.skin = _guiSkin;
		if(GUI.Button (new Rect (580,500, 80, 55), "Back")){
			Application.LoadLevel("Menu");
		}
	}
}
