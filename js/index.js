

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
       remove.classList.remove('hidden');
       document.getElementById('n-input-donation').value='';
     };

  
     const historyItem = document.createElement('div');
     historyItem.className = "bg-blue p-4 rounded-lg border-2 border-gray-500";
     historyItem.innerHTML = ` 
     <h1 class="text-2xl text-gray-800">$${inputNoakali.toFixed(2)}   taka donate for famine-2024 at  noakali,Bangladesh </h1>
    <p class="text-md text-gray-500">${new Date().toString()} </p> `
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
      remove.classList.remove('hidden');
      document.getElementById('f-input-donation').value='';
     };
     const historyItem = document.createElement('div');
     historyItem.className = "bg-blue p-4 rounded-lg border-2 border-gray-500";
     historyItem.innerHTML = `
     <h1 class="text-2xl text-gray-800">$${inputfani.toFixed(2)}  taka donate for famine-2024 at  fani,Bangladesh </h1>
     <p class="text-md text-gray-500">${new Date().toString()}</p>
     `
     const historyContainer = document.getElementById('history');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
      remove.classList.remove('hidden');
      
      document.getElementById('q-input-donation').value='';
    };
    const historyItem = document.createElement('div');
    historyItem.className = "bg-blue p-4 rounded-lg border-2 border-gray-500";
    historyItem.innerHTML = `
    <h1 class="text-2xl text-gray-800">$${inputquota.toFixed(2)}  taka donate for famine-2024 at  quota,Bangladesh </h1>
    <p class="text-md text-gray-500">${new Date().toString()}</p>
    `
    const historyContainer = document.getElementById('history');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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

const home = document.getElementById('homes');
const blog = document.getElementById("blog");
blog.onclick = function(){
  window.location.href = "blog.html";
};
home.onclick = function(){
  window.location.href = "index.html";
};