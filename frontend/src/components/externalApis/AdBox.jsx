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
        const endpoint = 'https://cat-fact.herokuapp.com';
        const response = await fetch(endpoint);

        // Once the information is downloaded we transformed it to json
        const data = await response.json();

        // const displayData = data.filter((value) => value.title === );

        console.log(`data : ${data}`);
        data.map((res) => console.log(res.facts));

        setInformation(data);
        setStatus(1);
      } catch (err) {
        setStatus(2);
        throw err;
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
