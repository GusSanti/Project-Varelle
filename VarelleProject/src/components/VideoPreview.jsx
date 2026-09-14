import { useState } from "react";
import { featuredVideo } from "../data/content";

export default function VideoPreview() {
  const [failed, setFailed] = useState(false);
  if (featuredVideo.src) {
    return (
      <div className="video-player">
        <video
          controls
          playsInline
          preload="none"
          poster={featuredVideo.poster}
          aria-label={featuredVideo.title}
          onError={() => setFailed(true)}
        >
          <source src={featuredVideo.src} type="video/mp4" />
          {featuredVideo.captions && (
            <track
              kind="captions"
              src={featuredVideo.captions}
              srcLang="pt-BR"
              label="Português"
              default
            />
          )}
          Seu navegador não suporta vídeo HTML5.
        </video>
        {failed && (
          <p role="status">
            Não foi possível carregar o vídeo.{" "}
            <a href={featuredVideo.src}>Abrir arquivo de vídeo</a>
          </p>
        )}
      </div>
    );
  }
  return (
    <div className="video-art">
      <img
        src={featuredVideo.poster}
        alt="Ambiente mobiliado, exemplo de imagem para compor um vídeo imobiliário"
        loading="lazy"
      />
      <div className="video-art-content">
        <span className="eyebrow">VARELLE MOTION</span>
        <h3>
          Espaços que
          <br />
          ganham movimento.
        </h3>
        <span className="coming-soon">PORTFÓLIO EM VÍDEO · EM BREVE</span>
      </div>
      <span className="frame-corner" />
    </div>
  );
}
