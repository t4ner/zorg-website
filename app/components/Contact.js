export default function Contact() {
  const contactMethods = [
    {
      icon: "📞",
      title: "Telefoon",
      info: "+31 (0)20 123 4567",
      description: "24/7 bereikbaar",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: "✉️",
      title: "E-mail",
      info: "info@zorgvandezussun.nl",
      description: "Binnen 2 uur antwoord",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
    },
    {
      icon: "📍",
      title: "Adres",
      info: "Amsterdam, Nederland",
      description: "Regio Amsterdam",
      color: "from-green-500 to-teal-600",
      bgColor: "from-green-50 to-teal-50",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Neem Contact Op
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met
            ons op. Wij zijn er om u te helpen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((contact, index) => (
            <div
              key={index}
              className={`group p-8 bg-gradient-to-br ${contact.bgColor} rounded-3xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <span className="text-white text-3xl">{contact.icon}</span>
              </div>
              <h4 className="font-semibold mb-3 text-gray-900 text-xl text-center">
                {contact.title}
              </h4>
              <p className="text-gray-700 font-medium text-lg text-center mb-2">
                {contact.info}
              </p>
              <p className="text-gray-500 text-center">{contact.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-16 py-5 rounded-full text-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1 btn-modern">
            <span className="relative z-10">Stuur een Bericht</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
