export default function Footer() {
  const socialLinks = [
    { icon: "📘", label: "Facebook" },
    { icon: "📷", label: "Instagram" },
    { icon: "🐦", label: "Twitter" },
  ];

  const services = [
    "Thuiszorg",
    "Medicatiebeheer",
    "Ouderenzorg",
    "Wondverzorging",
    "Dementiezorg",
    "Huisvesting",
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Zorg van de Zussun
            </h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professionele thuiszorg en ondersteuning voor u en uw dierbaren.
              Wij zetten ons in voor uw welzijn en comfort.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <span
                  key={index}
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer group"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.label}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Diensten</h4>
            <ul className="space-y-3 text-gray-400">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white transition-colors cursor-pointer group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                +31 (0)20 123 4567
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                info@zorgvandezussun.nl
              </li>
              <li className="flex items-center">
                <span className="mr-2">📍</span>
                Amsterdam, Nederland
              </li>
              <li className="flex items-center">
                <span className="mr-2">🕐</span>
                24/7 Beschikbaar
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Nieuwsbrief</h4>
            <p className="text-gray-400 mb-4">
              Blijf op de hoogte van onze laatste nieuwtjes en tips
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Uw e-mail"
                className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zorg van de Zussun. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
