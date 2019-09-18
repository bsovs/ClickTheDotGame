

            var highScore = localStorage.getItem("highScore"); 
            // Considering you already have highScore set in local storage.
            // Uncomment your line number 10 if you want to set in local storage
            if(highScore){
                document.getElementById('showscore').innerHTML = highScore;
            }
            else{
                document.getElementById('showscore').innerHTML = "Play your first game";            
            }



