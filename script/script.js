
const Amount = document.querySelector('.amount');
const service = document.querySelectorAll('.row .btn');
const Person = document.querySelector('.person');
const Warn = document.querySelector('.warn'); 
const tipAmount = document.querySelector('.tip-amount');
 const totalLast = document.querySelector('.totalLast')
const reset = document.querySelector('.reset'); 
var tipValue = 0 ; 
var personValeur ; 
for(let i = 0 ; i<service.length ; i++){
    service[i].addEventListener('click'  , ()=>{tipValue = service[i].value;
    if(i == 5){ service[i].addEventListener('change' , ()=>{tipValue = service[i].value;}
    )}})}
reset.addEventListener('click' , ()=>{
    if(Amount.value == 0 || Person.value == 0 ){
        Swal.fire({
            title: 'Error!',
            text: 'please fill in the necessary fields',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    
}
    else{
        Warn.style.display="none";
        let tipAMount= eval(((Amount.value * tipValue)/100) / Person.value).toFixed(3);
        tipAmount.innerHTML =`$ ${tipAMount}`;
        totalLast.innerHTML = `$ ${eval(( tipAMount * Amount.value) / Person.value).toFixed(3)}`}})





    