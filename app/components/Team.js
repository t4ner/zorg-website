export default function Team() {
  const teamMembers = [
    {
      name: "Dr. Sarah van der Berg",
      role: "Hoofd Verpleegkundige",
      experience: "12 jaar ervaring",
      specialty: "Intensive Care",
      image: "👩‍⚕️",
    },
    {
      name: "Mark de Vries",
      role: "Senior Verzorgende",
      experience: "8 jaar ervaring",
      specialty: "Ouderenzorg",
      image: "👨‍⚕️",
    },
    {
      name: "Lisa Bakker",
      role: "Specialist Dementie",
      experience: "10 jaar ervaring",
      specialty: "Dementiezorg",
      image: "👩‍⚕️",
    },
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ons Ervaren Team
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maak kennis met onze gekwalificeerde en betrokken zorgverleners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 card-modern"
            >
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-6xl text-white group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h4 className="text-2xl font-semibold mb-2 text-gray-900">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 mb-3">{member.experience}</p>
                <p className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full inline-block">
                  {member.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
