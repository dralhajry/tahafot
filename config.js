// إعدادات الموقع: هذا هو الملف الوحيد الذي تحتاج إلى تعديله.
window.SITE = {
  youtubeChannelId: "UCv8FKbYKm8WvZjFiXKVZmvQ",
  youtubeUrl: "https://www.youtube.com/@Tahafut-books",
  xUrl: "https://x.com/evo10111",
  xHandle: "@evo10111",
  email: "tahafut.books@gmail.com",

  // إحصاءات الزيارات (GoatCounter): اسم الحساب الذي اخترته عند التسجيل، مثل "tahafut".
  // لوحة الإحصاءات خاصة بك وحدك على https://<الاسم>.goatcounter.com
  goatcounter: "",

  // التعليقات (Waline): عنوان خادم التعليقات على Vercel، مثل "https://tahafot-comments.vercel.app".
  // ما دام فارغا يظهر للزائر رابط مراسلة بدل صندوق التعليقات.
  walineServer: "https://tahafot-comments.vercel.app",

  // روابط فيديو كل فصل: رقم الفصل ثم الرابط. الفصل الذي ليس له رابط ينقل إلى القناة.
  // مثال: "29": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  chapterVideos: {
  },

  // ملفات الكتاب
  downloads: {
    full_a4:      { file: "tahafut-full-a4.pdf",      name: "تهافت البصائر - النسخة الكاملة.pdf",       pages: 1157, mb: 5.7 },
    summary_a4:   { file: "tahafut-summary-a4.pdf",   name: "تهافت البصائر - النسخة الملخصة.pdf",       pages: 714,  mb: 3.0 },
    full_mobile:  { file: "tahafut-full-mobile.pdf",  name: "تهافت البصائر - نسخة الجوال الكاملة.pdf",  pages: 2500, mb: 6.7 },
    summary_mobile:{ file: "tahafut-summary-mobile.pdf", name: "تهافت البصائر - نسخة الجوال الملخصة.pdf", pages: 1507, mb: 3.6 }
  }
};
