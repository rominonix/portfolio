import fetchData from "../api";

export const getMenu = () => async (dispatch) => {
  try {
    // const data = await fetchData("load/menu");
    const data = [
      {
        refLinkable: {
          label: "Projects",
          parentId: 51951,
          webModuleId: 40,
          urlname: "projects",
          url: "/projects",
          color: 0,
          orderBy: 1,
          showDate: "2021-09-22T15:53:00+02:00",
          edited: "2021-09-22T15:54:52.8556859+02:00",
          created: "2021-09-22T15:53:59.5917438+02:00",
          online: true,
          id: 53189,
        },
        refObjectId: 53189,
        refWebModuleId: 40,
        value: "/projects",
        children: [],
        label: "Projects",
        parentId: 0,
        level: 1,
        locked: false,
        orderBy: 1,
        current: false,
        id: 80624,
      },
      {
        refLinkable: {
          label: "About",
          parentId: 51951,
          webModuleId: 40,
          urlname: "about",
          url: "/about",
          color: 0,
          orderBy: 3,
          showDate: "2021-09-29T12:15:00+02:00",
          edited: "2021-09-29T12:15:54.3835255+02:00",
          created: "2021-09-29T12:15:54.3835285+02:00",
          online: true,
          id: 53785,
        },
        refObjectId: 53785,
        refWebModuleId: 40,
        value: "/about",
        children: [],
        label: "About",
        parentId: 0,
        level: 1,
        locked: false,
        orderBy: 0,
        current: false,
        target: "",
        id: 80625,
      },
      {
        refLinkable: {
          label: "Contact",
          parentId: 51951,
          webModuleId: 40,
          urlname: "contact",
          url: "/contact",
          color: 0,
          orderBy: 2,
          showDate: "2021-09-29T12:13:00+02:00",
          edited: "2021-09-29T12:13:37.5756902+02:00",
          created: "2021-09-29T12:13:30.711+02:00",
          online: true,
          id: 53784,
        },
        refObjectId: 53784,
        refWebModuleId: 40,
        value: "/contact",
        children: [],
        label: "Contact",
        parentId: 0,
        level: 1,
        locked: false,
        orderBy: 2,
        current: false,
        id: 81295,
      },
    ];
    dispatch({ type: "FETCH_MENU", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
