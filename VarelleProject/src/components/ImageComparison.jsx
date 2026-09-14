import { useId, useState } from "react";

export default function ImageComparison({
  before,
  after,
  alt,
  hero = false,
  compact = false,
}) {
  const [position, setPosition] = useState(hero ? 35 : 50);
  const [failed, setFailed] = useState(false);
  const id = useId();
  const updateFromPointer = (e) => {
    if (e.pointerType !== "mouse" && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition(
      Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)),
    );
  };
  return (
    <div
      className={`comparison ${hero ? "comparison-hero" : ""} ${compact ? "comparison-compact" : ""}`}
      style={{ "--position": `${position}%` }}
      onPointerMove={updateFromPointer}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setPosition(hero ? 35 : 50);
      }}
    >
      <img
        className="comparison-image"
        src={after}
        alt={`${alt} — depois`}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : "auto"}
        onError={() => setFailed(true)}
      />
      <img
        className="comparison-image comparison-before"
        src={before}
        alt={`${alt} — antes`}
        loading={hero ? "eager" : "lazy"}
        onError={() => setFailed(true)}
      />
      {failed && (
        <div className="image-error">
          Não foi possível carregar este estudo visual. Tente atualizar a
          página.
        </div>
      )}
      <span className="image-tag before-tag">ANTES</span>
      <span className="image-tag after-tag">
        <span /> DEPOIS
      </span>
      <div className="comparison-divider" aria-hidden="true">
        <span>
          ‹<span />›
        </span>
      </div>
      <label className="sr-only" htmlFor={id}>
        Comparar antes e depois: {alt}
      </label>
      <input
        id={id}
        className="comparison-input"
        type="range"
        min="0"
        max="100"
        value={position}
        aria-valuetext={`${Math.round(position)}% da imagem original visível`}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
      {hero && (
        <span className="hero-image-note">
          DECORAÇÃO VIRTUAL · ESTUDO ILUSTRATIVO
        </span>
      )}
    </div>
  );
}
