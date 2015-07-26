using UnityEngine;
using System.Collections;

public class Changer : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}


	public void backToMenu(){
		Application.LoadLevel("Menu");
	}

	public void ChangeToScene(){

		int scene = Random.Range (1, 10);
		Debug.Log (scene);
		string nombre = "Maze" + scene;
		Application.LoadLevel (nombre);
	}

	public void changeTo1(){
		Application.LoadLevel ("Maze1");
	}

	public void changeTo2(){
		Application.LoadLevel ("Maze2");
	}

	public void changeTo3(){
		Application.LoadLevel ("Maze3");
	}

	public void changeTo4(){
		Application.LoadLevel ("Maze4");
	}

	public void changeTo5(){
		Application.LoadLevel ("Maze5");
	}
	public void changeTo6(){
		Application.LoadLevel ("Maze6");
	}

	public void changeTo7(){
		Application.LoadLevel ("Maze7");
	}
	public void changeTo8(){
		Application.LoadLevel ("Maze8");
	}
	public void changeTo9(){
		Application.LoadLevel ("Maze9");
	}
	public void changeTo10(){
		Application.LoadLevel ("Maze10");
	}

	public void changeToSelectMaze(){
		Application.LoadLevel ("SelectMaze");
	}
}
