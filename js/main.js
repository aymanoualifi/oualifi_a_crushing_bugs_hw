(() => {
	// collect the buttons at the bottom of the page
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board");

		//  .gameBoard {
		//	background-image: url("../images/backGround1.jpg")

	function changeBgImg() {
		gameBoard.style.backgroundImage = `url(images/background${this.dataset.bgref}.jpg)`;
	}

	// add event handling here -> loop through theThumbnails array and add event handling to each image
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));
})();