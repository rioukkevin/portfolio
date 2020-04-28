export default {
  data : {
    perso2020: {
      title: "Site Web personnel 2020",
      description: "C'est le site web sur lequel vous êtes actuellement. Je refais mon site web en 2020 pour deux raisons: premièrement, j'ai appris à travailler avec des nouvelles technologies (Vue) autant en profiter et secondo je suis devenu Freelance, il fallait donc mettre à jour mon portfolio :P",
      job: "Fullstack web development",
      technologies: [
        "Vuejs",
        "PWA",
        "Sass"
      ],
      colors: [
        "#000000",
        "#FFFFFF"
      ],
      details: [
        {
          type: "left",
          title: "Une évolution majeure",
          image: "perso2020/m1.webp",
          description: "Je travail depuis plus d'1 an avec Vuejs et Vuetify, Il était temps de mettre à jour mon site web avec ce que j'avais appris et en profiter pour apprendre à travailler avec des nouvelles choses. Je construit donc mon nouveau portfolio pour 2020 avec des nouvelles technologies et librairies."
        },
        {
          type: "right",
          title: "Mais pourquoi ?",
          image: "perso2019/m2.png",
          description: "J'ai développé ce site comme celui sur lequel vous êtes aujourd'hui pour accompagner mon CV, une feuille A4 c'est très limité, il manque souvent des informations. J'ai donc depuis 2016 un site en ligne qui parle de moi. Ce site me sert aussi de 'Sandbox', je teste des technologies (NodeJS), des méthodes (HOC) et toutes les choses qui me passent par la tête. Si ces tests sont concluant je travail avec dans mes missions de freelance"
        },
        {
          type: "left",
          title: "Il ne faut jamais s'arrêter",
          image: "perso2020/m3.webp",
          description: "Ce site web n'est pas encore une Rolls Royce des site web, il y a du travail ! Je travail encore sur le responsive du site, son référencement, son contenu, sa mise en page et très important sur les manières de le développer (Mise en place de HOC). Une fois la plus grosse partie réalisée, les sources seront disponibles sur mon Github pour faciliter la compréhension de celles-ci."
        }
      ]
    },
    perso2019: {
      title: "Site Web personnel 2019",
      description: "Ceci est un petit site web que j'ai développé pour me présenter",
      job: "Fullstack web development",
      technologies: [
        "NodeJS",
        "Ejs",
        "VanillaJS",
        "Express"
      ],
      colors: [
        "#401366",
        "#227fcd",
        "#011b32",
        "#d0b6d9"
      ],
      details: [
        {
          type: "left",
          title: "Des technologies sympathiques",
          image: "perso2019/m1.png",
          description: "Mon site web m'a permis de travailler plus avec NodeJS accompagné d'Express et EJS. Le défi de ce site web était de le faire 100% par moi, en réalité c'est 99%, j'utilise une librairie pour l'intégration des icônes dans le très long texte qui parle de moi."
        },
        {
          type: "right",
          title: "Mais pourquoi ?",
          image: "perso2019/m2.png",
          description: "J'ai développé ce site comme celui sur lequel vous êtes aujourd'hui pour accompagner mon CV, une feuille A4 c'est très limité, souvent il manque des informations, j'ai donc depuis 2016 un site en ligne qui parle de moi. Ce site me sert aussi de 'Sandbox', je teste des technologies (NodeJS), des méthodes (HOC) et toutes les choses qui me passent par la tête sur mon site web. Si ces tests sont concluant je travail avec dans mes missions de freelance"
        }
      ]
    },
    greevel: {
      title: "Greevel - Eco mobility project",
      description: 'Greevel est une application faites pendant "L\'english week" en M1 à MyDigitalSchool...',
      job: "Front web development",
      technologies: [
        "VueJS",
        "PWA",
        "Vuetify"      ],
      colors: [
        "#03f39c"
      ],
      details: [
        {
          type: "right",
          title: "I am Groot",
          image: "greevel/m1.webp",
          description: "toto"
        },
        {
          type: "left",
          title: "Un projet à durée déterminée",
          image: "greevel/m2.webp",
          description: "Greevel est un prototype fait pour un investisseur sur Angers. Celui-ci à veut une idée et un prototype d'application pour inciter les employés des entreprises en ville à utiliser des moyens de transports commun ou plus écologiques."
        },
        {
          type: "right",
          title: "Quelle particularité",
          image: "greevel/m3.webp",
          description: "Le tout à été fait en une semaine et en Anglais (L'english week), en quelques jours j'ai développé l'application en mode 'Quick and Dirty' pour présenter à l'investisseur en fin de semaine. Le prototype et l'idée associée à celui-ci ont été très bien accueillis, nous avons été élu équipe la plus professionnelle."
        }
      ]
    },
    pasquierFramework: {
      title: "Framework Web Pasquier",
      description: "Développement avec les guidelines d'un UX designer d'un framework web chez Pasquier. Basé sur le framework VueJS avec la librairie Vuetify, ce framework permet une harmonisation des applications au sein du SI Pasquier",
      job: "Front web development",
      technologies: [
        ""
      ],
      colors: [
        "#172665",
        "#ffdd00",
        "#2b9b53",
        "#c22129"
      ],
      details: []
    }

  },
  get(id){
    if(this.data[id]){
      let t = this.data[id]
      t.id = id
      return t
    }else{
      return null
    }
  },
  list(){
    return Object.keys(this.data)
  },
  previous(id){
    let index = this.list().indexOf(id)
    if(index == 0) index = this.list().length - 1
    else index -= 1
    let newId = this.list()[index]
    return this.get(newId)
  },
  next(id){
    let index = this.list().indexOf(id)
    if(index == this.list().length - 1) index = 0
    else index += 1
    let newId = this.list()[index]
    return this.get(newId)
  }
}