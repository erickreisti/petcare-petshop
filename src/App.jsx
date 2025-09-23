// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="font-work overflow-x-hidden">
      <section
        id="home"
        className="h-screen w-screen bg-cover bg-no-repeat flex flex-col"
        style={{
          backgroundImage: "url(/img/bg-circles.svg)",
          backgroundColor: "#FAF7F2",
        }}
      >
        <nav className="flex flex-wrap justify-between items-center p-6 z-10 flex-shrink-0">
          <h1 className="text-[#FC7C4B] text-3xl md:text-4xl font-bold font-ubuntu uppercase tracking-tight">
            Petcare
          </h1>

          <ul className="hidden lg:flex space-x-2">
            <li>
              <a
                href="#home"
                className="text-[#8E8E8E] hover:text-[#FD6E4C] font-medium text-base md:text-lg px-4 py-2 rounded-lg transition-all duration-300 relative"
              >
                Home
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#FD6E4C] transition-all duration-300 rounded-full group-hover:left-2 group-hover:w-3/4"></span>
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-[#8E8E8E] hover:text-[#FD6E4C] font-medium text-base md:text-lg px-4 py-2 rounded-lg transition-all duration-300 relative"
              >
                Serviços
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#FD6E4C] transition-all duration-300 rounded-full group-hover:left-2 group-hover:w-3/4"></span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#8E8E8E] hover:text-[#FD6E4C] font-medium text-base md:text-lg px-4 py-2 rounded-lg transition-all duration-300 relative"
              >
                Quem Somos
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#FD6E4C] transition-all duration-300 rounded-full group-hover:left-2 group-hover:w-3/4"></span>
              </a>
            </li>
            <li>
              <a
                href="#prices"
                className="text-[#8E8E8E] hover:text-[#FD6E4C] font-medium text-base md:text-lg px-4 py-2 rounded-lg transition-all duration-300 relative"
              >
                Planos
                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#FD6E4C] transition-all duration-300 rounded-full group-hover:left-2 group-hover:w-3/4"></span>
              </a>
            </li>
          </ul>

          <button className="hidden lg:block bg-[#FD6E4C] hover:bg-[#FC7C4B] text-white font-bold text-base md:text-lg py-2.5 px-7 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 border border-[#FD6E4C] hover:border-[#FC7C4B]">
            <a href="#contact">Contato</a>
          </button>

          <button className="lg:hidden text-[#FC7C4B] focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </nav>

        <div className="flex-grow flex flex-col px-6 py-10 relative">
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex flex-col lg:flex-row items-center justify-around w-full max-w-7xl mx-auto">
              <div className="text-center lg:text-left mb-10 lg:mb-0 lg:mr-10">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  Cuide e Ame Seu <br />
                  Pet Com Nosso <br />
                  Melhor Servico
                </h1>
                <p className="text-base md:text-lg font-light my-6 max-w-2xl">
                  Venha, traga todos os seus pets para nos verificarmos e
                  deixarmos suas vidas mais saudaveis com nosso servico de
                  grooming. Mal posso esperar para ver seu pet!
                </p>
                <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
                  <button className="px-8 py-4 bg-[#FC7C4B] hover:bg-[#FD6E4C] text-white font-extrabold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-full sm:w-auto border-2 border-[#FC7C4B] hover:border-[#FD6E4C]">
                    Comecar
                  </button>

                  <button className="px-8 py-4 bg-white hover:bg-gray-50 text-[#FC7C4B] hover:text-[#FD6E4C] font-bold text-lg rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 ease-in-out w-full sm:w-auto border-2 border-white hover:border-gray-200">
                    Saiba Mais
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  className="max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
                  src="/img/dog.png"
                  alt="Cachorro Feliz"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer">
            <a href="#services" aria-label="Rolar para Servicos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 animate-bounce text-[#FC7C4B]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              Nossos Servicos
            </h2>
            <p className="text-base md:text-lg font-light max-w-3xl text-gray-600">
              Aqui estao varios servicos que voce pode escolher para as
              necessidades do seu pet para que seu pet seja saudavel e feliz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Tosa e Banho
              </h3>
              <p className="text-gray-600">
                Servicos profissionais de tosa e banho para manter seu pet com
                boa aparencia e se sentindo bem.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Cuidados Veterinarios
              </h3>
              <p className="text-gray-600">
                Consultas veterinarias abrangentes e tratamentos para seus
                amigos peludos.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Creche Pet
              </h3>
              <p className="text-gray-600">
                Um ambiente divertido e seguro para seu pet enquanto voce esta
                fora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Sobre Nos
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Somos apaixonados por oferecer o melhor cuidado para seus animais de
            estimacao. Nossa equipe de profissionais experientes esta dedicada a
            garantir a saude, felicidade e bem-estar do seu pet.
          </p>
        </div>
      </section>

      <section id="prices" className="min-h-screen py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Nossos Precos
          </h2>
          <div className="text-center text-gray-600">
            <p>As informacoes de precos serao exibidas aqui.</p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen py-20 px-6 text-white"
        style={{ backgroundColor: "#FC7C4B" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl mb-8">Tem duvidas? Contate-nos hoje!</p>
          <button className="py-3 px-8 bg-white text-[#FC7C4B] font-bold text-lg rounded hover:bg-gray-100 transition duration-300">
            Contato
          </button>
        </div>
      </section>

      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p>
          &copy; {new Date().getFullYear()} Petcare. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
