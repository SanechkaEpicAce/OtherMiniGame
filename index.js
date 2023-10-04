$(window).on("load",  function() {
	
	$( ".ball" ).click(function() {
		
		let widthField = $(".field").width();
		let heightField = $(".field").height();

		let widthBall = $(".ball").width();
		let heightBall = $(".ball").height();

		if ($(".ball").css("margin-left") == "0px") {
			$(".ball").animate({
				"margin-left": widthField - widthBall + "px",
				"margin-top": (heightField - heightBall) * getRandomValue() + "px" 
				}, "slow", function() {
					let halfHieghtField = heightField/2;
					let upY = halfHieghtField - heightBall;
					let downY = halfHieghtField + heightBall;

					let ballMarginTop = parseInt($(".ball").css("margin-top"));
					if (upY <= ballMarginTop && downY >= ballMarginTop + heightBall) {
						alert("GOAL!");
					}
			});
		} else {
			$(".ball").animate({
				"margin-left": "0px",
				"margin-top": (heightField - heightBall) * getRandomValue() + "px"
			 }, "slow", function() {
					let halfHieghtField = heightField/2;
					let upY = halfHieghtField - heightBall;
					let downY = halfHieghtField + heightBall;

					let ballMarginTop = parseInt($(".ball").css("margin-top"));
					if (upY <= ballMarginTop && downY >= ballMarginTop + heightBall) {
						alert("GOAL!");
					}
			 });
		}
	});
});


function getRandomValue() {
	return Math.random();
}