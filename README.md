# Hemah Tech — تطبيق إدارة الفواتير

تطبيق React (Vite + Tailwind CSS) لإدارة فواتير همة تك، متصل بقاعدة بيانات Supabase.

## التشغيل محليًا

```bash
npm install
npm run dev
```

## البناء للنشر

```bash
npm run build
```

سينتج مجلد `dist` يحتوي على الموقع الجاهز للنشر.

## النشر السريع (Vercel)

1. اربط حسابك على [vercel.com](https://vercel.com) بحساب GitHub.
2. اختر "Import Project" وحدد هذا المستودع.
3. سيكتشف Vercel إعدادات Vite تلقائيًا (Build Command: `npm run build`, Output: `dist`).
4. اضغط Deploy — سيصلك رابط مباشر للتطبيق يعمل فعليًا.
