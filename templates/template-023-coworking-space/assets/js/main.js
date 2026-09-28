(function(){
  var b=document.getElementById('burger'),d=document.getElementById('drawer');
  if(b&&d){b.addEventListener('click',function(){var o=d.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});}
  document.querySelectorAll('form[data-fake]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.msg');if(m){m.textContent=f.getAttribute('data-fake');}f.reset();});
  });
  // 點擊色條顯示狀態
  document.querySelectorAll('.bar').forEach(function(el){
    el.addEventListener('click',function(){
      var t = el.classList.contains('free')?'可預約時段':(el.classList.contains('booked')?'已被預約':'清潔維護中');
      alert(el.textContent + ' → ' + t);
    });
  });
  var t=document.getElementById('totop');
  if(t){window.addEventListener('scroll',function(){t.classList.toggle('show',window.scrollY>600);});t.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});}
    })();