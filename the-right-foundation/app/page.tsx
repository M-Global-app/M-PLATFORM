export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100" dir="rtl">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-600">🏗️ البناءة الذهبية</h1>
          <nav className="space-x-4 space-x-reverse">
            <a href="/" className="text-gray-700 hover:text-amber-600">الرئيسية</a>
            <a href="/login" className="text-gray-700 hover:text-amber-600">تسجيل الدخول</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          منصة البناءة الذهبية
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          منصتك الشاملة للتعليم والتطوير، ابدأ رحلتك نحو النجاح معنا
        </p>
        
        <div className="space-x-4 space-x-reverse">
          <a 
            href="/login" 
            className="inline-block px-8 py-4 bg-amber-600 text-white rounded-full text-lg hover:bg-amber-700 transition"
          >
            ابدأ الآن
          </a>
          <a 
            href="#" 
            className="inline-block px-8 py-4 bg-white text-amber-600 border-2 border-amber-600 rounded-full text-lg hover:bg-amber-50 transition"
          >
            تعرف علينا
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-600">محتوى تعليمي</h3>
            <p className="text-gray-600">دروس وموارد عالية الجودة</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-600">تتبع التقدم</h3>
            <p className="text-gray-600">راقب تقدمك خطوة بخطوة</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-amber-600">مجتمع نشط</h3>
            <p className="text-gray-600">تواصل مع المتعلمين الآخرين</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <p>© 2025 البناءة الذهبية - جميع الحقوق محفوظة</p>
        </div>
      </footer>
    </div>
  )
}