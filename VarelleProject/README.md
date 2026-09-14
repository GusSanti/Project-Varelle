# Varelle — Interface do MVP

Interface institucional em React + Vite, com Tailwind CSS 4 e estilos próprios. O planejamento de produto continua no README da raiz.

## Executar

Requer Node.js 22.12+ ou 24+. Na pasta `VarelleProject`:

```sh
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Estrutura

- `src/App.jsx`: seções da página e navegação responsiva.
- `src/components/HeroCarousel.jsx`: carrossel acessível do hero com setas, indicadores, gestos e teclado.
- `src/components/ImageComparison.jsx`: comparador reutilizável com sobreposição e recorte CSS, cursor, range nativo para toque, setas, Home e End.
- `src/components/VideoPreview.jsx`: apresentação visual e player HTML5 configurável.
- `src/components/Icons.jsx`: símbolo e ícones SVG locais.
- `src/data/content.js`: contato, portfólio, serviços, etapas, dúvidas e configuração do vídeo.
- `src/index.css`: fontes, tokens e estilos globais.
- `src/App.css`: composição editorial e breakpoints responsivos.
- `public/images`: imagens conceituais locais em WebP.
- `scripts/optimize-image.mjs`: conversão de novos arquivos para WebP com Sharp.

## Direção visual

Verde profundo `#173e32`, off-white `#f5f3ed`, sálvia `#c9d4b4`. Playfair Display para títulos e DM Sans para textos, carregadas por Google Fonts, com fontes de sistema como fallback. Grandes imagens, detalhes finos, formas discretas e espaço entre as seções. A identidade SVG é uma proposta inicial baseada nas referências, substituível pela marca oficial.

O hero apresenta três ambientes em um carrossel circular com setas, indicadores, gesto lateral no celular e navegação por teclado. Os comparadores de antes e depois permanecem nas seções de transformação e portfólio. Essa interação foi inspirada na seção “Fotos prontas a publicar em 1 clique” de https://pedra.ai/pt, com implementação própria; nenhuma imagem ou código da Pedra foi copiado.

## Atualizar conteúdo

1. Edite `src/data/content.js` para alterar os contatos, serviços, textos e os pares `before`/`after` do portfólio. Use imagens da mesma dimensão, enquadramento e perspectiva.
2. Os contatos foram transcritos da referência visual enviada: WhatsApp +55 (37) 99934-4812, e-mail varelle.studio@yahoo.com e Instagram @varelle.studio. Revise antes do lançamento.
3. Para ativar o player, coloque um MP4 em `public/videos` e defina `featuredVideo.src` como `/videos/seu-video.mp4`. Também aceita URL HTTPS de arquivo MP4. Defina `captions` com um arquivo WebVTT em português se houver fala, e ajuste `poster` e `title`. O componente não recebe links de páginas YouTube/Vimeo como arquivo de vídeo.
4. Sem vídeo configurado, a seção mostra honestamente “em breve”, sem botão de reprodução inativo.
5. Os estudos são imagens geradas por IA, explicitamente identificadas como ilustrativas. Substitua por trabalhos autorizados e atualize a identificação do portfólio quando forem incluídos projetos reais.
6. O texto sobre o estúdio é uma proposta editorial. Acrescente nome, apresentação e fotografia do profissional quando disponíveis.

```sh
node scripts/optimize-image.mjs entrada.png public/images/novo-projeto.webp
```

Não há upload, autenticação, pagamentos, banco de dados ou processamento de IA na aplicação. Os botões de orçamento apenas abrem uma conversa no WhatsApp com texto inicial; não enviam mensagens automaticamente. Não foram inventados valores, prazos, avaliações nem estatísticas comerciais.

## Publicação

O projeto está preparado para build estático. Na Vercel, use `VarelleProject` como Root Directory, `npm run build` como Build Command e `dist` como Output Directory. Nenhuma publicação foi executada nesta entrega. Depois de definir o domínio, adicione URL canônica e metadados Open Graph absolutos adequados ao domínio definitivo.

## Verificação

Build e lint verificados. Revisão no navegador em desktop e larguras móveis, incluindo carrossel do hero, navegação circular, teclado, menu, âncoras, filtros de portfólio, troca de comparação e FAQ. Links externos conferidos sem enviar mensagens. Arquivos de imagens locais, carregamento lazy abaixo da abertura e suporte a `prefers-reduced-motion`.

Os prompts e a origem dos arquivos demonstrativos estão em `docs/image-assets.md`.
