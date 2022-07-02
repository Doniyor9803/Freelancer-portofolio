const nav = document.querySelector('#nav');	
const navBtn = document.querySelector('#nav_btn');
const navBtnImg = document.querySelector('#nav_btn_img');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "./img/Icon/NAV CLOSE.svg";
	} else {
		navBtnImg.src = "./img/Icon/Nav_open.svg";
	}
}
