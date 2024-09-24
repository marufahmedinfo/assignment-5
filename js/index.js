

document.getElementById('noakali-donate-btn').addEventListener("click", function(){
  const total = getTextFieldById("total-balance");
  const inputNoakali = getInputFieldValueById("n-input-donation");
  const giveNoakali = getTextFieldById("give-noakali");
     if(isNaN !== inputNoakali && inputNoakali <= total){
      // const donationNoakali=inputNoakali + giveNoakali;
      const donationNoakali = inputNoakali + giveNoakali;
      document.getElementById('give-noakali').innerText = donationNoakali;
      const newbalance = total - donationNoakali;
    
      document.getElementById('total-balance').innerText = newbalance;

      const remove =document.getElementById('modal');
      remove.classList.remove('hidden');

      document.getElementById('n-input-donation').value='';
     }else{
       alert('please type valid input')
       const remove =document.getElementById('modal');
       remove.classList.add('hidden');
       document.getElementById('n-input-donation').value='';
     };
  });


  document.getElementById('fani-donate-btn').addEventListener("click",function(){
    const total = getTextFieldById("total-balance");
    const inputfani=getInputFieldValueById("f-input-donation" );
    const givefani = getTextFieldById("give-fani");
    
     if(isNaN!==inputfani && inputfani <= total){
       const donationFani = inputfani + givefani;
       document.getElementById('give-fani').innerText = donationFani;
       const newbalance = total - donationFani ;
       document.getElementById('total-balance').innerText = newbalance;
       const remove = document.getElementById('modal');
       remove.classList.remove('hidden');
       document.getElementById('f-input-donation').value='';
     }else{
      alert('please provide a valid input');
      const remove = document.getElementById('modal');
      remove.classList.add('hidden');
      document.getElementById('f-input-donation').value='';
     }
  });

document.getElementById('qouta-donate-btn').addEventListener('click', function(){
  const total = getTextFieldById("total-balance");
  const inputquota = getInputFieldValueById("q-input-donation");
  const giveQuota = getTextFieldById("give-quota");

    if(isNaN !== inputquota && inputquota <= total){
        const donationQouta = inputquota + giveQuota;
        document.getElementById('give-quota').innerText = donationQouta;
        const newbalance = total - donationQouta;
        document.getElementById('total-balance').innerText = newbalance;

        const remove = document.getElementById('modal');
        remove.classList.remove('hidden');

        document.getElementById('q-input-donation').value='';
    }else{
      alert('please provide a valid input');

      const remove = document.getElementById('modal');
      remove.classList.add('hidden');
      
      document.getElementById('q-input-donation').value='';
    }
})



// button click 
const donation = document.getElementById('donation-main-btn');
const historys = document.getElementById('history-main-btn');

historys.addEventListener('click', function(){

  const btnCr = document.getElementById('donation-main-btn');
  btnCr.classList.remove('color1');

  const btnlr = document.getElementById('history-main-btn');
  btnlr.classList.add('color1');
  
  const hidToadd = document.getElementById('history');
  hidToadd.classList.remove('hidden');
  
  const addTohide = document.getElementById('donation');
  addTohide.classList.add('hidden');
});
donation.addEventListener('click', function(){

  const btnCr = document.getElementById('donation-main-btn');
  btnCr.classList.add('color1');

  const btnlr = document.getElementById('history-main-btn');
  btnlr.classList.remove('color1');
  
  const hidToadd = document.getElementById('history');
  hidToadd.classList.add('hidden');

  const addTohide = document.getElementById('donation');
  addTohide.classList.remove('hidden');
});

