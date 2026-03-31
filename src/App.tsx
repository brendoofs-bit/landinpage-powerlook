import { useEffect, useCallback, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { MapPin, MessageCircle, Recycle, RefreshCw, Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import { cn } from './lib/utils';

const WHATSAPP_NUMBER = "5521991233015";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const CATEGORIES = [
  { name: "MADRINHA", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088647/tres-jovens-mulheres-vestidos-vermelho_zpmfuh.webp" },
  { name: "FORMATURA", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088648/mulher-jovem-vestido-vermelho-joias-elegante_wy3lw2.webp" },
  { name: "CASAMENTO", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088648/mulher-vestido-azul-jardim-bem-cuidado_q8z9oz.webp" },
  { name: "MÃE DE NOIVOS", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088648/mulher-de-cabelos-grisalhos-vestido-verde-ao-ar-livre_sglrgn.webp" },
  { name: "CASUAL", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088648/mulher-vestido-azul-decoracao-natalina_dt13e8.webp" },
  { name: "TEEN", image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773088648/jovens-mulheres-divertindo-comemoracao-png_j6xqqg.webp" }
];

const SHOWCASE_IMAGES = [
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308423/madrinha_35_y7ogdz.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308424/madrinha_01_cwp2au.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308424/madrinha_02_w6tycg.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308407/madrinha_03_it5wir.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_10_qldlu7.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308407/madrinha_07_xmfu2r.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308407/madrinha_06_llnryw.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_11_cd48mm.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_17_xli2hb.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_12_crhod0.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308407/madrinha_04_x7j3ol.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_15_afqp2k.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_08_d91o0y.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308407/madrinha_05_pihikq.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_09_fkyaor.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_19_qaojzc.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_16_szpydu.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_14_dumqal.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308406/madrinha_13_rsf9kg.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_29_gfhuyc.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_18_lyls8t.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308404/madrinha_28_ah8uxv.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_21_lxx5xm.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308404/madrinha_32_vyqceo.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308404/madrinha_22_dz0y4h.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308404/madrinha_24_umhhwz.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308405/madrinha_20_gal9cs.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308403/madrinha_37_evdovl.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308403/madrinha_31_o78g0f.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308403/madrinha_33_fif4xd.png",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308403/madrinha_34_yljuki.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308403/madrinha_25_umjzyi.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1774308402/madrinha_27_vrngnj.webp"
];

const UNITS = [
  {
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773087741/loja-fashion-roupas-acessorios-powerlook_g9kxcu.webp",
    name: "RJ - Loja Ipanema",
    address: "Top Center - R. Visc. de Pirajá, 550 - Loja 111 - Ipanema, Rio de Janeiro - RJ.",
    maps: "https://maps.app.goo.gl/YUZvXJ8MY8K2U5UM8",
    whatsapp: "5521966775459",
    whatsappDisplay: "(21) 96677-5459"
  },
  {
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773087741/powerlook-loja-beleza-fachada-cidade_odexuw.webp",
    name: "RJ - Loja Tijuca",
    address: "R. Guapeni, 34 - Tijuca, Rio de Janeiro - RJ.",
    maps: "https://maps.app.goo.gl/jWiJtMv9w6JmLEuv7",
    whatsapp: "5521974500814",
    whatsappDisplay: "(21) 97450-0814"
  },
  {
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773087740/loja-soland-sabor-fachada_fadhmf.webp",
    name: "RJ - Loja Barra da Tijuca - Città América",
    address: "Città América - Av. das Américas, 700 - Lojas 213 - D, E e F - Barra da Tijuca, Rio de Janeiro - RJ.",
    maps: "https://maps.app.goo.gl/jjJaKr2UExavio588",
    whatsapp: "5521970950644",
    whatsappDisplay: "(21) 97095-0644"
  },
  {
    image: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1773087740/vestidos-loja-roupas-shopping-centro-jpg_shmhbd.webp",
    name: "RJ - Loja Freguesia",
    address: "Estr. dos Três Rios, 1200 - bl 1 loja N - Freguesia de Jacarepaguá, Rio de Janeiro - RJ.",
    maps: "https://maps.app.goo.gl/Ahr1zWjJvPZXFdDZ6",
    whatsapp: "5521999782212",
    whatsappDisplay: "(21) 99978-2212"
  }
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "ENCONTRE SEU VESTIDO",
    description: "Navegue pelo site e encontre o seu vestido ideal ou visite alguma de nossas lojas. Escolhido o vestido, é importante OBSERVAR A DESCRIÇÃO E AS MEDIDAS do vestido, para ter certeza que ele servirá perfeitamente."
  },
  {
    step: "2",
    title: "MARQUE A DATA",
    description: "Sugerimos você marcar para receber o seu vestido até 2 dias antes da data do seu evento para ter certeza que ele chegará a tempo."
  },
  {
    step: "3",
    title: "AJUSTES E BAINHA",
    description: "Fazemos apenas ajustes na alça e na bainha do vestido, não ajustamos o vestido no corpo, por isso, é importante verificar as medidas no WhatsApp ou em nossas lojas."
  },
  {
    step: "4",
    title: "O VESTIDO CHEGA ATÉ VOCÊ",
    description: "Para sua comodidade e segurança, trabalhamos com o serviço de Sedex dos Correios para que o seu vestido chegue a tempo do grande dia!\nO frete de ida é por conta do cliente e o de volta por nossa conta! Você poderá acompanhar seu pedido através do código de rastreio. Guarde com cuidado a caixa e as etiquetas enviadas, pois você precisará deles para enviar o vestido de volta para a gente."
  },
  {
    step: "5",
    title: "TROCA",
    description: "Observado todo esse passo a passo, tudo vai correr perfeitamente com o seu aluguel. Mas, se ainda assim você precisar trocar, realizamos a troca (se ainda houver tempo hábil), ou o valor de crédito para a sua próxima locação, respeitando os prazos acordado no contrato de aluguel."
  },
  {
    step: "6",
    title: "DEVOLUÇÃO",
    description: "Temos certeza que fará muito sucesso com o seu vestido. Na data da devolução, coloque-o na caixa, na mesma forma como você recebeu, na capa com o cabide, e leve-o em qualquer agência dos correios mais próxima de você.\nAs etiquetas de devolução e o código dos correios já estarão junto. Não se preocupe com a lavagem, cuidaremos de tudo quando ele chegar em nossas mãos novamente!"
  }
];

const trackWhatsAppClick = () => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: 'generate_lead' });
  }
};

function CTAButton({ href, className, children, onClick }: { href: string, className?: string, children: ReactNode, onClick?: () => void }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsAppClick();
        if (onClick) onClick();
      }}
      className={cn(
        "inline-flex items-center justify-center gap-2 bg-[#C83333] hover:bg-[#a82a2a] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300",
        className
      )}
    >
      {children}
    </a>
  );
}

