window.walineMount = async function(el, path){
  const S = window.SITE || {};
  if (!S.walineServer) return false;
  if (!window.__walineCss) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = 'https://unpkg.com/@waline/client@3.15.2/dist/waline.css'; document.head.appendChild(l); window.__walineCss = 1; }
  const { init } = await import('https://unpkg.com/@waline/client@3.15.2/dist/waline.js');
  if (window.__waline) { window.__waline.destroy(); window.__waline = null; }
  el.setAttribute('dir', 'rtl');
  window.__waline = init({
    el, path, serverURL: S.walineServer, lang: 'en', dark: 'html[data-theme="dark"]',
    meta: ['nick', 'mail'], requiredMeta: ['nick'], login: 'disable', emoji: false, imageUploader: false, search: false, reaction: false, pageview: false, copyright: false,
    locale: { nick: 'الاسم', mail: 'البريد (لا يُنشر)', placeholder: 'اكتب تعليقك هنا…', sofa: 'لا تعليقات بعد. كن أول من يعلّق.', submit: 'أرسل التعليق', reply: 'رد', cancelReply: 'إلغاء الرد', comment: 'تعليقا', refresh: 'تحديث', more: 'المزيد', preview: 'معاينة', seconds: 'ثانية', minutes: 'دقيقة', hours: 'ساعة', days: 'يوم', now: 'الآن', anonymous: 'زائر', nickError: 'اكتب اسمك (حرفان على الأقل)', mailError: 'اكتب بريدا صحيحا', waiting: 'بانتظار المراجعة', approved: 'منشور', oldest: 'الأقدم', latest: 'الأحدث', hottest: 'الأكثر تفاعلا', word: 'كلمة', wordHint: 'التعليق بين $0 و$1 كلمة. الآن: $2' }
  });
  return true;
};
