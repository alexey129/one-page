function Header(){
	let headerClass = document.querySelector(".header");
	let headerMenuIcon = document.querySelector("header .menu-icon");
	let headerMenuList = document.querySelector("header .menu-list");
	let menuIsOpen = false;

	function OpenCloseMenu() {
		headerClass.classList.toggle("headerClose");
		headerClass.classList.toggle("headerOpen");
		if(menuIsOpen == false){
			menuIsOpen = true;
			if (window.pageYOffset >= 30) {
				headerClass.classList.remove("headerScrollBackground");
				headerClass.classList.remove("headerCloseBackground");
				headerClass.classList.add("headerOpenBackground");
			}else{
				headerClass.classList.remove("headerScrollBackground");
				headerClass.classList.remove("headerCloseBackground");
				headerClass.classList.add("headerOpenBackground");
			};
		} else {
			menuIsOpen = false;
			if (window.pageYOffset >= 30) {
				headerClass.classList.add("headerScrollBackground");
				headerClass.classList.remove("headerCloseBackground");
				headerClass.classList.remove("headerOpenBackground");
			}else{
				headerClass.classList.remove("headerScrollBackground");
				headerClass.classList.add("headerCloseBackground");
				headerClass.classList.remove("headerOpenBackground");
			};
		};
	}

	headerMenuIcon.onclick = OpenCloseMenu;

	window.addEventListener("scroll", function() {
		if (window.pageYOffset >= 30 && menuIsOpen == false) {
			headerClass.classList.add("headerScrollBackground");
			headerClass.classList.remove("headerCloseBackground");
			headerClass.classList.remove("headerOpenBackground");
		} else if(menuIsOpen == true){
			headerClass.classList.remove("headerScrollBackground");
			headerClass.classList.remove("headerCloseBackground");
			headerClass.classList.add("headerOpenBackground");
		} else if(menuIsOpen == false){
			headerClass.classList.remove("headerScrollBackground");
			headerClass.classList.add("headerCloseBackground");
			headerClass.classList.remove("headerOpenBackground");
		}
	});

	window.onresize = function( event ) {
		if(document.documentElement.clientWidth > 786 && menuIsOpen == true){
			menuIsOpen = false;
			headerClass.classList.toggle("headerClose");
			headerClass.classList.toggle("headerOpen");
			if (window.pageYOffset >= 30) {
				headerClass.classList.add("headerScrollBackground");
				headerClass.classList.remove("headerCloseBackground");
				headerClass.classList.remove("headerOpenBackground");
			} else {
				headerClass.classList.remove("headerScrollBackground");
				headerClass.classList.add("headerCloseBackground");
				headerClass.classList.remove("headerOpenBackground");
			}
		}
	};

	//??????????????????????
	if (window.pageYOffset >= 30) {
		headerClass.classList.add("headerScrollBackground");
		headerClass.classList.remove("headerCloseBackground");
		headerClass.classList.remove("headerOpenBackground");
	}

	headerClass.classList.add("headerCloseBackground");
	headerClass.classList.add("headerClose");
}

header = new Header();


//????????????????

let buttonHiTechDesign1 = document.querySelector(".hi-tech-design .swiper-container .button1");
buttonHiTechDesign1.classList.add("white-button");
let buttonHiTechDesign2 = document.querySelector(".hi-tech-design .swiper-container .button2");

let swiperHiTechDesign = new Swiper('.hi-tech-design .swiper-container', {
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	allowTouchMove: false,
	autoplay: {
		delay: 5000,
	},
});

swiperHiTechDesign.on("slideChange",function(){
	if(swiperHiTechDesign.activeIndex == 1 || swiperHiTechDesign.activeIndex == 3){
		buttonHiTechDesign1.classList.toggle("white-button");
		buttonHiTechDesign2.classList.toggle("white-button");
	};
	if(swiperHiTechDesign.activeIndex == 2 || swiperHiTechDesign.activeIndex == 0){
		buttonHiTechDesign1.classList.toggle("white-button");
		buttonHiTechDesign2.classList.toggle("white-button");
	};
});

buttonHiTechDesign1.onclick = function(event) {
	swiperHiTechDesign.slideTo(1, 500);
};
buttonHiTechDesign2.onclick = function(event) {
	swiperHiTechDesign.slideTo(2, 500);
};

//why-choose-us
let category1 = document.querySelector(".why-choose-us .categories .category1");
let category2 = document.querySelector(".why-choose-us .categories .category2");
let category3 = document.querySelector(".why-choose-us .categories .category3");

category1.onclick = function(event){
	category1.classList.add("blue-style");
	category2.classList.remove("blue-style");
	category3.classList.remove("blue-style");
}

category2.onclick = function(event){
	category1.classList.remove("blue-style");
	category2.classList.add("blue-style");
	category3.classList.remove("blue-style");
}

category3.onclick = function(event){
	category1.classList.remove("blue-style");
	category2.classList.remove("blue-style");
	category3.classList.add("blue-style");
}

//about
//?????????????????? ?????????????????????? ??????????
window.addEventListener("scroll", function() {
	let element1 = document.querySelector(".about .art-of-coding img");
	let element2 = document.querySelector(".about .clean-design img");
	let element3 = document.querySelector(".about .amazing-support img");
	if (window.pageYOffset >= 300) {
	   element1.style.marginTop = 0;
	   element2.style.marginTop = 0;
	   element3.style.marginTop = 0;
	};
});

//???????????? "????????????"
let buttonUp = document.querySelector(".buttonUp");
if (window.pageYOffset < 300) {
		buttonUp.classList.add("unview");
	} else {
		buttonUp.classList.remove("unview");
	};
window.addEventListener("scroll", function() {
	if (window.pageYOffset < 300) {
		buttonUp.classList.add("unview");
	} else {
		buttonUp.classList.remove("unview");
	};
});
