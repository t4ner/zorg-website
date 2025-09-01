export default function Stats() {
  const stats = [
    { number: "500+", label: "Tevreden Klanten", icon: "😊" },
    { number: "15+", label: "Jaren Ervaring", icon: "⭐" },
    { number: "24/7", label: "Beschikbaarheid", icon: "🕐" },
    { number: "50+", label: "Zorgverleners", icon: "👩‍⚕️" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-2xl mb-2 text-blue-100 group-hover:text-white transition-colors">
                {stat.label}
              </div>
              <div className="text-4xl opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
