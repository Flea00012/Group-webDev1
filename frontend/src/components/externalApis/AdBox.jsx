import React from 'react';
import { useEffect, useState } from 'react';

export default function AdBox() {
  //all the hooks for the data
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);

  //note status 0: means loading data, status 1: means data found, status 2: means data not found
  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(0);
        const endpoint =
          'https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'x-rapidapi-host': 'YelpAPIserg-osipchukV1.p.rapidapi.com',
            'x-rapidapi-key':
              'd70c9e5e82msh35a12910172eee3p17ef1ajsn98efe6dbc62a',
            'content-type': 'application/x-www-form-urlencoded',
          },
          body: {},
        });


        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        // const displayData = data.filter((value) => value.title === );

        console.log(`data : ${data}`);

        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }

      // here use the comparator to get the specific package id
    }
    fetchData();
  }, []);

  return (
    <div>
      {status === 0 ? <p>"Loading data"</p> : null}
      {status === 1 && information && { ...information }}
      {status === 2 ? <p>Sorry cannot get that info</p> : null}
    </div>
  );
}
