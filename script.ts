let timerFunction  :any;
let Display  :HTMLInputElement = document.getElementById('Display') as HTMLInputElement ; 
let Input   :HTMLInputElement = document.getElementById('Input') as HTMLInputElement;
let startButton: HTMLButtonElement = document.getElementById('Start') as HTMLButtonElement;
let resetButton: HTMLButtonElement = document.getElementById('Reset') as HTMLButtonElement;
let Footer:HTMLParagraphElement = document.getElementById("footer") as HTMLParagraphElement;
let bgChange:HTMLButtonElement = document.getElementById("bg-color")as HTMLButtonElement;
let darkMode:HTMLDivElement= document.getElementById("mode")as HTMLDivElement
// Access the body element

 // Access the body element
const bodyElement = document.body;


  bgChange.addEventListener("click", ()=>{
   
    console.log(darkMode.innerText)
    
    if(darkMode.innerText == "normal"){
      
      document.body.style.background = "black"
      startButton.style.color = "black"
      resetButton.style.color = "black"
      Display.style.color = "White"
      
      darkMode.innerText = darkMode.innerText
  
      darkMode.innerText = "dark" 
      
      
    }else if(darkMode?.innerText == "dark"){
      console.log(darkMode.innerText)
      
      document.body.style.background = "linear-gradient(135deg, #0077b6, #00b4d8)"
      Display.style.color = "black"
        startButton.style.color = "White"
      resetButton.style.color = "White"
      
      darkMode.innerText = "normal" 
      console.log(darkMode.innerText);

}
    


})





let isRunning:boolean = false; 


function startFunction(){


  if(!isRunning){
    
    let stringToNumber:number = eval(Input.value)+1;
     Footer.style.color = "White"

    if(typeof stringToNumber == "number" && stringToNumber > 0 && stringToNumber < 7201 ){
      
      timerFunction = setInterval(()=>{
        
     let   decrement  =  --stringToNumber
        if(decrement !== 0 ){
          Display.value = stringToNumber.toString()
        }else{
          Display.value = "Over"
          clearInterval(timerFunction)
          isRunning = false
        }
        
        
        },1000)


        isRunning = true
      
        
       
    }else if(stringToNumber > 7200){
      Footer.style.color = "Red"
      alert("You cannot enter more than 7200 seconds.");

    }
    

  
  }

  }
    




const resetFunction = ()=>{

  clearInterval(timerFunction)
  Display.value = "";
  Input.value =  Input.value = "" ;
  isRunning = false

 }





