 document.getElementById('Button-1').addEventListener('click',function(event){
event.preventDefault();
const donation1=parseFloat(document.getElementById('Done-1').value)
const amount1= parseFloat(document.getElementById('balance-1').innerText)
const newblance1=amount1-donation1;
document.getElementById('balance-1').innerText=newblance1;
const totalDonation= parseFloat(document.getElementById('Total-donate').innerText)
const newdonation=donation1+totalDonation;
document.getElementById('Total-donate').innerText=newdonation;
})