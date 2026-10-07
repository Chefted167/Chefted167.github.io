const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

const form=document.getElementById('contactForm');
const status=document.getElementById('formStatus');
form?.addEventListener('submit',(e)=>{
  e.preventDefault();
  status.textContent='Thanks! Your enquiry is ready. Connect this form to your official email/Formspree before going live.';
  form.reset();
});
