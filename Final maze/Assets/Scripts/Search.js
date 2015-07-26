#pragma strict


public var level : int =0;
public var nodeS : Node;
public var nodeG : Node;
public var actualPosition : Vector3;
public var neighbors = new Array();
public var children = new Array();
public var actualNode : Node;
public var tree = new Array();
public var childrenAdded  = new Array();
public var toExpand = new Array();


function Start () {
	nodeS = new Node(GameObject.Find("PacmanU"));
	nodeS.setName(GameObject.Find("PacmanU").transform.name);
	
	nodeG = new Node(GameObject.Find("Exit"));
	nodeG.setName(GameObject.Find("Exit").transform.name);
	
	///actualPosition = nodeS.getContent().transform.position;

	//actualNode = nodeS;
	
	getPath();
}



function Update() {
		
		
		//nodeStart.transform.position = Vector3.MoveTowards(nodeStart.transform.position,meat ,1);
}

//DEVUELVE ARRAY DE TODOAS LAS CARNES VECINAS 
function  getNeighbors(center : Vector3){
	var nodesNeighbors= new Array();
	var hitColliders = Physics.OverlapSphere(center, 10);
	for (var i = 0; i < hitColliders.Length; i++) {
		if(hitColliders[i].tag=="Meat" && hitColliders[i].gameObject.transform.position != center){
			nodesNeighbors.Push(hitColliders[i].gameObject);
		}
	}
	for(i = 0; i < nodesNeighbors.length ; i++){
		var a  : GameObject = nodesNeighbors[i] as GameObject;
		Debug.Log("Vecino encontrado:"+a.transform.name+"en posicion"+a.transform.position);
	}
	return nodesNeighbors;
	
}

function getPath(){

	var tmp : Node;
	var a : GameObject;
	var neighbor : GameObject;
	var child : Node;
	
	children.Push(nodeS);
	for(var x =0 ; x < 22 ; x++){
		for(var j =0 ; j < children.length; j++){
			
			child = children[j] as Node;
			if(checkExpanded(child.getName())){
				Debug.Log("El nodo "+child.getName()+" ya fue recorrido");
				continue;
			}
				
			actualNode = children[j] as Node;
			actualPosition = actualNode.getContent().transform.position;
			Debug.Log("Posicion actual: "+actualPosition+" en objeto: "+child.getContent().transform.name);
			neighbors = getNeighbors(actualPosition);
			Debug.Log("Cantidad vecinos en posicion actual: "+neighbors.length);
			
			for(var i = 0; i < neighbors.length; i++) {
				
					neighbor = neighbors[i] as GameObject;
					if(!nodeExists(neighbor.transform.name)){
						tmp = new Node(neighbor);
						tmp.setName(neighbor.transform.name);
						actualNode.addChild(tmp);
						Debug.Log("Se guardo: "+tmp.getName());
						childrenAdded.Push(tmp);
						neighbor.active=false;
						toExpand.push(tmp);
				}
			}
			
			//actualNode.setVisited(1);
			Debug.Log("Nodo "+actualNode.getName()+" Expandido");
			tree.Push(actualNode);
			level++;
				
			
		}
		
		children = actualNode.getChildren();
		
	}
	

	
}

//dificil de explicar
function nodeExists(name : String){
	var node : Node;
	for(var i =0 ; i < childrenAdded.length ; i++){
		node = childrenAdded[i] as Node;
		if(node.getName()==name)
		return true;
	}
	return false;
}


//COMPRUEBA SI UN NODO YA FUE EXTENDIDO
function checkExpanded(name : String){
	var node : Node;
	for(var i =0 ; i < tree.length ; i++){
		node = tree[i] as Node;
		if(node.getName()==name)
		return true;
	}
	return false;
}


