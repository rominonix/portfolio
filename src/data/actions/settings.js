import fetchData from "../api";

export const getSettings = () => async (dispatch) => {
  try {
    // const data = await fetchData("load/settings");
    const data = {
      id: 196397,
      label: "Settings",
      office: {
        label: "Kontor",
        name: { label: "Företagsnamn", id: 502209, value: "Romina Rebolledo" },
        phone: { label: "Telefon", id: 502210, value: "073 788 95 44" },
        mail: { label: "E-post", id: 502211, value: "hi@rominarebolledo.com" },
        postal: { label: "Postnummer", id: 502213, value: "11 242" },
        city: { label: "Stad", id: 502214, value: "Stockholm" },
        id: 502208,
      },
      socialMediaSection: {
        label: "Social Media",
        socialMedia: [
          {
            label: "Sektion",
            socialIcon: {
              label: "github-logo",
              id: 530880,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759472.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 511580,
              value: "https://www.instagram.com/corrientealterna/",
            },
            id: 511578,
          },
          {
            label: "Sektion",
            socialIcon: {
              label: "instagram-logo",
              id: 530858,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759468.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 511583,
              value: "https://www.instagram.com/corrientealterna/",
            },
            id: 511581,
          },
          {
            label: "Sektion",
            socialIcon: {
              label: "linke-logo",
              id: 530877,
              value:
                "https://romina-portfolio.easyweb.site/upl/images/759471.svg",
            },
            socialLink: {
              label: "Extern links",
              id: 511586,
              value: "https://www.instagram.com/corrientealterna/",
            },
            id: 511584,
          },
        ],
        id: 511575,
      },
      logo: {
        label: "Ro",
        id: 532406,
        value: "https://romina-portfolio.easyweb.site/upl/images/759812.svg",
      },
    };
    dispatch({ type: "FETCH_SETTINGS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
