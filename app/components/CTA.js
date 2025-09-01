export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold mb-8">
          Klaar om te Beginnen?
        </h3>
        <p className="text-2xl mb-12 text-blue-100 leading-relaxed">
          Neem vandaag nog contact op voor een gratis consultatie en ontdek hoe
          wij u kunnen helpen met professionele thuiszorg.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 btn-modern">
            Start Nu
          </button>
          <button className="border-2 border-white text-white px-12 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:-translate-y-1 btn-modern">
            Meer Informatie
          </button>
        </div>
      </div>
    </section>
  );
}
