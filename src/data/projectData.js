export const howManyTimesUse = [];
Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x === value).length;
    },
  },
});

const techno = [
  "HTML 0",
  "CSS 1",
  "Sass 2",
  "JavaScript 3",
  "React 4",
  "Redux 5",
  "Redux-Toolkit 6",
  "Angular 7",
  "Vue 8",
  "Node.js 9",
  "PHP 10",
  "Java 11",
  "Python 12",
  "Symphony 13",
  "Laravel 14",
  "Django 15",
  "Sprint 16",
  "Express 17",
  "MongoDB 18",
  "MySQL 19",
  "JSON 20",
  "Wordpress 21",
];

const outils = [
  "VScode 0",
  "Postman 1",
  "Git/Github 2",
  "Lighthouse 3",
  "React Devtools 4",
  "Webpack 5",
  "Babel 6",
  "ESLint 7",
  "Prettier 8",
  "Jest 9",
  "Storybook 10",
  "Chrome DevTools 11",
  "npm 12",
  "Travis CI 13",
  "Docker 14",
  "Figma 15",
  "Adobe Photoshop 16",
  "Sketch 17",
  "InVision 18",
  "Wave 19",
  "Redux Devtools 20",
  "Google Rich Snippets 21",
  "yarn 22",
  "Replit 23",
];

const methodologies = [
  "SEO 0",
  "Accessibilité 1",
  "Agile 2",
  "Scrum 3",
  "API 4",
  "Responsive 5",
];

function getTechno(...indexs) {
  return indexs.map((index) => techno[index].split(" ").slice(0, -1).join(" "));
}

function getOutils(...indexs) {
  return indexs.map((index) => outils[index].split(" ").slice(0, -1).join(" "));
}

function getMethodologies(...indexs) {
  return indexs.map((index) =>
    methodologies[index].split(" ").slice(0, -1).join(" ")
  );
}

export function getImagesPublic(name) {
  return "./images/projects/" + name;
}
export function getImagesStyle(name) {
  return "../images/projects/" + name;
}
export function getImagesCarousel(name) {
  return "../images/projects/" + name;
}

// HTML 0 CSS 1 Sass 2 JavaScript 3 React 4 Redux 5 Redux-Toolkit 6 Angular 7 Vue 8 Node.js 9 PHP 10 Java 11 Python 12 Symphony 13 Laravel 14 Django 15 Sprint 16 Express 17 MongoDB 18 MySQL 19 JSON 20 Wordpress 21
//  VScode 0 Postman 1 Git/Github 2 Lighthouse 3 React Devtools 4 Webpack 5 Babel 6 ESLint 7 Prettier 8 Jest 9 Storybook 10 Chrome DevTools 11 npm 12 Travis CI 13 Docker 14 Figma 15 Adobe Photoshop 16 Sketch 17 InVision 18 Wave 19 Redux Devtools 20 Google Rich Snippets 21 yarn 22 Replit 23
//  SEO 0 Accessibilité 1 Agile 2 Scrum 3 API 4 Responsive 5

export const Projects = [
  {
    name: "Page Ecommerce sneakers",
    url: "https://e-commerce-rl07hymo5-matteo-cb.vercel.app/",
    coverPublic: getImagesPublic("p1.png"),
    code: "https://github.com/Matteo-CB/e-commerce",
    coverStyle: getImagesStyle("p1.png"),
    techno: getTechno(0, 1, 2, 3, 4, 6),
    outils: getOutils(0, 2, 12, 8),
    methodologies: getMethodologies(1, 5),
    carousel: [
      getImagesCarousel("ecommerce-c1.png"),
      getImagesCarousel("ecommerce-c2.png"),
      getImagesCarousel("ecommerce-c3.png"),
    ],
    description:
      "Une page de site de e-commerce de sneakers, avec les fonctionnalités d'ajout et retrait du panier et présentation des images du produit. Développé avec React et utilisant des outils tels que Redux-Toolkit.",
  },

  {
    name: "Site documentation sur l'espace",
    url: "https://space-tourism-website-main-ighris3lh-matteo-cb.vercel.app/",
    coverPublic: getImagesPublic("p2.png"),
    code: "https://github.com/Matteo-CB/space-tourism-website-main",
    coverStyle: getImagesStyle("p2.png"),
    techno: getTechno(0, 1, 2, 3, 4, 20),
    outils: getOutils(0, 2, 12, 8),
    methodologies: getMethodologies(1),
    carousel: [
      getImagesCarousel("space-c1.png"),
      getImagesCarousel("space-c2.png"),
      getImagesCarousel("space-c3.png"),
      getImagesCarousel("space-c4.png"),
    ],
    description:
      "Un site de documentation sur l'espace offrant des informations sur les planètes, lunes et présentant des anecdotes. Construit avec React.",
  },
  {
    name: "Agence de voyage - Booki",
    url: "https://booki-murex.vercel.app/",
    coverPublic: getImagesPublic("p3.png"),
    code: "https://github.com/Matteo-CB/booki",
    coverStyle: getImagesStyle("p3.png"),
    techno: getTechno(0, 1),
    outils: getOutils(0, 2),
    methodologies: getMethodologies(5, 1),
    carousel: [
      getImagesCarousel("booki-c1.png"),
      getImagesCarousel("booki-c2.png"),
    ],
    description:
      "Un site pour une agence de voyage fictive, présentant des hébergements dans la ville recherchée. Réalisé avec HTML, CSS et mettant l'accent sur une expérience utilisateur accessible.",
  },

  {
    name: "API Meteo Python",
    url: "https://replit.com/@MatteoCB/projetmeteo",
    coverPublic: getImagesPublic("p5.png"),
    code: "https://replit.com/@MatteoCB/projetmeteo?v=1#defmeteo.py",
    coverStyle: getImagesStyle("p5.png"),
    techno: getTechno(12, 20),
    outils: getOutils(23),
    methodologies: getMethodologies(4),
    carousel: [
      getImagesCarousel("api-python-c1.png"),
      getImagesCarousel("api-python-c2.png"),
      getImagesCarousel("api-python-c3.png"),
      getImagesCarousel("api-python-c4.png"),
    ],
    description:
      "Une API météo écrite en Python, permettant d'obtenir les prévisions météorologiques pour une ville donnée. Utilisant les données de l'API OpenWeatherMap et offrant des fonctionnalités de recherche et d'affichage des résultats.",
  },
];
let i = 0;
Projects.forEach((project) => {
  Projects[i].id = i;
  i++;
});
function getUniqueItems(projects) {
  const allTechno = [];
  const allOutils = [];
  const allMethodologies = [];

  projects.forEach((project) => {
    allTechno.push(...project.techno);
    allOutils.push(...project.outils);
    allMethodologies.push(...project.methodologies);
  });

  const uniqueTechno = [...new Set(allTechno)];
  const uniqueOutils = [...new Set(allOutils)];
  const uniqueMethodologies = [...new Set(allMethodologies)];

  uniqueTechno.forEach((technos) => {
    const countTechno = allTechno.count(technos);
    howManyTimesUse.push(technos + " " + countTechno);
  });

  return {
    techno: uniqueTechno,
    outils: uniqueOutils,
    methodologies: uniqueMethodologies,
    All: {
      techno: getTechno(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21
      ),
      outils: getOutils(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ),
      methodologies: getMethodologies(0, 1, 2, 3, 4, 5),
    },
  };
}

export const uniqueItems = getUniqueItems(Projects);
