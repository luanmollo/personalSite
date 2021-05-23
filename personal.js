window.onload = toEnglish(), setResolution();


function setResolution(){
	document.getElementById("initial").style.height = window.screen.height + "px";
}

window.onscroll = function(){
	if(window.scrollY < (window.screen.height - 38)){
		let x = document.getElementsByClassName("menuElement");
		for(i = 0; i < x.length; i++){
			x[i].style.boxShadow = "none";
		}

		document.getElementById("languajeEnglish").style.boxShadow = "none";
		document.getElementById("languajeSpanish").style.boxShadow = "none";
	}
	else{
		let x = document.getElementsByClassName("menuElement");
		for(i = 0; i < x.length; i++){
			x[i].style.boxShadow = "inset 0 0 0 0.5px rgba(171,178,185,0.8)";
		}

		document.getElementById("languajeEnglish").style.boxShadow = "inset 0 0 0 0.5px rgba(171,178,185,1)";
		document.getElementById("languajeSpanish").style.boxShadow = "inset 0 0 0 0.5px rgba(171,178,185,1)";
	}
}

let c = document.getElementById("mobileNavIcon");
c.addEventListener("click", menuMobile);


function menuMobile(){
	let y = document.getElementById("menuMobile");
	let w = document.getElementsByClassName("menuElementMobile");
	let z = document.getElementById("mobileNavImage");

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
		y.style.boxShadow = "inset 0 0 0 0.5px rgba(171,178,185,1)"
		y.style.zIndex= "2";

		c.style.transform = "rotate(45deg)";
		c.style.transitionDuration = "0.3s"; 

		for(i = 0; i < w.length; i++){
			w[i].style.display = "inline";
		}
	}
	else{
		console.log("me oculto");
		y.style.display = "none";

		c.style.transform = "rotate(0deg)";
		c.style.transitionDuration = "0.3s"; 
	}
}

let b = document.getElementsByClassName("menuElementMobile");
for(i = 0; i < b.length; i++){
	b[i].addEventListener("click", moveMobile);
}

function moveMobile(){
	let z = document.getElementById("menuMobile");
	z.style.display = "none";
	c.style.transform = "rotate(0deg)";
	c.style.transitionDuration = "0.3s"; 
}



document.addEventListener("click", function(e){
	if(document.getElementById("mobileNav").contains(e.target)){
	}
	else{
		let y = document.getElementById("menuMobile");
		y.style.display = "none";
		c.style.transform = "rotate(0deg)";
		c.style.transitionDuration = "0.3s"; 
	}
});

//contenido en ingles y español

let english = document.getElementById("languajeEnglish");
english.addEventListener("click", toEnglish);

let spanish = document.getElementById("languajeSpanish");
spanish.addEventListener("click", toSpanish);

