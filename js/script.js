/*dropdown menu in header*/
var userArrow = document.getElementById("user-arrow")
userArrow.addEventListener("click", DropUserMenu, false);
function DropUserMenu(){
	var userMenuDisplay = document.getElementById("user-menu");
	if(userMenuDisplay.style.display == 'flex'){
		userMenuDisplay.style.display = 'none';
	}else{
		userMenuDisplay.style.display = 'flex';
	}
}