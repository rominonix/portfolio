// import fetchData from "../api";
export const getHome = () => async (dispatch) => {
  try {
    // const data = await fetchData("routes");
    const data = {
      label: "Start",
      urlname: "",
      viewKey: "Home",
      id: 51950,
      heroHeader: {
        label: "Hero",
        heroProgrammer: {
          label: "Huvudrubrik",
          id: 510220,
          value: "Programmer",
        },
        heroAnd: { label: "Huvudrubrik", id: 510180, value: "&" },
        heroDesigner: { label: "Huvudrubrik", id: 510221, value: "designer" },
        heroTitle: { label: "Rubrik", id: 510181, value: "Romina Rebolledo" },
        id: 501727,
      },
      projectsSection: {
        label: "My project",
        projectPresentation: {
          label: "Huvudrubrik",
          id: 510743,
          value: "Projects",
        },
        subtitle: { label: "Subtitle", id: 528780, value: "Nice!" },
        projectDescription: {
          label: "Beskrivning (textarea)",
          id: 510744,
          value:
            "Good, that we continue together on this little trip through my site. Here you can see some of my javascript and typescript projects. They are all different and range from Backend projects such as REST Apis, Frontend, Full Stack in which I also include interface design. You can find projects in vanilla, others with frameworks such as Vue.js, React.js, React-native and other applications with Express, Firebase among others.",
        },
        projectLink: {
          label: "Projects",
          id: 510748,
          value: "https://romina-portfolio.easyweb.site/projects",
        },
        projects: [
          //e-wallet
          {
            label: "Sektion",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 501199,
              value: "E-",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511152,
              value: "Wallet",
            },
            projectImg: {
              label: "e-wallet",
              id: 512644,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752951.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512672,
              value:
                "This is a project written in Javascript and Vue.js. It is a simulation in which you can create and delete different credit cards in a virtual wallet.",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              // id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              // id: 512823,
              value: "https://github.com/rominonix/e-wallet-VUE",
            },
            id: 501198,
          },
          //trollskogen
          {
            label: "Sektion",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 501202,
              value: "Troll",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511153,
              value: "Skogen",
            },
            projectImg: {
              label: "trollskogen",
              id: 512645,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752952.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512674,
              value:
                "As I love the Swedish forest and nothing better than doing a little project in which to make a play on words and take advantage of cheating a little 😎. This is a Backend project with Javascript, Express, SQlite and Faker. Here you can create 10 fake profiles per day for various uses.",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              // id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              // id: 512823,
              value: "https://github.com/rominonix/e-wallet-VUE",
            },
            id: 501201,
          },
          //beer-project
          {
            label: "Sektion",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 502135,
              value: "Beer",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511154,
              value: "Project",
            },
            projectImg: {
              label: "beer-p",
              id: 512646,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752953.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512675,
              value:
                "Many of us love beers and why not interact with Punki Api to choose a different beer every day. In this project I wrote it in javascript interacting directly with the DOM. Every time you click on the random button, you get a different beer and by clicking on it you can see all its details. Skål 🍻!",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              // id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              // id: 512823,
              value: "https://github.com/rominonix/backend-trollskogen",
            },
            id: 502134,
          },
          //sinus
          {
            label: "Project",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 502408,
              value: "Sinus",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511155,
              value: "Webbshop",
            },
            projectImg: {
              label: "sinus2",
              id: 512647,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752954.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512676,
              value:
                "Sinus is a skateboard webshop built in Javascript, Vue.js Vuex. It is a project designed and inspired by the artist and skater The Gonz (Mark Gonzáles).",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              id: 512823,
              value: "https://github.com/rominonix/e-wallet-VUE",
            },
            id: 502407,
          },

          {
            label: "Project",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 502408,
              value: "Sinus",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511155,
              value: "Webbshop",
            },
            projectImg: {
              label: "sinus2",
              id: 512647,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752954.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512676,
              value:
                "Sinus is a skateboard webshop built in Javascript, Vue.js Vuex. It is a project designed and inspired by the artist and skater The Gonz (Mark Gonzáles).",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              id: 512823,
              value: "https://github.com/rominonix/e-wallet-VUE",
            },
            id: 502407,
          },

          {
            label: "Project",
            projectTitle: {
              label: "Textrad (textbox)",
              id: 502408,
              value: "Sinus",
            },
            projectSubtitle: {
              label: "Textrad (textbox)",
              id: 511155,
              value: "Webbshop",
            },
            projectImg: {
              label: "sinus2",
              id: 512647,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/752954.png",
            },
            projectSingleDescription: {
              label: "Beskrivning (textarea)",
              id: 512676,
              value:
                "Sinus is a skateboard webshop built in Javascript, Vue.js Vuex. It is a project designed and inspired by the artist and skater The Gonz (Mark Gonzáles).",
            },
            projectVideo: {
              label: "Grabacio´n de pantalla 2021-09-16 a la(s) 11.24.30",
              id: 512822,
              value:
                "https://romina-portfolio.easyweb.site/upl/files/178090.mp4",
            },
            linkToCode: {
              label: "Extern links",
              id: 512823,
              value: "https://github.com/rominonix/e-wallet-VUE",
            },
            id: 502407,
          },
        ],
        id: 501197,
      },
      aboutSection: {
        label: "About",
        aboutTitle: { label: "Huvudrubrik", id: 510818, value: "About" },
        aboutSubtitle: { label: "Rubrik", id: 510819, value: "Hi!" },
        aboutDescription: {
          label: "Beskrivning (textarea)",
          id: 502422,
          value:
            "I'm Romina, Javascript developer, designer and visual artist. For many years my work has moved between design, programming and art projects. During the last two years web development 👩‍💻 has taken the most important role. In the projects section 👆 you can see my featured projects in Javascript. I am Chilean-Swedish, I was born in Santiago and have lived in different countries. I currently live in Stockholm, a wonderful city that has the perfect balance between urban and nature 🌳.",
        },
        aboutImg: {
          label: "romi-portrait",
          id: 511841,
          value: "https://romina-portfolio.easyweb.site/upl/images/752633.png",
        },
        aboutContactTitle: {
          label: "Rubrik",
          id: 510840,
          value: "Stay in touch!",
        },
        aboutEmail: {
          label: "Textrad (textbox)",
          id: 510821,
          value: "rominarebolledo[at]gmail.com",
        },
        socialLinks: [
          {
            label: "Social",
            socialTitle: {
              label: "Textrad (textbox)",
              id: 511842,
              value: "LinkedIn",
            },
            aboutIcon: {
              label: "linke",
              id: 529476,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/758307.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 510879,
              value: "https://www.linkedin.com/in/rominarebolledo/",
            },
            id: 510876,
          },
          {
            label: "Social",
            socialTitle: {
              label: "Textrad (textbox)",
              id: 511843,
              value: "Instagram",
            },
            aboutIcon: {
              label: "insta",
              id: 529436,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/758300.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 510882,
              value: "https://www.instagram.com/corrientealterna/",
            },
            id: 510880,
          },
          {
            label: "Social",
            socialTitle: {
              label: "Textrad (textbox)",
              id: 511844,
              value: "Github",
            },
            aboutIcon: {
              label: "git",
              id: 529909,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/758340.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 511363,
              value: "https://github.com/rominonix",
            },
            id: 511361,
          },
        ],
        id: 502418,
      },
      skillsSection: {
        label: "Skills",
        skillsTitle: { label: "Huvudrubrik", id: 511444, value: "Skills" },
        skillSectionIcon: [
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511531,
              value: "Javascript",
            },
            skillsIcons: {
              label: "Js-logo",
              id: 530919,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759493.svg",
            },
            id: 511524,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511533,
              value: "html",
            },
            skillsIcons: {
              label: "html-logo",
              id: 531578,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759757.svg",
            },
            id: 511532,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511536,
              value: "css",
            },
            skillsIcons: {
              label: "css",
              id: 532405,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759761.svg",
            },
            id: 511535,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511539,
              value: "react",
            },
            skillsIcons: {
              label: "react-logo",
              id: 531572,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759657.svg",
            },
            id: 511538,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511542,
              value: "vue js",
            },
            skillsIcons: {
              label: "vue-logo",
              id: 531573,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759753.svg",
            },
            id: 511541,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 511545,
              value: "react native",
            },
            skillsIcons: {
              label: "react-logo",
              id: 531574,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759657.svg",
            },
            id: 511544,
          },
          {
            label: "skillSectionIcon",
            iconsTitles: {
              label: "Textrad (textbox)",
              id: 531576,
              value: "git",
            },
            skillsIcons: {
              label: "github-logo",
              id: 531577,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759472.svg",
            },
            id: 531575,
          },
        ],
        id: 510892,
      },
      contactSection: {
        label: "Contact",
        contactTitle: { label: "Huvudrubrik", id: 511557, value: "Contact" },
        contactSubtitle: { label: "Rubrik", id: 511558, value: "Write Me!" },
        contactDescription: {
          label: "Beskrivning (textarea)",
          id: 511559,
          value:
            "Well, here you can contact me if you want us to do a project together, or just write me to say hello and meet for a ☕ or 🍺 and talk about art, design and of course code 🤓.",
        },
        id: 511556,
      },
    };
    dispatch({ type: "FETCH_HOME", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
