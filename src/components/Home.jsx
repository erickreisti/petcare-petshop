export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FAF7F2] via-white to-[#FFF5E6]"
    >
      {/* Bolhas Decorativas Animadas */}
      <div className="absolute inset-0">
        {/* Bolha grande laranja */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FC7C4B]/10 rounded-full blur-3xl animate-float"></div>
        {/* Bolha média amarela */}
        <div
          className="absolute bottom-1/3 -right-16 w-64 h-64 bg-yellow-400/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Bolhas pequenas */}
        <div
          className="absolute top-20 right-1/4 w-32 h-32 bg-[#FD6E4C]/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-orange-300/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Grid sutil de fundo */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <span className="inline-block bg-white/80 backdrop-blur-sm text-[#FC7C4B] px-6 py-3 rounded-2xl text-sm font-semibold mb-6 shadow-lg border border-white/20">
                🐾 Centro Veterinário de Excelência
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-800">
                Cuidado que
                <span className="text-[#FC7C4B] relative inline-block mx-2">
                  Transforma
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                  >
                    <path
                      d="M0,6 Q100,0 200,6"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Vidas
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Oferecemos cuidados veterinários completos, estética animal
              premium e hospedagem com o carinho que seu companheiro merece.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative bg-[#FC7C4B] hover:bg-[#FD6E4C] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Agendar Consulta
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>

              <button className="group bg-white/80 backdrop-blur-sm hover:bg-white border-2 border-white text-gray-800 hover:text-[#FC7C4B] font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Ver Nossos Serviços
                </span>
              </button>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/30">
              {[
                { number: "2K+", label: "Pets Felizes" },
                { number: "98%", label: "Satisfação" },
                { number: "24/7", label: "Atendimento" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#FC7C4B]">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem do Pet */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/img/dog.png"
                alt="Cachorro Feliz - Petcare"
                className="w-full max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Elementos Decorativos ao redor da imagem */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FC7C4B]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FC7C4B]/10 rounded-full blur-3xl"></div>

            {/* Card flutuante*/}
            <div className="absolute z-10 -bottom-4 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">Excelente</div>
                  <div className="text-sm text-gray-600">
                    4.9/5 - 500+ reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#services" aria-label="Rolar para a próxima seção">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-600 text-sm font-medium">
              Descobrir mais
            </span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
