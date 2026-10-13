# موقع «تهافت البصائر»

## الرفع إلى GitHub
ارفع كل ملفات هذا المجلد إلى جذر المستودع dralhajry/tahafot (Add file ← Upload files)، فوق الملفات القديمة.
ثم أنشئ ملف سير العمل يدويا إن لم يرفعه المتصفح: Add file ← Create new file، واكتب الاسم:
.github/workflows/update-videos.yml
والصق فيه محتوى الملف الذي بالاسم نفسه في المجلد.
احذف من المستودع الملفات القديمة التي لم تعد مستعملة: tahafut-albasair.pdf وchapters.json وtahafut-word.svg والمجلد scripts.

## التعليقات (Waline، مرة واحدة)
1. ادخل vercel.com بحساب GitHub، وانشر قالب Waline من زر Deploy في waline.js.org.
2. من Storage أنشئ قاعدة Neon، وشغّل فيها ملف waline.pgsql، ثم أعد النشر (Redeploy).
3. ضع رابط المشروع في config.js مكان walineServer.
4. ادخل <الرابط>/ui/register وسجل، فأول مسجل هو المدير الذي يراجع التعليقات.

## نموذج التواصل (مرة واحدة)
أول رسالة تُرسل من الموقع يصل بسببها بريد تفعيل من FormSubmit إلى tahafut.books@gmail.com. اضغط زر التفعيل فيه، وبعدها تصلك كل الرسائل.

## روابط فيديو الفصول
في config.js، داخل chapterVideos، أضف سطرا لكل فصل:
"29": "https://www.youtube.com/watch?v=XXXXXXXXXXX",

## إحصاءات الزيارات (مرة واحدة)
1. سجّل حسابا مجانيا في goatcounter.com، واختر اسما للحساب مثل tahafut.
2. ضع الاسم في config.js مكان goatcounter.
3. تجد الإحصاءات في https://<الاسم>.goatcounter.com، ولا يراها غيرك: الزيارات لكل صفحة، وقراءة كل فصل، وتنزيلات كل نسخة من الكتاب.
