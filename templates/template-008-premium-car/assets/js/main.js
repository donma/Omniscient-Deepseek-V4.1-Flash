(function(){
  var b=document.getElementById('burger'),d=document.getElementById('drawer');
  if(b&&d){b.addEventListener('click',function(){var o=d.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  document.querySelectorAll('form[data-fake]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.msg');if(m){m.textContent=f.getAttribute('data-fake');}f.reset();});
  });
  // HUD 儀表盤動畫開啟
  document.querySelectorAll('.dial').forEach(function(d){
    var target = d.getAttribute('data-deg')||'270deg';
    d.style.setProperty('--deg','0deg');
    setTimeout(function(){ d.style.transition='background .4s'; d.style.setProperty('--deg',target); },80);
  });
  // 規格拉桿動畫
  document.querySelectorAll('.fill').forEach(function(f){
    var w = f.getAttribute('data-w')||'60%';
    f.style.width='0%'; f.style.transition='width .6s ease-out';
    setTimeout(function(){ f.style.width=w; },120);
  });
  var t=document.getElementById('totop');
  if(t){window.addEventListener('scroll',function(){t.classList.toggle('show',window.scrollY>600);});t.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});}
})();