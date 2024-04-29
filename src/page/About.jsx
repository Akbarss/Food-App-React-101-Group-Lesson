import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../components/layout/layout";

const About = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <Layout>
      <h1>About Page</h1>
      {photos.map((i) => (
        <>
          <NavLink to={`/about/${i.id}`}>
            <h4>{i.title}</h4>
          </NavLink>
        </>
      ))}
    </Layout>
  );
};

export default About;
