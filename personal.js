window.onscroll = function(){
	if(window.scrollY < 747){
		let x = document.getElementsByClassName("menuElement");
		for(i = 0; i < x.length; i++){
			x[i].style.boxShadow = "none";
		}
	}
	else{
		let x = document.getElementsByClassName("menuElement");
		for(i = 0; i < x.length; i++){
			x[i].style.boxShadow = "inset 0 0 0 0.5px rgba(171,178,185,0.8)";
		}
	}
}

let c = document.getElementById("mobileNavIcon");
c.addEventListener("click", menuMobile);


function menuMobile(){
	let y = document.getElementById("menuMobile");
	let w = document.getElementsByClassName("menuElementMobile");

	if(y.style.display == "none" || y.style.display == false){
		console.log("me muestro");
		y.style.display = "flex";
		y.style.flexDirection = "column";
		y.style.alignItems = "center";
		y.style.position = "fixed";
		y.style.bottom = "15%";
		y.style.right = "5%";
		y.style.backgroundColor = "rgba(255,255,255,0.5)";
		y.style.borderRadius = "24px";
		y.style.zIndex= "2";

		for(i = 0; i < w.length; i++){
			w[i].style.display = "inline";
		}
	}
	else{
		console.log("me oculto");
		y.style.display = "none";
	}
}

let b = document.getElementsByClassName("menuElementMobile");
for(i = 0; i < b.length; i++){
	b[i].addEventListener("click", moveMobile);
}

function moveMobile(){
	let z = document.getElementById("menuMobile");
	z.style.display = "none";
}



document.addEventListener("click", function(e){
	if(document.getElementById("mobileNav").contains(e.target)){
	}
	else{
		let y = document.getElementById("menuMobile");
		y.style.display = "none";

	}
});

