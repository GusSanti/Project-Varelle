import { useState } from "react";
import { Arrow, Mark, Icon } from "./components/Icons";
import ImageComparison from "./components/ImageComparison";
import HeroCarousel from "./components/HeroCarousel";
import VideoPreview from "./components/VideoPreview";
import { contact, projects, services, steps, faqs } from "./data/content";
import "./App.css";

const navigation = [
  ["Serviços", "servicos"],
  ["Portfólio", "portfolio"],
  ["Como funciona", "processo"],
  ["Sobre", "sobre"],
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="Varelle, início">
      <Mark />
      <span>
        Varelle<span className="brand-dot">.</span>
      </span>
    </a>
  );
}

function ContactLink({
  children = "Solicitar orçamento",
  className = "button button-light",
  service,
}) {
  return (
    <a
      className={className}
      href={contact.whatsapp(service)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <Arrow />
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Brand />
        <nav aria-label="Navegação principal" className="desktop-nav">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#contato" className="header-contact">
          Vamos conversar <Arrow />
        </a>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : <Icon name="menu" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegação móvel"
        hidden={!open}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setOpen(false);
            document.querySelector(".menu-button")?.focus();
          }
        }}
      >
        {[...navigation, ["Contato", "contato"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
            <Arrow />
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> UM NOVO OLHAR PARA O SEU IMÓVEL
          </p>
          <h1>
            Todo imóvel tem
            <br />
            potencial.
            <br />
            <em>A gente revela.</em>
          </h1>
          <p className="hero-description">
            Transformamos fotos em possibilidades. Imagens e vídeos que
            valorizam seus espaços e fazem o próximo lar ser imaginado.
          </p>
          <div className="hero-actions">
            <ContactLink />
            <a className="text-link" href="#portfolio">
              Explore os resultados <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <HeroCarousel />
          <span className="vertical-label">
            VARELLE — ESTÚDIO VISUAL IMOBILIÁRIO
          </span>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>O potencial já existe. Falta mostrar.</span>
        <a href="#transformacoes">
          DESCUBRA A DIFERENÇA <span>↓</span>
        </a>
      </div>
    </section>
  );
}

function Transformations() {
  const [selected, setSelected] = useState(0);
  const example = projects[selected];
  return (
    <section className="section transformations" id="transformacoes">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / A TRANSFORMAÇÃO</p>
            <h2>
              O mesmo espaço.
              <br />
              <em>Outra primeira impressão.</em>
            </h2>
          </div>
          <p>
            Às vezes, tudo o que um imóvel precisa é de um novo olhar. Compare e
            descubra o que pode mudar.
          </p>
        </div>
        <div
          className="comparison-tabs"
          role="group"
          aria-label="Tipo de transformação"
        >
          {projects.map((p, i) => (
            <button
              key={p.id}
              aria-pressed={selected === i}
              onClick={() => setSelected(i)}
            >
              <Icon name={p.icon} />
              {p.category}
            </button>
          ))}
        </div>
        <ImageComparison
          key={example.id}
          before={example.before}
          after={example.after}
          alt={example.alt}
        />
        <div className="comparison-footer">
          <span>
            <Icon name="move" /> Passe o mouse ou arraste para explorar
          </span>
          <span>Estudo visual ilustrativo · {example.category}</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / O QUE FAZEMOS</p>
            <h2>
              Mais possibilidades.
              <br />
              <em>Em cada metro quadrado.</em>
            </h2>
          </div>
          <p>
            Da primeira foto ao vídeo do anúncio, cuidamos de como o seu imóvel
            é apresentado ao mundo.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <a
              href={contact.whatsapp(s.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card"
              key={s.title}
            >
              <div className="service-card-top">
                <Icon name={s.icon} />
                <span>0{i + 1}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className="service-link">
                Explorar possibilidades <Arrow diagonal />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const displayed =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / PORTFÓLIO CONCEITUAL</p>
            <h2>
              Imagine o que podemos
              <br />
              <em>fazer pelo seu imóvel.</em>
            </h2>
          </div>
          <p>
            Uma seleção de estudos visuais para apresentar possibilidades. Cada
            espaço, uma nova história.
          </p>
        </div>
        <div
          className="portfolio-filters"
          role="group"
          aria-label="Filtrar portfólio"
        >
          {["Todos", ...projects.map((p) => p.category)].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
              {f === "Todos" && <span>03</span>}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {displayed.map((p) => (
            <article className="project-card" key={p.id}>
              <ImageComparison
                before={p.before}
                after={p.after}
                alt={p.alt}
                compact
              />
              <div className="project-caption">
                <div>
                  <p className="eyebrow">{p.category}</p>
                  <h3>{p.title}</h3>
                </div>
                <a
                  href={contact.whatsapp(p.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-link"
                  aria-label={`Solicitar ${p.category}`}
                >
                  <Arrow diagonal />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-disclosure">
          Imagens conceituais geradas por IA para demonstração dos serviços. Não
          representam projetos de clientes.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process-section" id="processo">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / COMO FUNCIONA</p>
            <h2>
              Simples para você.
              <br />
              <em>Cuidadoso em cada etapa.</em>
            </h2>
          </div>
          <ContactLink className="text-link">Começar meu projeto</ContactLink>
        </div>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <article key={s.title}>
              <div className="step-number">
                0{i + 1}
                <span />
                <Arrow />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </article>
          ))}
        </div>
        <div className="process-note">
          <Icon name="sparkles" />
          <p>Você conhece o imóvel. Nós ajudamos a contar a história dele.</p>
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section className="section video-section" id="videos">
      <div className="container video-grid">
        <VideoPreview />
        <div className="video-copy">
          <p className="eyebrow">05 / ALÉM DA FOTOGRAFIA</p>
          <h2>
            Seu imóvel merece
            <br />
            <em>mais do que uma foto.</em>
          </h2>
          <p>
            Transformamos as imagens do seu imóvel em vídeos comerciais com
            ritmo, narrativa e a identidade da sua marca.
          </p>
          <ul className="check-list">
            <li>Conteúdo para Reels, Stories e anúncios</li>
            <li>Formatos verticais e horizontais</li>
            <li>Edição pensada para valorizar cada ambiente</li>
          </ul>
          <ContactLink
            className="button button-green"
            service="Vídeos imobiliários"
          >
            Quero um vídeo para meu imóvel
          </ContactLink>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="sobre">
      <div className="container about-grid">
        <div className="studio-card">
          <Mark />
          <span className="studio-wordmark">Varelle.</span>
          <p>
            UM NOVO OLHAR.
            <br />
            INFINITAS POSSIBILIDADES.
          </p>
          <span className="studio-footnote">ESTÚDIO VISUAL IMOBILIÁRIO</span>
        </div>
        <div>
          <p className="eyebrow">06 / POR TRÁS DO OLHAR</p>
          <h2>
            Tecnologia que transforma.
            <br />
            <em>Um olhar que faz a diferença.</em>
          </h2>
          <p>
            A Varelle nasce de uma ideia simples: a apresentação de um imóvel
            deve estar à altura do seu potencial.
          </p>
          <p>
            Combinamos recursos de inteligência artificial e direção visual para
            criar imagens e vídeos com intenção. Cada escolha de luz, textura e
            composição ajuda a tornar esse potencial visível.
          </p>
          <div className="audience-tags">
            <span>Corretores</span>
            <span>Imobiliárias</span>
            <span>Construtoras</span>
            <span>Proprietários</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section faq-section">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">ANTES DE COMEÇAR</p>
          <h2>
            Vamos esclarecer
            <br />
            <em>algumas dúvidas?</em>
          </h2>
          <a
            className="text-link dark-link"
            href={contact.whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Converse com a Varelle <Arrow diagonal />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.question}>
              <summary>
                {f.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato">
      <div className="container">
        <div className="contact-heading">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> VAMOS CRIAR ALGO JUNTOS
            </p>
            <h2>
              O próximo olhar pode
              <br />
              ser <em>para o seu imóvel.</em>
            </h2>
            <p>
              Conte o que você tem em mente. A gente cuida das possibilidades.
            </p>
          </div>
          <ContactLink className="button button-sage">
            Vamos conversar
          </ContactLink>
        </div>
        <div className="footer-middle">
          <Brand />
          <div>
            <a href={`mailto:${contact.email}`}>
              {contact.email}
              <Arrow diagonal />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              @varelle.studio
              <Arrow diagonal />
            </a>
            <a
              href={contact.whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.phone}
              <Arrow diagonal />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Varelle Studio. Todos os direitos
            reservados.
          </span>
          <span>Feito para revelar possibilidades.</span>
          <a href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <div className="specialties">
          <div className="container">
            <span>UM NOVO OLHAR PARA</span>
            <span>Imóveis à venda</span>
            <span className="small-star">✳</span>
            <span>Aluguéis que encantam</span>
            <span className="small-star">✳</span>
            <span>Novos empreendimentos</span>
            <span className="small-star">✳</span>
            <span>Espaços com potencial</span>
          </div>
        </div>
        <Transformations />
        <Services />
        <Portfolio />
        <Process />
        <Videos />
        <About />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
