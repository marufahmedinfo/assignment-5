
// function getInputFieldValueById(id) {
//     const inputValue = document.getElementById(id).value;
//     const inputNumber = parseFloat(inputValue);
//     return inputNumber;
    
// }

// function getTextFieldById(id){
//     const amountText = document.getElementById(id).innerText;
//     const amountNumber = parseFloat(amountText);
//     return amountNumber;
// }

// function getInputFieldValueById(id){
//     const inputValue = document.getElementById(parseFloat(id).value);
//     return inputValue;
// }


// function getTextFieldById(id){
//     const TextFiled = document.getElementById(parseFloat(id).innerText);
//     return TextFiled;
// }


// function  getInputFieldValueById(id){
//     const input = parseFloat(document.getElementById(id).value);
   
//     return input;
 
//   };
 function getInputFieldValueById(id){
    const input = document.getElementById(id).value;
    const ret = parseFloat(input);
    return ret;
 }
 
  function getTextFieldById(id){
     const text = parseFloat(document.getElementById(id).innerText); 
     return text;
 
  }
 