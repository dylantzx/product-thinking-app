// Saves any <textarea data-save="key"> to localStorage (per-browser only).
document.querySelectorAll('textarea[data-save]').forEach(t=>{
  const k='ptapp:'+t.dataset.save;
  try{t.value=localStorage.getItem(k)||''}catch(e){}
  t.addEventListener('input',()=>{try{localStorage.setItem(k,t.value)}catch(e){}});
});
