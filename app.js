/*-------------------------------- Event Listener --------------------------------*/

const numberElement = document.querySelectorAll('.button.number')
const operatorElement = document.querySelectorAll('.button.operator')
const equalButtonElement = document.querySelector('.equals')
const displayElement = document.querySelector('.display')

console.log(numberElement)
console.log(operatorElement)
console.log(equalButtonElement)

/*-------------------------------- Constant --------------------------------*/


/*-------------------------------- Variables --------------------------------*/

let num1 =null
let num2 =null
let opeartor =null

/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event){
console.log('Clicked Number')

if(!num1 && !num2 && !opeartor){
    num1= event.target.textContent
    displayElement.textContent += num1
}
else if(num1 && !num2 && !opeartor){
    num1 += event.target.textContent
    displayElement.textContent += event.target.textContent
}
else if(num1 && !num2 && opeartor){
    num2 = event.target.textContent
    displayElement.textContent += num2
}
else if(num1 && num2 && opeartor){
    num2 += event.target.textContent
    displayElement.textContent+= event.target.textContent
}




console.log(`Number1 ${num1}`)
console.log(`Number2 ${num2}`)
console.log(`Opeartor ${opeartor}`)


}

function handleClickOpearator(event){
console.log('Clicked Opearator') 
  if(event.target.textContent==='C'){
    num1=null
    num2=null
    opeartor=null
    displayElement.textContent=''
  }
  else if(num1 && !num2 && !opeartor){
    opeartor= event.target.textContent 
    displayElement.textContent += opeartor
  }

console.log(`Number1 ${num1}`)
console.log(`Number2 ${num2}`)
console.log(`Opeartor ${opeartor}`) 


}

function handleClickEqual(){
    
if(opeartor ==='+'){
 let sum =Number(num1) + Number(num2)
 console.log(sum)
   displayElement.textContent= sum
}

else if(opeartor === '-'){
    let minus= Number(num1) - Number(num2)
    console.log(minus)
    displayElement.textContent= minus
}
else if(opeartor === '*'){
    let multiply = Number(num1)*Number(num2)
    console.log(multiply)
    displayElement.textContent= multiply
}
else if(opeartor === '/'){
    let divide = Number(num1)/Number(num2)
    console.log(divide)
    displayElement.textContent=divide
}

console.log('Clicked Equal')
console.log(`Number1 ${num1}`)
console.log(`Number2 ${num2}`)
console.log(`Opeartor ${opeartor}`)
}


/*-------------------------------- Event Listener --------------------------------*/

equalButtonElement.addEventListener('click',handleClickEqual)

for(let oneNumber of numberElement){
    oneNumber.addEventListener('click',handleClickNumber)
}

for(let oneOpeartor of operatorElement){
    oneOpeartor.addEventListener('click',handleClickOpearator)
}