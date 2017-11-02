

window.onload = init;

        function init() {
            var message = "You are in Abdijan, Ivory Coast. You are at the Right To Dream Soccer Academy trails, you are in the changing room where you find cleats."; 
          displayMessage(message);  
        }

        var score = 0;
        var Location = 0;

        var position0 = false;
        var position1 = false;
        var position2 = false;
        var position3 = false;
        var position4 = false;
        var position5 = false; 





        

        function btnNorth_click() {
            switch (Location === 0) { 
              case 0:
                displayMessage("You cannot go that way");
                break;
                
           case 1:
                displayMessage("You cannot go that way"); 
                break;


                


            case 2:

                displayMessage("You cannot go that way"); 
                break;
                
           case 3:
                ivorycoast();
                score += 5;
                Location = 0; 
                break;
            case 4:
                Guingamp();
                score += 5;
                Location = 1; 
                break;
          case 5:
                Marseille();
                score += 5;
                Location = 2; 
                break;
            case 6:
              London(); 
              score += 5; 
              Location = 3; 
              break;
            case 7:
              Mosccow();  
              score += 5; 
             Location = 4; 
             break;
          case 8:
            Munich(); 
            score += 5; 
            Location = 5; 
            break;
        case 9:
            Home(); 
            score += 5; 
            Location = 6; 
            break;
        } 
         scoreElement = document.getElementById("Score"); 
            scoreElement.innerHTML = "Score : " + score;

        }

        function btnSouth_click() {
            switch(Location === 0) { 
              case 0:
                London();
                score += 5; 
                Location = 3; 
                break;
                
           case 1:
                Moscow();
                score += 5;
                Location = 4; 
                break;

           case 2:
                Munich();
                score += 5;
                Location = 5; 
                break;

           case 3:
                displayMessage("You cannot go that way"); 
                break;
                
           case 4:
                displayMessage("You cannot go that way"); 
                break;
               

            case 5:
                displayMessage("You cannot go that way"); 
                break;
                
          case 6:
            Location = 9; 
            score += 5; 
           Montreal(); 
           break;
      case 7:
           displayMessage("You cannot go that way"); 
           break;
                
       case 8:
           displayMessage("You cannot go that way"); 
           break;
                
        case 9:
          displayMessage("You cannot go that way"); 
          break;
               
        } 
         scoreElement = document.getElementById("Score"); 
            scoreElement.innerHTML = "Score : " + score;
           

        }

        function btnWest_click() {
            switch (Location === 0) { 
              case 0:
                displayMessage("You cannot go that way"); 
                break;
                
            case 1:
                Location = 0;
                score += 5;
                ivorycoast(); 
                break;

            case 2:
                Location = 1;
                score += 5;
                Guingamp(); 
                break;

            case 3:
                displayMessage("You cannot go that way"); 
                break;
                

            case 4:
                Location = 3;
                score += 5;
                London(); 
                break;
           case 5:
                Location = 4;
                score += 5;
                Moscow(); 
                break;
            case 6:
              displayMessage("You cannot go that way");  
              break;
              
           case 7:
              Location = 6;
              score += 5; 
              Home(); 
              break;
            case 8 :
              Location = 7; 
              score += 5; 
              Airport(); 
              break;
            case 9:
              displayMessage("You cannot go that way"); 
              break;
                
            } 
             scoreElement = document.getElementById("Score"); 
            scoreElement.innerHTML = "Score : " + score;


        }

        function btnEast_click() {
            switch (Location)  { 
              case 0:
                Location = 1;
                score += 5;
                Guingamp(); 
                break;
            case 1:
                Location = 2;
                score += 5;
                Marseille(); 
                break;

           case 2: 
                displayMessage("You cannot go that way"); 
                break;

            case 3 : 
                Location = 4;
                score += 5;
                Moscow(); 
                break;
            case 4:
                Location = 5;
                score += 5;
                Munich(); 
                break;
            case 5:
                displayMessage("You cannot go that way"); 
                break;
                
            case 6:
              Location = 7; 
              score += 5; 
              Airport(); 
              break;
            case 7: 
              Location = 8; 
              score += 5; 
              Shanghai(); 
              break;
            case 8 :
               displayMessage("You cannot go that way"); 
               break;
                
            case 9:
               displayMessage("You cannot go that way"); 
               break;
                
            } 
            scoreElement = document.getElementById("Score"); 
            scoreElement.innerHTML = "Score : " + score;
        } 




        function ivorycoast(){
          var message = "You are in Abdijan, Ivory Coast. You are at the Right To Dream Soccer Academy trails, you are in the chaanging room where you find cleats."; 
          displayMessage(message);  
          Location = 0;
        }

        function Guingamp(){
          var message = "You are in France with your uncle Didier. You have a trial with Guingamp tomorow morning." ;
          displayMessage(message); 
          Location = 1;
        } 


        function Marseille(){
          var message = "You just scored the winning goal for Marseille in the Coupe de France Final @ the Stade Veledrome."; 
          displayMessage(message); 
          Location = 2;
        } 

        function London(){
          var message = "You are in London, England with Chelsea manager Jose Mourinho signing your new five-year contract."; 
          displayMessage(message);  
          Location = 3;
        } 

        function Moscow(){
          var message = "You are walking down the tunnel alone after being sent off in the Champions League Final in Moscow, disgraced and letting your team down."; 
          displayMessage(message); 
          Location = 4;
        } 

        function Munich(){
          var message = "You are holding the Champions League trophy in Munich after scoring the most memorable goal in club history and the penalty kick to win Chelsea's first ever Champions League."; 
          displayMessage(message); 
          Location = 5;
        } 


        function Home(){  
          var message = "You walk into your bedroom after training and open the letter. The letter states that you have played your last ever match for chelsea and will be moving to play in China."; 
          displayMessage(message); 
          Location = 6;
        } 

        function Airport(){
          var message = "You are at London Heathrow Airport about to board your flight to China."; 
          displayMessage(message); 
          Location = 7;
        } 

        function Shanghai(){
          var message = "You are in Shanghai, China and you are at the training ground of Shanghai Shenhua getting ready for your first team session.";
          displayMessage(message); 
          Location = 8;
        } 

        function Montreal(){
          var message = "You have been transfered to the Montreal Impact, you are now in Montreal where you will end you amazing career in the MLS."; 
          displayMessage(message); 
          Location = 9;
        }
    

       

        function btnGo_click() {
          var Text = document.getElementById("txtCommand").value;
          var answer = "";
          var assistanceMessage = "You must enter the following commands n, s, e, w, N, S, E, W.";
          var failureMessage = "Invalid Command. Only the following commands, n,s,e,w,N,S,E,W are valid commands.";
          if (Text === "n" || Text === "N") {
            answer = btnNorth_click();
          } else if (Text === "s" || Text === "S") {
            answer = btnSouth_click();
          } else if (Text === "e" || Text === "E") {
            answer = btnEast_click();
          } else if (Text === "w" || Text === "W") {
            answer = btnWest_click();
          }else if (Text === "help" || Text === "HELP"){
            var textarea = document.getElementById("message");
            textarea.value = assistanceMessage;
          } else {
            var textarea = document.getElementById("message");
            textarea.value = failureMessage;
          }

          }
        function displayMessage(msg) {
            var target = document.getElementById("message");
            target.value = msg + "\n\n" + target.value;
        }