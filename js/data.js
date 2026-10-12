/* MANUEL DIEGO : contenido central.
   Solo muestra. Sin formularios, sin enlaces de mensajería, sin ventas,
   sin estadísticas. Los bloques clásicos se conservan para que las
   páginas de archivo sigan funcionando. Las imágenes editoriales viven
   en public/images/manuel-diego/. */

const SITE = {
  name: "MANUEL DIEGO",
  tagline: "Modelo, portafolio de moda y colaboraciones con marcas",
  baseUrl: ""
};

/* Fotografías de Manuel Diego. Las 8 fotos adjuntas viven bajo estos
   nombres exactos. Ver public/images/manuel-diego/README.md. */
const MANUEL_SLOTS = {
  hero: { file: "public/images/manuel-diego/hero.jpg", alt: "Manuel Diego con suéter de punto trenzado sobre camisa blanca, junto a un muro de piedra" },
  editorial01: { file: "public/images/manuel-diego/editorial-01.jpg", alt: "Manuel Diego, retrato de estudio con chaqueta blanca escultórica y detalle dorado" },
  editorial02: { file: "public/images/manuel-diego/editorial-02.jpg", alt: "Manuel Diego, díptico con primer plano de labios rojos y retrato de noche" },
  editorial03: { file: "public/images/manuel-diego/editorial-03.jpg", alt: "Manuel Diego, collage de actuación y retratos con cuero y estilismo de noche" },
  statement: { file: "public/images/manuel-diego/statement.jpg", alt: "Manuel Diego, escena en blanco y negro conversando en una terraza" },
  style01: { file: "public/images/manuel-diego/style-01.jpg", alt: "Manuel Diego, díptico con traje oscuro de rayas y traje blanco con detalle dorado" },
  style02: { file: "public/images/manuel-diego/style-02.jpg", alt: "Manuel Diego, retrato cercano con blusa blanca y collar con colgante" },
  about: { file: "public/images/manuel-diego/about.jpg", alt: "Manuel Diego, retrato de estudio con el pelo recogido y blusa floral" }
};

/* Bloques de imágenes clásicos, conservados para las páginas de archivo. */
const IMAGE_SLOTS = {
  heroForestPortrait: {
    file: "assets/images/hero-forest-portrait.jpg",
    alt: "Lagotto de pelo rizado marrón entre hojas de otoño en un bosque, con una hoja junto al ojo"
  },
  summitPortrait: {
    file: "assets/images/hero-summit-sunset.jpg",
    alt: "Persona con el pelo recogido en una cima rocosa al atardecer, abrazando a un Lagotto rizado ante un valle y un lago"
  },
  forestPathThreeDogs: {
    file: "assets/images/forest-path-three-dogs.jpg",
    alt: "Tres perros alejándose por un sendero entre altos árboles de otoño"
  },
  coatTexture: {
    file: "assets/images/coat-texture-closeup.jpg",
    alt: "Primer plano de rizos densos de Lagotto marrón dorado con una mano levantando el pelaje"
  },
  terraceSea: {
    file: "assets/images/terrace-sea-portrait.jpg",
    alt: "Lagotto rizado marrón en una terraza costera de baldosas sobre el mar"
  },
  pavementPair: {
    file: "assets/images/two-dogs-pavement.jpg",
    alt: "Dos perros de pelo rizado con collares rosas sentados en un camino"
  },
  terraceProfile: {
    file: "assets/images/terrace-profile-stand.jpg",
    alt: "Lagotto rizado marrón de pie y de perfil en una terraza soleada con la cola alta"
  },
  shopAisle: {
    file: "assets/images/shop-aisle-two-dogs.jpg",
    alt: "Dos perros marrones de pelo rizado con correa en el pasillo de una tienda de mascotas"
  },
  armchairRest: {
    file: "assets/images/armchair-rest.jpg",
    alt: "Dos perros rizados descansando en un sillón de pana mostaza"
  }
};

const PUPPIES = [];
const ACCESSORIES = [];
const OFFERINGS = [];