export default function App() {
  const [categoriesRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000 })]);
  const [showcaseRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 2000 })]);

  return (
    <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#C83333] selection:text-white">
      
      {/* Section 1: Hero */}
      <section className="relative w-full h-[975px] md:h-[700px] overflow-hidden">
        {/* Imagem Hero Desktop - Dimensão recomendada: 1920x700px */}
        <img 
          src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1774477622/banner-hero-versao-desktop_ctlfhr.png" 
          alt="Hero Background Desktop" 
          className="hidden md:block w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Imagem Hero Mobile - Dimensão recomendada: 1080x975px */}
        <img 
          src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1774477622/banner-hero-versao-mobile_mhiqfc.png" 
          alt="Hero Background Mobile" 
          className="block md:hidden w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* Section 2: Categories */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-semibold">Vista uma moda consciente</h2>
        
        <div className="overflow-hidden mb-12" ref={categoriesRef}>
          <div className="flex -ml-4">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] pl-4 min-w-0">
                <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
                  {/* Imagem Categoria - Dimensão recomendada: 600x800px (proporção 3:4) */}
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-8">
                    <h3 className="text-white font-serif text-xl tracking-wider">{category.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <CTAButton href={WHATSAPP_LINK}>
            <MessageCircle size={20} />
            Falar com Consultora
          </CTAButton>
        </div>
      </section>

      {/* Section 4: Showcase */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-semibold">Conheça algumas de nossas opções</h2>
          
          <div className="overflow-hidden mb-12" ref={showcaseRef}>
            <div className="flex -ml-4">
              {SHOWCASE_IMAGES.map((img, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] pl-4 min-w-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-sm">
                    {/* Imagem Vitrine - Dimensão recomendada: 600x800px (proporção 3:4) */}
                    <img 
                      src={img} 
                      alt={`Vestido ${index + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <CTAButton href={WHATSAPP_LINK}>
              <MessageCircle size={20} />
              Quero Alugar
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Section 5: How it Works */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-16 font-semibold">Como Funciona</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={index} className="flex flex-col bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[#C83333] text-white flex items-center justify-center font-serif text-2xl font-bold mb-6 shadow-sm">
                {item.step}
              </div>
              <h3 className="font-sans text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow whitespace-pre-line">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Our Units */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 font-semibold">Nossas Unidades</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {UNITS.map((unit, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-video overflow-hidden">
                  {/* Imagem Unidade - Dimensão recomendada: 800x450px (proporção 16:9) */}
                  <img 
                    src={unit.image} 
                    alt={unit.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-sans text-xl font-bold mb-3">{unit.name}</h3>
                  <div className="flex items-start gap-2 text-gray-600 text-sm mb-6 flex-grow">
                    <MapPin size={16} className="flex-shrink-0 mt-1 text-[#C83333]" />
                    <p>{unit.address}</p>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <a 
                      href={unit.maps} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Ver no Mapa
                    </a>
                    <a 
                      href={`https://wa.me/${unit.whatsapp}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="text-sm font-medium text-center py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={16} />
                      {unit.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Awareness */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-[#C83333]">
              <Recycle size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-2xl font-bold mb-4">Reduza</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              37 kgs de roupas são descartados anualmente pela mulher moderna. Alugue e ajude a reduzir esse número.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-[#C83333]">
              <RefreshCw size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-2xl font-bold mb-4">Reuse</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Quando o ciclo do aluguel se encerra, nossas peças vão para projetos sociais de upcycling.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 text-[#C83333]">
              <Leaf size={32} strokeWidth={1.5} />
            </div>
            <h3 className="font-sans text-2xl font-bold mb-4">Repense</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Alugando você incentiva a moda compartilhada, a economia circular e reduz os impactos ambientais.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: CTA Background */}
      <section className="relative py-32 md:py-40 px-4 md:px-8 min-h-[80vh] md:min-h-[600px] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Imagem Fundo CTA Desktop - Dimensão recomendada: 1920x1080px */}
          <img 
            src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1774478235/banner-final-desktop_y1clb3.png" 
            alt="Mulher de vestido Desktop" 
            className="hidden md:block w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          {/* Imagem Fundo CTA Mobile - Dimensão recomendada: 1080x1920px */}
          <img 
            src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1774478308/banner-final-mobile_btxash.png" 
            alt="Mulher de vestido Mobile" 
            className="block md:hidden w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-white flex flex-col items-center justify-center h-full gap-6 md:gap-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Sua ocasião especial merece o vestido perfeito.
          </h2>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-light">
            Nossa equipe no WhatsApp está pronta para encontrar o vestido ideal para você, no seu tamanho, na sua data.
          </p>
          
          <CTAButton href={WHATSAPP_LINK} className="text-lg px-10 py-4 mt-4">
            <MessageCircle size={24} />
            Falar com Consultora
          </CTAButton>
        </div>
      </section>

      {/* Section 9: Footer */}
      <footer className="bg-[#111111] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Imagem Logo Footer - Dimensão recomendada: 300x100px */}
          <img 
            src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773789401/logo_powerlook_vzu3or.webp" 
            alt="PowerLook Logo" 
            className="w-48 mb-6 filter brightness-0 invert opacity-90"
            referrerPolicy="no-referrer"
          />
          
          <p className="font-serif text-xl italic tracking-wide mb-8 opacity-90">
            Alugue. Arrase. Devolva. ✦
          </p>
          
          <div className="flex gap-6 mb-8">
            <a href="https://www.instagram.com/powerlook_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.facebook.com/powerlook.com.br/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com/Powerlook_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <Twitter size={18} />
            </a>
          </div>
          
          <div className="flex flex-col gap-2 mb-12 opacity-80 text-sm">
            <p>WhatsApp: (21) 99123-3015</p>
            <p>contato@powerlook.com.br</p>
          </div>
          
          <div className="w-full h-px bg-white/10 mb-8"></div>
          
          <p className="text-xs opacity-50">
            © 2026 PowerLook. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
