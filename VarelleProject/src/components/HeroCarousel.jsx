import { useRef, useState } from "react";
import { Arrow } from "./Icons";

const slides = [
  {
    src: "/images/living-after.webp",
    alt: "Sala contemporânea com iluminação natural, sofá claro e detalhes em verde oliva",
    category: "HOME STAGING VIRTUAL",
    title: "De espaço vazio a próximo lar.",
    note: "DECORAÇÃO VIRTUAL · ESTUDO ILUSTRATIVO",
  },
  {
    src: "/images/hero-interior-warm.webp",
    alt: "Sala integrada em tons claros, com iluminação aconchegante e mobiliário planejado",
    category: "INTERIORES QUE ACOLHEM",
    title: "Detalhes que fazem sentir em casa.",
    note: "AMBIENTE RESIDENCIAL · REFERÊNCIA VISUAL",
  },
  {
    src: "/images/hero-interior-teal.webp",
    alt: "Sala contemporânea com parede cinza e sofá modular azul-petróleo",
    category: "ESPAÇOS COM IDENTIDADE",
    title: "Cada ambiente conta uma história.",
    note: "AMBIENTE RESIDENCIAL · REFERÊNCIA VISUAL",
  },
];

function Chevron({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 5-7 7 7 7" : "m9 5 7 7-7 7"} />
    </svg>
  );
}

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);
  const slide = slides[active];

  const select = (index) => {
    setActive((index + slides.length) % slides.length);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      select(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      select(active + 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      select(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      select(slides.length - 1);
    }
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) select(active + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <div
      className="hero-gallery"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Ambientes em destaque"
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <div className="image-index">
        <span>UM ESPAÇO. NOVAS POSSIBILIDADES.</span>
        <span>
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>
      <div
        className="hero-carousel"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fetchPriority={active === 0 ? "high" : "auto"}
        />
        <span className="hero-image-note">{slide.note}</span>
        <button
          className="carousel-arrow carousel-arrow-left"
          type="button"
          onClick={() => select(active - 1)}
          aria-label="Mostrar imagem anterior"
        >
          <Chevron direction="left" />
        </button>
        <button
          className="carousel-arrow carousel-arrow-right"
          type="button"
          onClick={() => select(active + 1)}
          aria-label="Mostrar próxima imagem"
        >
          <Chevron direction="right" />
        </button>
      </div>
      <div className="visual-caption" aria-live="polite">
        <div>
          <span className="caption-kicker">{slide.category}</span>
          <p>{slide.title}</p>
        </div>
        <div
          className="carousel-dots"
          role="group"
          aria-label="Escolher imagem"
        >
          {slides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              className={index === active ? "active" : ""}
              onClick={() => select(index)}
              aria-label={`Mostrar imagem ${index + 1} de ${slides.length}`}
              aria-current={index === active ? "true" : undefined}
            />
          ))}
        </div>
        <a
          href="#transformacoes"
          className="circle-link"
          aria-label="Explorar transformações"
        >
          <Arrow diagonal />
        </a>
      </div>
    </div>
  );
}
