// Usage: <div class="quiz" data-quiz='{"q":"...","options":["a","b"],"answer":1,"why":"..."}'></div>
document.querySelectorAll('.quiz[data-quiz]').forEach(el=>{
  const d=JSON.parse(el.dataset.quiz);
  el.innerHTML='<p class="q"></p><div class="opts"></div><p class="fb" aria-live="polite"></p>';
  el.querySelector('.q').textContent=d.q;
  const fb=el.querySelector('.fb'),box=el.querySelector('.opts');
  d.options.forEach((t,i)=>{
    const b=document.createElement('button');b.className='opt';b.textContent=t;
    b.onclick=()=>{
      if(i===d.answer){b.classList.add('right');fb.textContent='Correct. '+d.why;box.querySelectorAll('button').forEach(x=>x.disabled=true)}
      else{b.classList.add('wrong');b.disabled=true;fb.textContent='Not quite. Try again.'}
    };box.appendChild(b);
  });
});
