export default function ContactSection() {
  return (
    <div className="bg-white h-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary font-arabic">
        اتصل بنا
      </h2>
      <div className="flex gap-8 p-4 max-w-7xl mx-auto">
        <form className="flex-1 mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-right">
              الاسم
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-right">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 text-right">
              الرسالة
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-2 rounded-md hover:bg-secondary-dark hover:bg-accent cursor-pointer">
            إرسال
          </button>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109227.63933269233!2d30.02853279411261!3d31.182926731224086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5374e029187%3A0x93ca382dd99ee247!2z2Kgg2YTYqNmGINmF2K3Yt9mHINin2YTYsdmF2YQ!5e0!3m2!1sar!2seg!4v1752961777421!5m2!1sar!2seg"
          width="400"
          height="400"
          style={{ border: 0, borderRadius: "15px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="flex-1"></iframe>
      </div>
    </div>
  );
}
