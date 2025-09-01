export default function Services() {
  const services = [
    {
      icon: "🏥",
      title: "Thuiszorg",
      description:
        "Persoonlijke verzorging en ondersteuning in uw eigen vertrouwde omgeving.",
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
      textColor: "text-blue-600",
      hoverTextColor: "hover:text-purple-600",
    },
    {
      icon: "💊",
      title: "Medicatiebeheer",
      description:
        "Professionele begeleiding bij het innemen van medicijnen en behandeling.",
      color: "from-green-500 to-blue-600",
      bgColor: "from-green-50 to-blue-50",
      textColor: "text-green-600",
      hoverTextColor: "hover:text-blue-600",
    },
    {
      icon: "👴",
      title: "Ouderenzorg",
      description:
        "Speciale aandacht en zorg voor senioren met respect voor hun autonomie.",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      textColor: "text-purple-600",
      hoverTextColor: "hover:text-pink-600",
    },
    {
      icon: "🩹",
      title: "Wondverzorging",
      description:
        "Professionele wondverzorging en behandeling door ervaren verpleegkundigen.",
      color: "from-red-500 to-orange-600",
      bgColor: "from-red-50 to-orange-50",
      textColor: "text-red-600",
      hoverTextColor: "hover:text-orange-600",
    },
    {
      icon: "🧠",
      title: "Dementiezorg",
      description:
        "Gespecialiseerde zorg voor mensen met dementie en hun mantelzorgers.",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      textColor: "text-indigo-600",
      hoverTextColor: "hover:text-blue-600",
    },
    {
      icon: "🏠",
      title: "Huisvesting",
      description:
        "Ondersteuning bij het vinden van geschikte woonvormen en aanpassingen.",
      color: "from-teal-500 to-green-600",
      bgColor: "from-teal-50 to-green-50",
      textColor: "text-teal-600",
      hoverTextColor: "hover:text-green-600",
    },
  ];

  return (
    <section id="diensten" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Uitgebreide Zorgdiensten
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van persoonlijke verzorging tot specialistische zorg, wij bieden een
            complete range aan diensten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-3xl p-8 hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-gray-100 hover:border-transparent card-modern"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`w-24 h-24 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                >
                  <span className="text-white text-4xl">{service.icon}</span>
                </div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    className={`${service.textColor} font-semibold ${service.hoverTextColor} transition-colors text-lg flex items-center group-hover:gap-2`}
                  >
                    Meer Details
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
