const modal=document.querySelector('#modal');document.querySelector('#pair').onclick=()=>modal.classList.add('show');document.querySelector('#x').onclick=()=>modal.classList.remove('show');document.querySelector('#done').onclick=()=>modal.classList.remove('show');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};document.querySelector('#clear').onclick=()=>{document.querySelector('#alerts').innerHTML='<div class="empty"><div class="empty-symbol">🔔</div><b>No notifications yet</b><p>Alerts cleared.</p></div>'};document.querySelector('#screen').onclick=()=>alert('Live screen sharing requires the Android companion app and your explicit consent on the phone.');document.querySelector('#voice').addEventListener('change',e=>{if(e.target.checked){if(!('speechSynthesis' in window)){alert('Voice announcements are not supported in this browser.');e.target.checked=false;return;}speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance('Voice alerts enabled. Phone Connect Pro demo.'));}});document.querySelector('#desktop').addEventListener('change',async e=>{if(e.target.checked&&'Notification'in window){const p=await Notification.requestPermission();if(p!=='granted')e.target.checked=false;}else if(!('Notification'in window))e.target.checked=false;});
const screenModal=document.querySelector('#screenModal');
const openScreen=()=>screenModal.classList.add('show');
document.querySelector('#fullscreen')?.addEventListener('click',openScreen);
document.querySelector('#screen')?.addEventListener('click',openScreen);
document.querySelector('#screenClose')?.addEventListener('click',()=>screenModal.classList.remove('show'));
screenModal?.addEventListener('click',e=>{if(e.target===screenModal)screenModal.classList.remove('show')});

document.querySelectorAll('.app-toggle').forEach(toggle=>toggle.addEventListener('change',e=>{
  const app=e.target.dataset.app;
  const enabled=e.target.checked;
  if(app==='WhatsApp' && enabled && document.querySelector('#wa')) document.querySelector('#wa').checked=true;
  if(app==='WhatsApp' && !enabled && document.querySelector('#wa')) document.querySelector('#wa').checked=false;
  // UI selection only: companion Android app/backend must enforce the app allowlist.
  const label=enabled?'enabled':'disabled';
  console.log(`${app} notifications ${label}`);
}));
