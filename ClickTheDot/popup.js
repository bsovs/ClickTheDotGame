
//Score
(function() {
	//Score
	var a = 0;
	
	
	function myFunction() {
		$("#demo").text(a);
	}

//Delete

	function d(){
    $("#button").remove();
	makeDiv();
	}



	//The Dot 
	
	
	function makeDiv() {
		
		//Speed
		a = a + 1
		var y = a * 10 + 500;
		
		// vary size for fun
		var divsize = ((Math.random()*100) + 20).toFixed();
		var color = '#'+ Math.round(0xffffff * Math.random()).toString(16);
		$newdiv = $('<button type="button" id="button" style=" border-radius: 500px;outline: none;padding: 0;border: none;"></button>').css({
			'width':divsize+'px',
			'height':divsize+'px',
			'background-color': color
		});

		// make position sensitive to size and document's width
		var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
		var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

		$newdiv.css({
			'position':'absolute',
			'left':posx+'px',
			'top':posy+'px',
			'display':'none'
		}).appendTo( 'body' ).fadeIn(500).delay(2000-y).fadeOut(100, function(){
			
			window.location = "home.html";
		}); 
		
		
		// Assign MyFunction as onclick each time we make a new circle.
		$newdiv.on("click", myFunction);
		$newdiv.on("click", d);
		
		 var highScore = localStorage.getItem("highScore"); 
            // Considering you already have highScore set in local storage.
            // Uncomment your line number 10 if you want to set in local storage
            if(highScore){
                hs = highScore;
            }
            else{
                hs = 0;            
            }
		
		if (a > hs){
		localStorage.setItem("highScore", a-1);
		}
	}
	
	makeDiv(); // Make our initial circle
})();
 
 
 