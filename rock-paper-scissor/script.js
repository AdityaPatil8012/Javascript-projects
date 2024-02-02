      // <script>
        let score = JSON.parse(localStorage.getItem("score"));
        if (score === null) {
          score = {
            wins: 0,
            losses: 0,
            ties: 0,
          };
        }
        updateTheScore();

        function playGame(playerMove) {
          const computerMove = pickComputerMove();
          let result = " ";

          if (playerMove === "scissor") {
            if (computerMove === "rock") {
              result = "You lose!!";
            } else if (computerMove === "paper") {
              result = "You Win!!!";
            } else if (computerMove === "scissor") {
              result = "tie";
            }
          } else if (playerMove === "paper") {
            if (computerMove === "rock") {
              result = "You Win!!!";
            } else if (computerMove === "paper") {
              result = "tie";
            } else if (computerMove === "scissor") {
              result = "You lose!!";
            }
          } else if (playerMove === "rock") {
            if (computerMove === "rock") {
              result = "tie";
            } else if (computerMove === "paper") {
              result = "You lose!!";
            } else if (computerMove === "scissor") {
              result = "You Win!!!";
            }
          }

          if (result === "You Win!!!") {
            score.wins += 1;
          } else if (result === "You lose!!") {
            score.losses += 1;
          } else if (result === "tie") {
            score.ties += 1;
          }
          localStorage.setItem("score", JSON.stringify(score));
          
          updateTheScore();
          document.querySelector('.js-result').innerHTML = `Result is ${result}`;
          document.querySelector('.js-moves').innerHTML = `Your move is ${playerMove}. Computer's move is ${computerMove}`;
        }

        function updateTheScore(){
          document.querySelector('.js-score').innerHTML = `wins: ${score.wins} losses: ${score.losses} ties: ${score.ties}`;
        }

        function result(){
          document.querySelector('.js-result').innerHTML = `Result is ${result}`;
        }

        function moves(){
          document.querySelector('.js-moves').innerHTML = `Your move is ${playerMove}. Computer's move is ${computerMove}`;
        }

        function pickComputerMove() {
          let computerMove = "";
          let randomMove = Math.random();
          if (randomMove >= 0 && randomMove < 1 / 3) {
            computerMove = "rock";
          } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
            computerMove = "paper";
          } else if (randomMove >= 2 / 3 && randomMove < 1) {
            computerMove = "scissor";
          }

          return computerMove;
        }
      // </script>