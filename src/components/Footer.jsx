// Componente Footer
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Nossos Serviços",
      links: [
        { name: "Banho & Tosa", href: "#services" },
        { name: "Consultas Veterinárias", href: "#services" },
        { name: "Vacinação", href: "#services" },
        { name: "Creche Pet", href: "#services" },
        { name: "Hotel Pet", href: "#services" },
        { name: "Emergências 24h", href: "#services" },
      ],
    },
    {
      title: "Sobre Nós",
      links: [
        { name: "Nossa História", href: "#about" },
        { name: "Equipe", href: "#about" },
        { name: "Instalações", href: "#about" },
        { name: "Trabalhe Conosco", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Imprensa", href: "#press" },
      ],
    },
    {
      title: "Planos",
      links: [
        { name: "Plano Básico", href: "#prices" },
        { name: "Plano Completo", href: "#prices" },
        { name: "Plano Premium", href: "#prices" },
        { name: "Planos Corporativos", href: "#prices" },
        { name: "Seguro Pet", href: "#insurance" },
      ],
    },
    {
      title: "Contato",
      links: [
        { name: "Rua dos Animais, 123", href: "#", icon: "📍" },
        { name: "(11) 9999-9999", href: "tel:+551199999999", icon: "📞" },
        {
          name: "contato@petcare.com",
          href: "mailto:contato@petcare.com",
          icon: "📧",
        },
        { name: "24h por dia", href: "#", icon: "🕒" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "https://instagram.com/petcare" },
    { name: "Facebook", icon: "👥", href: "https://facebook.com/petcare" },
    { name: "WhatsApp", icon: "💬", href: "https://wa.me/5511999999999" },
    { name: "YouTube", icon: "🎥", href: "https://youtube.com/petcare" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FC7C4B] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🐾</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-ubuntu">Petcare</h3>
                <p className="text-gray-400 text-sm">
                  Centro Veterinário Integral
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Cuidamos do seu pet com amor e profissionalismo há mais de 10
              anos. Oferecemos serviços veterinários completos, estética animal
              e hospedagem com todo o carinho que seu companheiro merece.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-gray-800 hover:bg-[#FC7C4B] rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-6 text-white relative">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FC7C4B] rounded-full"></span>
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FC7C4B] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {link.icon && <span>{link.icon}</span>}
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">📬 Fique por Dentro</h4>
              <p className="text-gray-400">
                Receba dicas de cuidado pet, promoções exclusivas e novidades em
                primeira mão.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#FC7C4B] transition-colors duration-300"
              />
              <button className="bg-[#FC7C4B] hover:bg-[#FD6E4C] text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                Assinar Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>
                &copy; {currentYear} Petcare Centro Veterinário. Todos os
                direitos reservados.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a
                href="/privacy"
                className="hover:text-[#FC7C4B] transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a
                href="/terms"
                className="hover:text-[#FC7C4B] transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a
                href="/cookies"
                className="hover:text-[#FC7C4B] transition-colors duration-300"
              >
                Política de Cookies
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <span>Feito com</span>
              <span className="text-red-500">❤️</span>
              <span>para pets</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Fixed Button */}
        <a
          href="https://wa.me/5511999999999"
          className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl z-40 transform hover:scale-110 transition-all duration-300 group"
          aria-label="Fale conosco no WhatsApp"
        >
          <span className="text-2xl">💬</span>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-ping"></div>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
