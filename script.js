function menuBtnClick() {
	// Menu button and opening /Closing
	let menuBtn = document.querySelector('.menu_btn');
	let burgSpan = document.querySelectorAll('.hamburger_icon span');
	let hamburgTxt = document.querySelector('.hamburger_text');
	let menuPage = document.querySelector('#menu_page');

	menuClick = 1;
	menuBtn.addEventListener('click', function () {
		if (menuClick === 1) {
			burgSpan[0].style.transform = 'rotate(30deg)';
			burgSpan[1].style.transform = 'rotate(-30deg)';
			menuPage.style.display = 'flex';
			hamburgTxt.innerHTML = 'Close';
			menuPage.style.opacity = '1';
			console.log(menuBtn.href);
			menuClick = 0;
		} else {
			burgSpan[0].style.transform = 'rotate(0deg)';
			burgSpan[1].style.transform = 'rotate(0deg)';
			hamburgTxt.innerHTML = 'Menu';
			document.location.href = '/';
			menuPage.style.opacity = '0';
			menuBtn.href="javascript:;"
			menuClick = 1;
		}
	});
}
menuBtnClick();

function CartBtnClick() {
	// Cart button and opening/Closing
	let cartBtn = document.querySelector('.cart_btn');
	let cartCont = document.querySelector('#cart_container');
	let cartClose = document.querySelector('.cart_close');
	let cartBg = document.querySelector('.cart_background');

	function cartShow(){
		cartCont.style.transform ="translateX(0%)";
		cartBg.style.transform ="translateX(-100%)";
		cartClick = 0;
	}
	function cartHide(){
		cartCont.style.transform = "translateX(100%)"
		cartBg.style.transform ="translateX(0%)";
		cartClick = 1;
	}

	cartClick = 1;
	cartBtn.addEventListener('click',function () {
		if (cartClick === 1) {
			cartShow();
		} else {
			cartHide();
		}
	});
	cartBg.addEventListener('click', () => {
		cartHide();
	});
	cartClose.addEventListener('click', () => {
		cartHide();
	});
}
CartBtnClick();


class Sacncha{
	constructor(){
		this.width =4;
		this.height = 9;
		this.taste ="swe";
		this.price = 7;
	}
}

var ek = new Sacncha ();

class khaneketali{
	constructor(sweet,price){
		this.sweet= sweet;
		this.price= price;
	}
}
var thali1 = new khaneketali('Gulab jamun', 120)
var thali2 = new khaneketali('Rasmlaiy',20)

