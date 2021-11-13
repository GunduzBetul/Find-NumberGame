
let checkButton = document.getElementById('check-btn');
let output = document.getElementById('output');
let number = Math.floor(Math.random() * 100 + 1);
let attempts = document.getElementById('attempts');

let count = 0;


checkButton.addEventListener('click' , () => {
    let input = document.getElementById('input-number').value;


    
    
    if(input === ""){                                                 
        alert("Please press a button!"); 
    }
    
    
    if(input <= 0 || input > 100){           
        alert("Invalid value.Try Again!");
    }

    else if(isNaN(input)){                                 
        output.innerText = "Please Enter a Number";
   
    }

    else if (input == number){                      
        output.innerText ="Congratulations!"
        
        
    

    }else if(input < number){                           
        count++;
        output.innerText = 'Please Enter a Higher Number';
        attempts.innerText = 'Number of Attempts: ' + count;
    }
        
    else if(input > number){                            
        count++;
        output.innerText = 'Please Enter a Lower Number';
        attempts.innerText = 'Number of Attempts: ' + count;
       
    }
    

});