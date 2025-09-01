export default function Testimonials() {
  const testimonials = [
    {
      name: "Mevrouw Jansen",
      location: "Amsterdam",
      rating: 5,
      text: "De zorgverleners van Zorg van de Zussun zijn geweldig. Ze zorgen met veel liefde en aandacht voor mijn moeder. Ze zijn altijd punctueel en professioneel.",
      avatar: "M",
    },
    {
      name: "Hr. Bakker",
      location: "Rotterdam",
      rating: 5,
      text: "Professionele en betrouwbare service. Ik voel me veilig en goed verzorgd in mijn eigen huis. Ze passen zich aan aan mijn behoeften.",
      avatar: "H",
    },
    {
      name: "Mevr. Visser",
      location: "Den Haag",
      rating: 5,
      text: "Uitstekende communicatie en flexibele dienstverlening. Ze passen zich aan aan mijn behoeften en zijn altijd bereikbaar voor vragen.",
      avatar: "A",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat Onze Klanten Zeggen
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Echte verhalen van tevreden klanten en hun ervaringen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 card-modern"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex text-yellow-400 text-xl">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
