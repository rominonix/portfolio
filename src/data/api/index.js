import axios from "axios";


export default async function fetchData(API_PATH) {
    //Client ID, Client Secret och API URL
    // const CLIENT_ID = "OAuth2.u3780.h1490";
    // const CLIENT_SECRET = "ae13a545-1d62-4064-9f1";
    // const API_URL = "https://alpha.easyweb.se/extapi/3780/";

    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
    const API_URL = process.env.REACT_APP_API_URL;
  
    const AUTH =
        "Basic " +
        Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");

    const FULL_URL = API_URL + API_PATH + "?includeProperties=label,value,id"; // adds the route to url

    // Ex. Get token (needed for api)
    

    const getToken = async (CLIENT_ID, CLIENT_SECRET) => {
        const RAW_URL = API_URL.split("/extapi/")[0];
        const tokenResponse = await fetch(RAW_URL + "/connect/token", {
            method: "POST",
            headers: {
                Authorization: AUTH,
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:
                "client_id=" +
                CLIENT_ID +
                "&client_secret=" +
                CLIENT_SECRET +
                "&grant_type=client_credentials&scope=Easyweb.ExternalApi",
        });


        const tokenObject = await tokenResponse.json();

        // Store token and measure when new is needed with help of this (seconds)
        const expiresIn = tokenObject.expires_in;
        return tokenObject.access_token;
    };

    const token = await getToken();

    // Ex. Call with token
    const apiCall = async () => {
        const apiResponse = await axios(FULL_URL, {
            headers: { Authorization: "Bearer " + token },
        });
        return await apiResponse.data;
    };

    // ex. Fetch data from external API
    const data = await apiCall();
    return data;
}
