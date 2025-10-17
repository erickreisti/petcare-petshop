export default function Prices() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 89",
      period: "/mês",
      description: "Para cuidados essenciais",
      features: [
        "Banho e tosa",
        "Consulta básica",
        "Vacina anual",
        "Suporte por email",
      ],
      popular: false,
    },
    {
      name: "Completo",
      price: "R$ 149",
      period: "/mês",
      description: "Mais popular - Cuidado integral",
      features: [
        "Todos os serviços básicos",
        "Consultas ilimitadas",
        "Creche 2x na semana",
        "Emergências 24h",
        "Desconto em produtos",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "R$ 229",
      period: "/mês",
      description: "Cuidado máximo para seu pet",
      features: [
        "Todos os serviços completos",
        "Hotel pet 5 dias/mês",
        "Transporte",
        "Nutricionista",
        "Treinador personalizado",
      ],
      popular: false,
    },
  ];

  return (
    <section id="prices" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Planos & <span className="text-[#FC7C4B]">Preços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para as necessidades do seu pet. Todos incluem
            cuidados básicos essenciais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-white border-2 border-[#FC7C4B] shadow-2xl scale-105"
                  : "bg-white border border-gray-200 shadow-lg"
              } transition-all duration-300 hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#FC7C4B] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#FC7C4B] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#FC7C4B] hover:bg-[#FD6E4C] text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300"
                }`}
              >
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
