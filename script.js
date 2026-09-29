// typing
const words=['ngoding 💻','desain lucu 🎨','jajan boba 🧋','begadang 🌙','bikin meme 😆'];let wi=0,ci=0,del=false;const el=document.getElementById('typing');
(function type(){const w=words[wi];el.textContent=w.slice(0,ci);if(!del){ci++;if(ci>w.length){del=true;setTimeout(type,1200);return}}else{ci--;if(ci===0){del=false;wi=(wi+1)%words.length}}setTimeout(type,del?40:90)})();
// skills
const skills=[{i:'🌐',t:'HTML & CSS',d:'Bikin web pastel yang rapi & responsif. Flexbox? Gampang!',p:90,c:'#ffe3ef'},{i:'✨',t:'JavaScript',d:'Bikin web jadi hidup: animasi, game, dan toast lucu.',p:75,c:'#ede9fe'},{i:'🎨',t:'Figma & Canva',d:'Desain poster, feed IG, dan UI gemoy kesukaan.',p:88,c:'#fff1d6'},{i:'🐍',t:'Python',d:'Masih belajar, udah bisa bikin bot & otomasi kecil.',p:60,c:'#dcfce7'},{i:'📱',t:'CapCut & Editing',d:'Edit video jedag-jedug buat tugas & konten.',p:82,c:'#e0f2fe'},{i:'🤝',t:'Kerja Tim',d:'Spesialis tugas kelompok: ngoding + desain + meme.',p:95,c:'#fce7f3'}];
document.getElementById('skillGrid').innerHTML=skills.map(s=>`<div class="card reveal show"><div class="icon-bubble" style="background:${s.c}">${s.i}</div><h3>${s.t} <span class="skill-pct">${s.p}%</span></h3><p>${s.d}</p><div class="skill-bar"><div class="skill-fill" data-w="${s.p}"></div></div></div>`).join('');
// reveal + bars
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');e.target.querySelectorAll('.skill-fill').forEach(f=>f.style.width=f.dataset.w+'%');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal,.skill-fill').forEach(x=>io.observe(x.closest('.reveal')||x));
setTimeout(()=>document.querySelectorAll('.skill-fill').forEach(f=>f.style.width=f.dataset.w+'%'),600);
// toast
let tt;function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2500)}
function copyEmail(e){e.preventDefault();navigator.clipboard?.writeText('halo@fahmi.cute');toast('✉️ Email disalin! halo@fahmi.cute')}
// fun facts
const facts=['💡 Aku bisa ngetik 60 WPM sambil dengerin lo-fi!','🍜 Mie instan favoritku: goreng + telur + keju. Wajib coba!','🐱 Aku team kucing, tapi belum punya kucing. Sedih dikit.','🎮 Rank game-ku lebih tinggi dari nilai MTK-ku (jangan bilang mama)','🌸 Warna favoritku: pink! (ketahuan banget ya?)','🧋 Level boba favorit: 50% sugar, less ice. Anak health-conscious!'];
document.getElementById('funFact').onclick=function(){this.textContent=facts[Math.floor(Math.random()*facts.length)];toast('💡 Fakta baru unlocked!')};
// burger
document.getElementById('burger').onclick=()=>document.getElementById('navLinks').classList.toggle('open');
// sparkles
const em=['✨','🌸','💖','⭐','💫'];document.addEventListener('mousemove',e=>{if(Math.random()>.88){const s=document.createElement('div');s.className='spark';s.textContent=em[Math.floor(Math.random()*em.length)];s.style.left=e.clientX+'px';s.style.top=e.clientY+'px';document.body.appendChild(s);setTimeout(()=>s.remove(),900)}});
// mini game
function playGame(e){e.preventDefault();const n=Math.floor(Math.random()*10)+1;const g=prompt('🎲 Tebak angka 1-10! Kesempatan 1x, yang kalah traktir boba 🧋');if(g==n)toast('🎉 BENAR! Kamu hoki banget! Traktir aku boba ya 😆');else if(g)toast(`😝 Yah salah! Angkanya ${n}. Kamu yang traktir boba!`)}

