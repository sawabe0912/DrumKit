document.getElementById("p1").addEventListener("click", sound1);
document.getElementById("p2").addEventListener("click", sound2);
document.getElementById("p3").addEventListener("click", sound3);
document.getElementById("p4").addEventListener("click", sound4);
document.getElementById("p5").addEventListener("click", sound5);
document.getElementById("p6").addEventListener("click", sound6);
document.getElementById("p7").addEventListener("click", sound7);



window.document.onkeydown = function(event){
	if(event.keyCode===65){
		sound1();
	}else if(event.keyCode===66){
		sound2();
	}else if(event.keyCode===67){
	    sound3();
    }else if(event.keyCode===68){
    	sound4();
    }else if(event.keyCode===69){
    	sound5();
    }else if(event.keyCode===70){
    	sound6();
    }else if(event.keyCode===71){
    	sound7();
    }
}

function sound1(){
	var audio1 = new Audio("sounds/sound1.m4a");
    audio1.play();
    document.getElementById("1").classList.add("active");

    setTimeout(function(){
    	document.getElementById("1").classList.remove("active");
    },100)
};

function sound2(){
	var audio2 = new Audio("sounds/sound2.m4a");
    audio2.play();
    document.getElementById("2").classList.add("active");

    setTimeout(function(){
        document.getElementById("2").classList.remove("active");
    },100)
}

function sound3(){
	var audio3 = new Audio("sounds/sound3.m4a");
    audio3.play();
    document.getElementById("3").classList.add("active");

    setTimeout(function(){
        document.getElementById("3").classList.remove("active");
    },100)
}

function sound4(){
	var audio4 = new Audio("sounds/sound3.m4a");
    audio4.play();
    document.getElementById("4").classList.add("active");

    setTimeout(function(){
        document.getElementById("4").classList.remove("active");
    },100)
}

function sound5(){
	var audio5 = new Audio("sounds/sound4.m4a");
    audio5.play();
   document.getElementById("5").classList.add("active");

    setTimeout(function(){
        document.getElementById("5").classList.remove("active");
    },100)
}

function sound6(){
    var audio5 = new Audio("sounds/sound5.m4a");
    audio5.play();
    document.getElementById("6").classList.add("active");

    setTimeout(function(){
        document.getElementById("6").classList.remove("active");
    },100)
}

function sound7(){
    var audio5 = new Audio("sounds/sound5.m4a");
    audio5.play();
   document.getElementById("7").classList.add("active");

    setTimeout(function(){
        document.getElementById("7").classList.remove("active");
    },100)
}

