export default function About() {
  const features = [
    { icon: "✓", text: "Gecertificeerd", color: "from-blue-50 to-purple-50" },
    { icon: "✓", text: "24/7 Beschikbaar", color: "from-green-50 to-blue-50" },
    {
      icon: "✓",
      text: "Persoonlijke Aanpak",
      color: "from-purple-50 to-pink-50",
    },
    {
      icon: "✓",
      text: "Transparante Prijzen",
      color: "from-indigo-50 to-blue-50",
    },
  ];

  const whyChooseUs = [
    "Persoonlijke aanpak op maat",
    "Ervaren en gekwalificeerd personeel",
    "Flexibele dienstverlening",
    "Transparante prijzen",
    "Moderne zorgtechnologie",
    "Continue bijscholing team",
  ];

  return (
    <section id="over-ons" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Over Zorg van de Zussun
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Al meer dan 15 jaar zijn wij actief in de thuiszorg sector. Onze
              missie is om hoogwaardige, persoonlijke zorg te bieden die past
              bij uw individuele behoeften en levensstijl.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ons team bestaat uit gekwalificeerde verpleegkundigen,
              verzorgenden en ondersteuners die met hart en ziel voor u zorgen.
              Wij geloven in de kracht van persoonlijke aandacht en
              professionele expertise.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center p-4 bg-gradient-to-r ${item.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                >
                  <span className="text-green-500 text-2xl mr-3">
                    {item.icon}
                  </span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white transform hover:scale-105 transition-transform duration-500 shadow-2xl">
              <h4 className="text-3xl font-bold mb-8">
                Waarom Kiezen voor Ons?
              </h4>
              <ul className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center group">
                    <span className="mr-4 text-blue-200 group-hover:text-white transition-colors text-xl">
                      •
                    </span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