function toEnglish(){
	//estilos
	document.getElementById("languajeEnglish").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("languajeEnglish").style.borderRadius = "24px";
	document.getElementById("languajeEnglish").style.padding = "10px";

	document.getElementById("languajeSpanish").style.backgroundColor = "transparent";
	document.getElementById("languajeSpanish").style.borderRadius = "24px";
	document.getElementById("languajeSpanish").style.padding = "10px";

	//cambio de idioma
	document.getElementsByClassName("menuElement")[0].innerHTML = "About";
	document.getElementsByClassName("menuElement")[1].innerHTML = "Projects";
	document.getElementsByClassName("menuElement")[2].innerHTML = "Skills";
	document.getElementsByClassName("menuElement")[3].innerHTML = "Contact";

	document.getElementById("shortDescription").innerHTML = "Full Stack Dev";

	document.getElementById("about").innerHTML = "About";
	document.getElementById("aboutText").innerHTML = "Hi! I'm Luan, a Full Stack Developer from Mendoza, Argentina.";

	document.getElementById("projects").innerHTML = "Projects";
	document.getElementById("calculatorTitle").innerHTML = "2 Terms Calculator";
	document.getElementById("calculatorText").innerHTML = "In this project, I used HTML and CSS with Flexbox skills for layout and styles, and JavaScript Vanilla for calculator functions.";
	document.getElementById("weeklyBudgetTitle").innerHTML = "Weekly Budget";
	document.getElementById("weeklyBudgetText").innerHTML = "In this project, I used HTML and CSS with Flexbox skills for layout and styles, and JavaScript Vanilla for calculator functions.";

	document.getElementById("skills").innerHTML = "Skills";
	document.getElementById("skillsText").innerHTML = "This is my tech stack:";

	document.getElementById("contact").innerHTML = "Contact";
	document.getElementById("contactText").innerHTML = "Please feel free to get in touch with me! You can find me on:";

	document.getElementById("footerText").innerHTML = "Made with love ♥ by Luan";

	//mobile
	document.getElementsByClassName("menuElementMobile")[0].innerHTML = "About";
	document.getElementsByClassName("menuElementMobile")[1].innerHTML = "Projects";
	document.getElementsByClassName("menuElementMobile")[2].innerHTML = "Skills";
	document.getElementsByClassName("menuElementMobile")[3].innerHTML = "Contact";
	document.getElementsByClassName("menuElementMobile")[4].innerHTML = "↑";
}

function toSpanish(){
	//estilos
	document.getElementById("languajeSpanish").style.backgroundColor = "rgba(255,255,255,0.5)";
	document.getElementById("languajeSpanish").style.borderRadius = "24px";
	document.getElementById("languajeSpanish").style.padding = "10px";

	document.getElementById("languajeEnglish").style.backgroundColor = "transparent";

	//cambio de idioma
	document.getElementsByClassName("menuElement")[0].innerHTML = "Sobre mí";
	document.getElementsByClassName("menuElement")[1].innerHTML = "Proyectos";
	document.getElementsByClassName("menuElement")[2].innerHTML = "Habilidades";
	document.getElementsByClassName("menuElement")[3].innerHTML = "Contacto";

	document.getElementById("shortDescription").innerHTML = "Desarrollador Full Stack";

	document.getElementById("about").innerHTML = "Sobre mí";
	document.getElementById("aboutText").innerHTML = "Hola! Soy Luan, un Desarrollador Web Full Stack de Mendoza, Argentina.";

	document.getElementById("projects").innerHTML = "Proyectos";
	document.getElementById("calculatorTitle").innerHTML = "Calculadora de 2 términos";
	document.getElementById("calculatorText").innerHTML = "En este proyecto utilicé conocimientos de HTML y CSS con FlexBox para el maquetado y los estilos, y JavaScript Vanilla para las funcionalidades de la calculadora.";
	document.getElementById("weeklyBudgetTitle").innerHTML = "Presupuesto semanal";
	document.getElementById("weeklyBudgetText").innerHTML = "En este proyecto utilicé conocimientos de HTML y CSS con FlexBox para el maquetado y diseño, y JavaScript Vanilla para las funcionalidades de la calculadora.";

	document.getElementById("skills").innerHTML = "Habilidades";
	document.getElementById("skillsText").innerHTML = "Este es mi stack tecnológico:";

	document.getElementById("contact").innerHTML = "Contacto";
	document.getElementById("contactText").innerHTML = "Por favor siéntete libre de ponerte en contacto conmigo! Puedes encontrarme en:";
	
	document.getElementById("footerText").innerHTML = "Hecho con amor ♥ por Luan";

	//mobile
	document.getElementsByClassName("menuElementMobile")[0].innerHTML = "Sobre mí";
	document.getElementsByClassName("menuElementMobile")[1].innerHTML = "Proyectos";
	document.getElementsByClassName("menuElementMobile")[2].innerHTML = "Habilidades";
	document.getElementsByClassName("menuElementMobile")[3].innerHTML = "Contacto";
	document.getElementsByClassName("menuElementMobile")[4].innerHTML = "↑";
}
