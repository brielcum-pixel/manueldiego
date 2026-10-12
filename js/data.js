/* MANUEL DIEGO : central content.
   Showcase only. No forms, no messaging links, no checkout, no stats.
   Legacy Lagotto slots are retained so archive redirect pages keep
   working. New editorial images live in public/images/manuel-diego/. */

const SITE = {
  name: "MANUEL DIEGO",
  tagline: "Model, fashion portfolio and brand collaborations",
  baseUrl: ""
};

/* Supplied Manuel Diego photographs. Save the 8 attached photos under
   these exact filenames. See public/images/manuel-diego/README.md. */
const MANUEL_SLOTS = {
  hero: { file: "public/images/manuel-diego/hero.jpg", alt: "Manuel Diego in a cable knit sweater over a white collar against a stone wall" },
  editorial01: { file: "public/images/manuel-diego/editorial-01.jpg", alt: "Manuel Diego, studio portrait in a white sculptural jacket with gold detail" },
  editorial02: { file: "public/images/manuel-diego/editorial-02.jpg", alt: "Manuel Diego, diptych portrait with red lip close-up and evening portrait" },
  editorial03: { file: "public/images/manuel-diego/editorial-03.jpg", alt: "Manuel Diego, collage of performance and portrait frames in leather and evening styling" },
  statement: { file: "public/images/manuel-diego/statement.jpg", alt: "Manuel Diego, black and white scene in conversation at a terrace table" },
  style01: { file: "public/images/manuel-diego/style-01.jpg", alt: "Manuel Diego, diptych in dark pinstripe tailoring and white tailoring with gold detail" },
  style02: { file: "public/images/manuel-diego/style-02.jpg", alt: "Manuel Diego, close portrait in a white top with a pendant necklace" },
  about: { file: "public/images/manuel-diego/about.jpg", alt: "Manuel Diego, soft studio portrait with hair in a bun and floral blouse" }
};

/* Legacy image slots retained for archive pages. */
const IMAGE_SLOTS = {
  heroForestPortrait: {
    file: "assets/images/hero-forest-portrait.jpg",
    alt: "Dark brown curly Lagotto lying among autumn leaves in a forest, a fallen leaf resting near its eye"
  },
  summitPortrait: {
    file: "assets/images/hero-summit-sunset.jpg",
    alt: "Person with hair in a bun sitting on a rocky summit at sunset with an arm around a curly brown Lagotto, overlooking a valley and lake"
  },
  forestPathThreeDogs: {
    file: "assets/images/forest-path-three-dogs.jpg",
    alt: "Three dogs walking away along a forest path lined with tall autumn trees"
  },
  coatTexture: {
    file: "assets/images/coat-texture-closeup.jpg",
    alt: "Close view of dense golden brown Lagotto curls with a hand gently lifting the coat"
  },
  terraceSea: {
    file: "assets/images/terrace-sea-portrait.jpg",
    alt: "Brown curly Lagotto sitting on a tiled coastal terrace overlooking the sea"
  },
  pavementPair: {
    file: "assets/images/two-dogs-pavement.jpg",
    alt: "Two curly coated dogs with pink collars sitting together on a paved path"
  },
  terraceProfile: {
    file: "assets/images/terrace-profile-stand.jpg",
    alt: "Brown curly Lagotto standing in profile on a sunny terrace with tail raised"
  },
  shopAisle: {
    file: "assets/images/shop-aisle-two-dogs.jpg",
    alt: "Two curly brown dogs on leads inside a pet food shop aisle"
  },
  armchairRest: {
    file: "assets/images/armchair-rest.jpg",
    alt: "Two curly dogs resting together on a mustard corduroy armchair indoors"
  }
};

const PUPPIES = [];
const ACCESSORIES = [];
const OFFERINGS = [];
