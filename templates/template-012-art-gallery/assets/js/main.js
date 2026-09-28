(function(){
  var b=document.getElementById('railBtn'),r=document.getElementById('rail');
  if(b&&r){b.addEventListener('click',function(){var o=r.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  document.querySelectorAll('form[data-fake]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.msg');if(m){m.textContent=f.getAttribute('data-fake');}f.reset();});
  });
  var t=document.getElementById('totop');
  if(t){window.addEventListener('scroll',function(){t.classList.toggle('show',window.scrollY>600);});t.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});}
})();