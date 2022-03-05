(() => {
	// collect the buttons at the bottom of the page
let theThumbnails = document.querySelectorAll("#buttonHolder img"),
gameBoard = document.querySelector(".puzzle-board");
/*
function changeBGImg(){
	//debugger;
	gameBoard.style.backgroundImage = 'url(images/backGround${this.dataset.bgref}.jpg)'
}


	// add event handling here -> loop through theThumbnails array and add event handling to each image
  theThumbnails.forEach((thumb => thumb.addEventListener("click", changeBGImg));





		});


})();
