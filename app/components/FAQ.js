export default function FAQ() {
  const faqs = [
    {
      question: "Hoe snel kan ik beginnen met de zorg?",
      answer:
        "Wij kunnen meestal binnen 24-48 uur starten met de zorg. Dit hangt af van uw specifieke behoeften en de beschikbaarheid van onze zorgverleners.",
    },
    {
      question: "Wat zijn de kosten van thuiszorg?",
      answer:
        "De kosten variëren afhankelijk van het gekozen pakket en de benodigde zorg. Wij bieden transparante prijzen vanaf €25 per uur. Neem contact op voor een persoonlijke offerte.",
    },
    {
      question: "Zijn jullie 24/7 beschikbaar?",
      answer:
        "Ja, wij zijn 24/7 beschikbaar voor spoedgevallen. Voor reguliere zorg plannen wij afspraken in die het beste bij uw schema passen.",
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer:
        "Uw tevredenheid staat voorop. Als u niet tevreden bent, bespreken wij dit direct en maken wij het samen goed. Wij streven naar 100% klanttevredenheid.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Veelgestelde Vragen
          </h3>
          <p className="text-xl text-gray-600">
            Antwoorden op de meest voorkomende vragen over onze diensten
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-modern"
            >
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                {faq.question}
              </h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
