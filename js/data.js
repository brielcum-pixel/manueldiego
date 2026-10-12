/* LAGOTTO WATERS WAGS : central content and configuration.
   Portfolio showcase only. This site collects nothing, sells nothing, and
   books nothing. There are no forms, no messaging links, and no checkout.
   All business content lives here so the owner can update listings and text
   without touching layout code. */

const SITE = {
  name: "LAGOTTO WATERS WAGS",
  tagline: "Lagotto puppies, considered accessories, and truffle offerings",
  baseUrl: ""
};

/* Central image slots. Owner photographs live in assets/images/ and are
   referenced below. Alt text describes what is actually visible in each file.
   No stock or generated images are used. */
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

/* Puppy profiles. Empty until the owner confirms real listings with verified
   names, descriptions, and photographs. No prices or stock shown meanwhile.
   A future confirmed profile will use this shape:
   { id, name, status, summary, sex, birthDate, images: [{file, alt}] } */
const PUPPIES = [];

/* Accessories. Empty until the owner confirms real products with verified
   names, descriptions, and photographs. No prices or stock shown meanwhile. */
const ACCESSORIES = [];

/* Truffle and other offerings. Flexible by design so future categories can
   join without restructuring. Entries appear only when confirmed. */
const OFFERINGS = [];
