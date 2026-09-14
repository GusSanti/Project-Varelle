// Contact details transcribed from the user's visual reference. Confirm before launch.
export const contact = {
  email: "varelle=@yahoo.com",
  phone: "+55 (37) 99999-9999",
  instagram: "https://www.instagram.com/varelle.studio/",
  whatsapp: (service) =>
    `https://wa.me/5537999344812?text=${encodeURIComponent(service ? `Olá, Varelle! Gostaria de saber mais sobre ${service}.` : "Olá, Varelle! Gostaria de transformar a apresentação do meu imóvel. Podemos conversar?")}`,
};
// Set src to a real MP4 file in public/videos or an HTTPS media URL to enable the player.
export const featuredVideo = {
  src: null,
  poster: "/images/living-after.webp",
  title: "Varelle — apresentação imobiliária",
  captions: null,
};

export const projects = [
  {
    id: "living",
    title: "Um novo jeito de se sentir em casa",
    category: "Mobília virtual",
    icon: "sofa",
    before: "/images/living-before.webp",
    after: "/images/living-after.webp",
    alt: "Sala de estar com janelas amplas e decoração em tons naturais",
  },
  {
    id: "renovation",
    title: "Novas possibilidades para o mesmo espaço",
    category: "Reforma digital",
    icon: "home",
    before: "/images/renovation-before.webp",
    after: "/images/living-after.webp",
    alt: "Sala antes e depois de uma proposta de reforma digital",
  },
  {
    id: "light",
    title: "A luz que muda a primeira impressão",
    category: "Aprimoramento de fotos",
    icon: "sparkles",
    before: "/images/light-before.webp",
    after: "/images/living-after.webp",
    alt: "Sala antes e depois do aprimoramento de iluminação",
  },
];
export const services = [
  {
    title: "Mobília virtual",
    icon: "sofa",
    description:
      "Ambientes vazios ganham vida com uma decoração que ajuda a imaginar como seria morar ali.",
  },
  {
    title: "Reforma digital",
    icon: "home",
    description:
      "Novos acabamentos, novas possibilidades. Revele o que um espaço pode se tornar.",
  },
  {
    title: "Aprimoramento de fotos",
    icon: "image",
    description:
      "Luz, cores e composição em equilíbrio. Valorize os detalhes que fazem a diferença.",
  },
  {
    title: "Remoção de elementos",
    icon: "sparkles",
    description:
      "Retire distrações e objetos da imagem para deixar o espaço ser o protagonista.",
  },
  {
    title: "Vídeos imobiliários",
    icon: "video",
    description:
      "Transforme fotos e materiais do imóvel em uma apresentação que convida a conhecer.",
  },
  {
    title: "Conteúdo para sua marca",
    icon: "image",
    description:
      "Imagens e vídeos pensados para os seus anúncios, redes sociais e empreendimentos.",
  },
];
export const steps = [
  {
    title: "Conte sua ideia",
    description:
      "Envie as fotos e informações do imóvel pelo WhatsApp. Queremos entender o que você imagina.",
  },
  {
    title: "Alinhamos o olhar",
    description:
      "Definimos juntos o serviço, a direção visual, o investimento e o prazo do seu projeto.",
  },
  {
    title: "Criamos possibilidades",
    description:
      "Com tecnologia e cuidado em cada detalhe, transformamos os materiais do seu imóvel.",
  },
  {
    title: "Pronto para encantar",
    description:
      "Você recebe os arquivos combinados, prontos para apresentar, compartilhar e divulgar.",
  },
];
export const faqs = [
  {
    question: "Preciso de fotos profissionais para começar?",
    answer:
      "Você pode começar com as fotos que já tem. Imagens nítidas, bem enquadradas e em boa resolução ajudam no resultado. Antes de fechar o projeto, avaliamos seus materiais juntos.",
  },
  {
    question: "As transformações são feitas no imóvel?",
    answer:
      "As intervenções são digitais, nas imagens. Mobília e reforma virtual mostram uma possibilidade de apresentação do espaço. As imagens devem ser identificadas como ilustrativas ao divulgar o imóvel.",
  },
  {
    question: "Qual é o prazo e o valor do serviço?",
    answer:
      "O orçamento e o prazo dependem da quantidade de imagens, do tipo de transformação e dos formatos desejados. Envie os materiais pelo WhatsApp para receber uma proposta para o seu projeto.",
  },
  {
    question: "Vocês também criam vídeos para redes sociais?",
    answer:
      "Sim. Podemos trabalhar as fotos e os vídeos que você já tem em conteúdo para redes sociais e anúncios, com formatos e identidade visual definidos na proposta.",
  },
];
