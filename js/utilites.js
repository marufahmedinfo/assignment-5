
function getInputFieldValueById(id){
    const input = document.getElementById(id).value;
    const ret = parseFloat(input);
    return ret;
 }
 
  function getTextFieldById(id){
     const text = parseFloat(document.getElementById(id).innerText); 
     return text;
 
  }
 