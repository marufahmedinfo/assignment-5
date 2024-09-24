
// // // const balance = document.getTextFieldValueById('total-balance');
// const giveNoakali = getInputFieldValueById('give-noakali');

// const balance = getTextFiledValueById("total-balance").innerText;
// console.log(balance)
// document.getElementById('noakali-donate-btn').addEventListener('click', function(){
//     const inputValue = document.getElementById('n-input-donation').value;
//     if(isNaN !== inputValue && inputValue <= balance){

//     }
// })




const giveNoakali = getTextFieldById("give-noakali");
const givefani = getTextFieldById("give-fani");
const giveQuota = getTextFieldById("give-quota");

const total = getTextFieldById("total-balance");
 
  

  document.getElementById('noakali-donate-btn').addEventListener("click", function(){
     const inputNoakali = getInputFieldValueById("n-input-donation");
     if(isNaN !== inputNoakali && inputNoakali <= total){
      // const donationNoakali=inputNoakali + giveNoakali;
      const donationNoakali = inputNoakali + giveNoakali;
      document.getElementById('give-noakali').innerText = donationNoakali;
      const newbalance = total - donationNoakali;
    
      document.getElementById('total-balance').innerText = newbalance;
      document.getElementById('n-input-donation').value='';
     }else{
       alert('please type valid input')
       document.getElementById('n-input-donation').value='';
     }
  });


  document.getElementById('fani-donate-btn').addEventListener("click",function(){
    // const total = getTextFieldById("total-balance");
    const inputfani=getInputFieldValueById("f-input-donation" );
    
     if(isNaN!==inputfani && inputfani <= total){
       const donationFani = inputfani + givefani;
       document.getElementById('give-fani').innerText = donationFani;
       const newbalance = total - donationFani ;
       document.getElementById('total-balance').innerText = newbalance;
       document.getElementById('f-input-donation').value='';
     }else{
      alert('please provide a valid input');
      document.getElementById('f-input-donation').value='';
     }
  });

document.getElementById('qouta-donate-btn').addEventListener('click', function(){
    const inputquota = getInputFieldValueById("q-input-donation");

    if(isNaN !== inputquota && inputquota <= total){
        const donationQouta = inputquota + giveQuota;
        document.getElementById('give-quota').innerText = donationQouta;
        const newbalance = total - donationQouta;
        document.getElementById('total-balance').innerText = newbalance;
        document.getElementById('q-input-donation').value='';
    }else{
      alert('please provide a valid input');
      document.getElementById('q-input-donation').value='';
    }
})


