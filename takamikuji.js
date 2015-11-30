var remainNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
				16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
				31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,
				46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
				61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
var outNum = new Array();
var isStop = false;

function Bingo(){
	if(remainNum.length==0){
		alert("終了です！");
	}else{
		var rnd = Math.floor(Math.random() * remainNum.length);
		document.getElementById("roulette").innerText = remainNum[rnd];
		if(remainNum[rnd]<10){
			outNum.push("t0"+remainNum[rnd])
		}else{
			outNum.push("t"+remainNum[rnd])
		}
		remainNum.splice(rnd, 1);
		PutColor(outNum);
	}
}

function PutColor (list) {
	for(var i = 0; i < list.length; i++){
		document.getElementById(list[i]).style.background = "gray";
	}
}

function ShowRoulette (){
	if(isRoulette){
		var rnd = Math.floor(Math.random() * remainNum.length);
		document.getElementById("roulette").innerText = remainNum[rnd];
		setTimeout("ShowRoulette()", 100);
	}
}

function Start() {
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline";
  isRoulette = true;
  ShowRoulette();
}

function Stop() {
  document.getElementById("start").style.display = "inline";
  document.getElementById("stop").style.display = "none";
  isRoulette = false;
  Bingo();
}