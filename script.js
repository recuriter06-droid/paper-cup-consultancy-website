function menu(){
  document.querySelector('.links').classList.toggle('open');
}

function demo(e){
  e.preventDefault();
  alert('Thank you. This form is ready for connection to email/CRM before the official launch.');
}

function wa(e){
  e.preventDefault();
  window.open('https://wa.me/917028877510','_blank');
}
