# موقع «تهافت البصائر»

## الرفع إلى GitHub
ارفع كل ملفات هذا المجلد إلى جذر المستودع dralhajry/tahafot (Add file ← Upload files)، فوق الملفات القديمة.
ثم أنشئ ملف سير العمل يدويا إن لم يرفعه المتصفح: Add file ← Create new file، واكتب الاسم:
.github/workflows/update-videos.yml
والصق فيه محتوى الملف الذي بالاسم نفسه في المجلد.
احذف من المستودع الملفات القديمة التي لم تعد مستعملة: tahafut-albasair.pdf وchapters.json وtahafut-word.svg والمجلد scripts.

## التعليقات (مرة واحدة)
1. أنشئ حسابا مجانيا في cusdis.com وأضف موقعا باسم tahafot.com.
2. انسخ App ID وضعه في config.js مكان cusdisAppId.
3. تصلك كل تعليق على بريدك لتوافق عليه قبل نشره.

## نموذج التواصل (مرة واحدة)
أول رسالة تُرسل من الموقع يصل بسببها بريد تفعيل من FormSubmit إلى tahafot.books@gmail.com. اضغط زر التفعيل فيه، وبعدها تصلك كل الرسائل.

## روابط فيديو الفصول
في config.js، داخل chapterVideos، أضف سطرا لكل فصل:
"29": "https://www.youtube.com/watch?v=XXXXXXXXXXX",
