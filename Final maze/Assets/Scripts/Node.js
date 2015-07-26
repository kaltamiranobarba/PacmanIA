#pragma strict

public class Node{
	public var father : Node;
	public var children = new Array();
	public var name : String;
	public var content : GameObject;
	public var visited : int = 0;
	
	
	function getVisited(){
		return visited;
	}
	
	function setVisited(i : int){
		visited = i;
	}
	
	function Node(g : GameObject){
		content = g;
	}
	
	
	function setContent(g : GameObject){
		content = g;
	}
	
	function getContent(){
		var c = content;
		return c;
	}
	
	function getFather(){
		var root = father;
		return root;
	}
	
	function addFather(n : Node){
		father = n;
	}
	
	function addChild(n : Node){
		children.Push(n);
	}
	
	function getChildren(){
		var ch = children;
		return ch;
	}	
	
	function setName(s : String){
		name = s;
	}
	
	function getName(){
		var n = name;
		return n;
	}
}