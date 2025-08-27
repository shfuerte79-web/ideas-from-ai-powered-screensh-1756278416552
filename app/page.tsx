export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: AI-Powered Screenshot to Text
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
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
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}