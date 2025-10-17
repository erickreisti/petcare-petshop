export default function About() {
  const timelineItems = [
    {
      step: "01",
      title: "Consulta Inicial",
      description: "Avaliação completa do seu pet",
    },
    {
      step: "02",
      title: "Plano Personalizado",
      description: "Cuidados específicos para suas necessidades",
    },
    {
      step: "03",
      title: "Execução Profissional",
      description: "Serviços realizados por especialistas",
    },
    {
      step: "04",
      title: "Acompanhamento",
      description: "Monitoramento contínuo da saúde",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div>
              <span className="text-[#FC7C4B] font-semibold uppercase tracking-wider text-sm">
                Sobre Nós
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-6">
                Paixão por <span className="text-[#FC7C4B]">Pets</span> desde
                2010
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Há mais de uma década dedicamos nosso trabalho ao cuidado e
              bem-estar dos animais. Nossa missão é proporcionar uma experiência
              excepcional para pets e seus tutores.
            </p>

            {/* Timeline/Processo */}
            <div className="space-y-6">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#FC7C4B] text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-12 bg-gray-200 mt-2 group-hover:bg-[#FC7C4B] transition-colors duration-300"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl"></div>
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl"></div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl"></div>
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
