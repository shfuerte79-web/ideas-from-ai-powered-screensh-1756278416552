import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '```json
[
  {
    "title": "محرر النصوص الذكي",
    "description": "أداة تستخدم الذكاء الاصطناعي لتحويل لقطات الشاشة إلى نصوص قابلة للتحرير، مع إمكانية تصحيح الأخطاء النحوية والإملائية.",
    "mvp_plan": "استخدام مكتبة OCR لتحويل الصور إلى نصوص، ثم دمج نموذج معالجة اللغة الطبيعية (NLP) لتصحيح الأخطاء. إنشاء واجهة مستخدم بسيطة لتجربة المستخدم."
  },
  {
    "title": "مستخرج المعلومات الذكي",
    "description": "أداة تقوم بتحليل لقطات الشاشة واستخراج المعلومات المهمة مثل الأرقام، التواريخ، والأسماء، وتنظيمها في جدول.",
    "mvp_plan": "تطوير نموذج OCR لاستخراج النصوص، ثم استخدام خوارزميات تحليل البيانات لتحديد المعلومات المهمة. إنشاء واجهة تعرض المعلومات المستخرجة بشكل منظم."
  },
  {
    "title": "مترجم النصوص من الصور",
    "description": "أداة تتيح للمستخدمين تحميل لقطات شاشة تحتوي على نصوص بلغات مختلفة وتحويلها إلى نص مترجم.",
    "mvp_plan": "دمج مكتبة OCR مع واجهة برمجة التطبيقات لترجمة النصوص، ثم إنشاء واجهة مستخدم لتحميل الصور وعرض النص المترجم."
  }
]
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}