import { useEffect, useState } from "react";
import axios from "axios";

export const Country = () => {
  const countriesUrl = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    var options = {
      method: "GET",
      url: "https://jgentes-crime-data-v1.p.rapidapi.com/crime",
      params: {
        startdate: "9/19/2015",
        enddate: "9/25/2015",
        long: "70.5076392",
        lat: "70.757815",
      },
      headers: {
        "x-rapidapi-host": "jgentes-Crime-Data-v1.p.rapidapi.com",
        "x-rapidapi-key": "3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return <h1>country</h1>;
};
export default Country;
