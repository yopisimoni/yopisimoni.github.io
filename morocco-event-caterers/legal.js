(()=>{
const supported=['en','ar','fr','es'];
const select=document.getElementById('legalLanguage');
const file=(location.pathname.split('/').pop()||'about.html').replace('.html','');
const common={
 en:{home:'Home',about:'About',privacy:'Privacy',terms:'Terms',community:'Community Guidelines',contact:'Contact',updated:'Last updated: 6 September 2026 · Morocco Wedding Guide'},
 ar:{home:'الرئيسية',about:'من نحن',privacy:'الخصوصية',terms:'الشروط',community:'قواعد المجتمع',contact:'التواصل',updated:'آخر تحديث: 6 سبتمبر 2026 · Morocco Wedding Guide'},
 fr:{home:'Accueil',about:'À propos',privacy:'Confidentialité',terms:'Conditions',community:'Règles de la communauté',contact:'Contact',updated:'Dernière mise à jour : 6 septembre 2026 · Morocco Wedding Guide'},
 es:{home:'Inicio',about:'Sobre nosotros',privacy:'Privacidad',terms:'Términos',community:'Normas de la comunidad',contact:'Contacto',updated:'Última actualización: 6 de septiembre de 2026 · Morocco Wedding Guide'}
};
const page={
 privacy:{
  en:['Privacy & data protection','Privacy Policy','How Morocco Wedding Guide handles account information, community reviews, photos, reports and technical data.','Privacy Policy | Morocco Wedding Guide'],
  ar:['الخصوصية وحماية البيانات','سياسة الخصوصية','كيف يتعامل Morocco Wedding Guide مع معلومات الحساب والتقييمات والصور والبلاغات والبيانات التقنية.','سياسة الخصوصية | Morocco Wedding Guide'],
  fr:['Vie privée et protection des données','Politique de confidentialité','Comment Morocco Wedding Guide traite les comptes, avis, photos, signalements et données techniques.','Politique de confidentialité | Morocco Wedding Guide'],
  es:['Privacidad y protección de datos','Política de Privacidad','Cómo Morocco Wedding Guide gestiona cuentas, opiniones, fotos, reportes y datos técnicos.','Política de Privacidad | Morocco Wedding Guide']},
 terms:{
  en:['Platform rules','Terms of Use','Rules for browsing the directory, contacting providers and contributing reviews, photos or reports.','Terms of Use | Morocco Wedding Guide'],
  ar:['قواعد المنصة','شروط الاستخدام','قواعد تصفح الدليل والتواصل مع مقدمي الخدمات وإضافة التقييمات والصور والبلاغات.','شروط الاستخدام | Morocco Wedding Guide'],
  fr:['Règles de la plateforme','Conditions d’utilisation','Règles de consultation, contact des prestataires et contribution d’avis, photos ou signalements.','Conditions d’utilisation | Morocco Wedding Guide'],
  es:['Reglas de la plataforma','Términos de Uso','Reglas para navegar, contactar proveedores y aportar opiniones, fotos o reportes.','Términos de Uso | Morocco Wedding Guide']},
 about:{
  en:['Independent wedding discovery','About Morocco Wedding Guide','Built to make local wedding services easier to discover, compare and improve through trustworthy community feedback.','About | Morocco Wedding Guide'],
  ar:['دليل مستقل للأعراس','حول Morocco Wedding Guide','نبني دليلاً يجعل اكتشاف ومقارنة خدمات الأعراس المحلية أسهل مع مساهمات موثوقة من المجتمع.','من نحن | Morocco Wedding Guide'],
  fr:['Découverte mariage indépendante','À propos de Morocco Wedding Guide','Un guide conçu pour faciliter la découverte et la comparaison des services mariage locaux grâce à des retours communautaires fiables.','À propos | Morocco Wedding Guide'],
  es:['Descubrimiento de bodas independiente','Sobre Morocco Wedding Guide','Una guía para descubrir y comparar servicios locales de boda con feedback comunitario fiable.','Sobre nosotros | Morocco Wedding Guide']},
 'community-guidelines':{
  en:['Trust & moderation','Community Guidelines','How ratings, reviews, photos and reports should work so the directory remains useful and fair.','Community Guidelines | Morocco Wedding Guide'],
  ar:['الثقة والمراجعة','قواعد المجتمع','كيف يجب أن تعمل التقييمات والصور والبلاغات حتى يبقى الدليل مفيداً ومنصفاً.','قواعد المجتمع | Morocco Wedding Guide'],
  fr:['Confiance et modération','Règles de la communauté','Comment notes, avis, photos et signalements doivent fonctionner pour garder un guide utile et équitable.','Règles de la communauté | Morocco Wedding Guide'],
  es:['Confianza y moderación','Normas de la comunidad','Cómo deben funcionar valoraciones, opiniones, fotos y reportes para mantener una guía útil y justa.','Normas de la comunidad | Morocco Wedding Guide']},
 contact:{
  en:['Contact & corrections','Help us keep the guide accurate','Providers and users need a clear route to correct listings, report problems and exercise privacy rights.','Contact & Corrections | Morocco Wedding Guide'],
  ar:['التواصل والتصحيحات','ساعدنا في الحفاظ على دقة الدليل','يحتاج المستخدمون ومقدمو الخدمات إلى طريقة واضحة لتصحيح البيانات والإبلاغ وممارسة حقوق الخصوصية.','التواصل والتصحيحات | Morocco Wedding Guide'],
  fr:['Contact et corrections','Aidez-nous à garder le guide exact','Prestataires et utilisateurs ont besoin d’un moyen clair pour corriger les fiches, signaler un problème et exercer leurs droits.','Contact et corrections | Morocco Wedding Guide'],
  es:['Contacto y correcciones','Ayúdanos a mantener la guía correcta','Proveedores y usuarios necesitan una vía clara para corregir fichas, reportar problemas y ejercer sus derechos.','Contacto y correcciones | Morocco Wedding Guide']}
};
const privacyStatus={
 en:'Backend status: the dedicated Supabase project is provisioned in Paris, France (eu-west-3) with row-level security and a private photo bucket. Account-based contributions remain intentionally disabled until the operator/privacy contact, CNDP formalities and Supabase Auth redirect URL are completed.',
 ar:'حالة البنية الخلفية: تم تجهيز مشروع Supabase مخصص في باريس، فرنسا (eu-west-3) مع حماية على مستوى الصفوف وتخزين خاص للصور. تظل المساهمات المرتبطة بالحساب معطلة عمداً إلى حين استكمال هوية/تواصل المسؤول، وإجراءات CNDP، ورابط إعادة التوجيه في Supabase Auth.',
 fr:'État du backend : le projet Supabase dédié est provisionné à Paris, France (eu-west-3), avec sécurité RLS et stockage photo privé. Les contributions avec compte restent volontairement désactivées jusqu’à la finalisation du responsable/contact vie privée, des formalités CNDP et de l’URL de redirection Supabase Auth.',
 es:'Estado del backend: el proyecto Supabase dedicado está aprovisionado en París, Francia (eu-west-3), con RLS y almacenamiento privado de fotos. Las contribuciones con cuenta siguen desactivadas hasta completar la identidad/contacto del responsable, los trámites CNDP y la URL de redirección de Supabase Auth.'
};
let lang=localStorage.getItem('mec-lang')||'en';if(!supported.includes(lang))lang='en';
function setNav(lang){const c=common[lang];document.querySelectorAll('a[href="./"]').forEach(a=>{if(a.closest('.legal-footer'))a.textContent=c.home});document.querySelectorAll('a[href="about.html"]').forEach(a=>{if(!a.classList.contains('brand'))a.textContent=c.about});document.querySelectorAll('a[href="privacy.html"]').forEach(a=>a.textContent=c.privacy);document.querySelectorAll('a[href="terms.html"]').forEach(a=>a.textContent=c.terms);document.querySelectorAll('a[href="community-guidelines.html"]').forEach(a=>a.textContent=c.community);document.querySelectorAll('a[href="contact.html"]').forEach(a=>a.textContent=c.contact);const foot=document.querySelector('.legal-footer>p');if(foot)foot.textContent=c.updated}
function apply(next){lang=supported.includes(next)?next:'en';localStorage.setItem('mec-lang',lang);document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('.lang-panel').forEach(p=>p.classList.toggle('active',p.dataset.lang===lang));if(select)select.value=lang;setNav(lang);const copy=page[file]?.[lang];if(copy){const hero=document.querySelector('.hero');if(hero){const eyebrow=hero.querySelector('.eyebrow'),h1=hero.querySelector('h1'),p=hero.querySelector('p:not(.eyebrow)');if(eyebrow)eyebrow.textContent=copy[0];if(h1)h1.textContent=copy[1];if(p)p.textContent=copy[2]}document.title=copy[3]}if(file==='privacy'){const panel=document.querySelector(`.lang-panel[data-lang="${lang}"]`);const notice=panel?.querySelector('.notice');if(notice)notice.textContent=privacyStatus[lang]}}
if(select)select.addEventListener('change',e=>apply(e.target.value));apply(lang);
})();