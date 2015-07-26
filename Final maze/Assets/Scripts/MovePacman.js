#pragma strict
import UnityEngine.UI;

static var sphere : GameObject;
public var meats;
public var time;
function Start () {
	
}



function OnGUI(){
	
	

	
}

//Function that is executed on every frame
function Update () {
	//Counts all the meats in the maze and sets it
	meats = GameObject.FindGameObjectsWithTag("Meat").Length;
	GameObject.Find("TextMeats").GetComponent(Text).text="Snacks:"+meats;
	
	//Sets time since the game starts
	time =Time.realtimeSinceStartup.ToString("F1");
	GameObject.Find("TextTime").GetComponent(Text).text="Time:"+time;
	
	//Opens the exit if theres no more meats
	if(meats ==0){
		if(GameObject.Find("BExit") )
			GameObject.Find("BExit").SetActive(false);
	}

	//Controls what pacman does depending in the key pressed
	if(Input.GetKey(KeyCode.UpArrow))
	{
		transform.Translate(Vector3(0,0,0.7), Space.World);		
		transform.eulerAngles = Vector3(0, 90, 0);
	}
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		transform.Translate(Vector3(-0.7,0,0), Space.World);
		transform.eulerAngles = Vector3(0, 0, 0);
	}
	if(Input.GetKey(KeyCode.RightArrow))
	{
		transform.Translate(Vector3(0.7,0,0), Space.World);
		transform.eulerAngles = Vector3(0, 180, 0);
	}
	if(Input.GetKey(KeyCode.DownArrow))
	{
		transform.Translate(Vector3(0,0,-0.7), Space.World);
		transform.eulerAngles = Vector3(0, 270, 0);	
	}
}


//Function to define what an object does when collide
function OnTriggerEnter(other: Collider ) 
{
	if (other.gameObject.CompareTag ("Meat"))
	{
		other.gameObject.SetActive (false);
	}
	if(other.gameObject.CompareTag ("Exit"))
	{
		Application.LoadLevel("Congratulations");
	}
}
