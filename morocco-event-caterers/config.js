// Public frontend configuration only.
// A Supabase publishable key is safe to use in browser code when RLS is correctly configured.
// NEVER put a service_role key or secret key here.
window.CATERER_APP_CONFIG = {
  supabaseUrl: "",
  publishableKey: ""
};

(()=>{
  const copy={
    en:{cats:['Catering','Venues','Photo & video','Décor & flowers','Neggafa','Music & DJ'],live:'Live now',next:'Next',about:'About',privacy:'Privacy',terms:'Terms',community:'Community Guidelines',contact:'Contact',privacyNote:'Current pilot: no advertising or behavioural-tracking cookies.'},
    ar:{cats:['التموين','القاعات','التصوير والفيديو','الديكور والورود','النكافة','الموسيقى وDJ'],live:'متاح الآن',next:'قريباً',about:'من نحن',privacy:'الخصوصية',terms:'الشروط',community:'قواعد المجتمع',contact:'التواصل',privacyNote:'النسخة الحالية: لا نستخدم ملفات إعلانية أو تتبع سلوكي.'},
    fr:{cats:['Traiteurs','Salles','Photo & vidéo','Décoration & fleurs','Neggafa','Musique & DJ'],live:'En ligne',next:'À venir',about:'À propos',privacy:'Confidentialité',terms:'Conditions',community:'Règles de la communauté',contact:'Contact',privacyNote:'Pilote actuel : aucun cookie publicitaire ni suivi comportemental.'},
    es:{cats:['Catering','Salones','Foto y vídeo','Decoración y flores','Neggafa','Música y DJ'],live:'Activo',next:'Próximamente',about:'Sobre nosotros',privacy:'Privacidad',terms:'Términos',community:'Normas de la comunidad',contact:'Contacto',privacyNote:'Piloto actual: sin cookies publicitarias ni seguimiento conductual.'}
  };
  function lang(){const l=document.documentElement.lang||localStorage.getItem('mec-lang')||'en';return copy[l]?l:'en'}
  function ensureLegalFooter(){const footer=document.querySelector('footer');if(!footer||footer.querySelector('.footer-legal-nav'))return;const nav=document.createElement('nav');nav.className='footer-legal-nav';nav.setAttribute('aria-label','Legal');nav.innerHTML='<a href="about.html"></a><a href="privacy.html"></a><a href="terms.html"></a><a href="community-guidelines.html"></a><a href="contact.html"></a>';const note=document.createElement('p');note.className='footer-privacy-note';footer.append(nav,note);const style=document.createElement('style');style.textContent='.footer-legal-nav{display:flex;flex-wrap:wrap;gap:8px 16px}.footer-legal-nav a{font-weight:750;text-decoration:underline;text-underline-offset:3px}.footer-privacy-note{max-width:430px}@media(max-width:700px){.footer-legal-nav{order:3;width:100%}.footer-privacy-note{order:4}}';document.head.appendChild(style)}
  function translate(){const c=copy[lang()];const tiles=[...document.querySelectorAll('.category-tile')];tiles.forEach((tile,i)=>{const strong=tile.querySelector('strong'),small=tile.querySelector('small');if(strong&&c.cats[i])strong.textContent=c.cats[i];if(small)small.textContent=tile.classList.contains('is-live')?c.live:c.next});ensureLegalFooter();const nav=document.querySelector('.footer-legal-nav');if(nav){const links=[...nav.querySelectorAll('a')],labels=[c.about,c.privacy,c.terms,c.community,c.contact];links.forEach((a,i)=>a.textContent=labels[i])}const note=document.querySelector('.footer-privacy-note');if(note)note.textContent=c.privacyNote}
  function start(){translate();new MutationObserver(m=>{if(m.some(x=>x.attributeName==='lang'))translate()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();