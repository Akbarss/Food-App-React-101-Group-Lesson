import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../../components/layout/layout";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <Layout>
      {photos.map((i) => (
        <Box display={"flex"} gap={20} flexWrap={"wrap"}>
          <Avatar src={i.url} />
          <NavLink to={`/photos/${i.id}`}>{i.title}</NavLink>
        </Box>
      ))}
    </Layout>
  );
};

export default Photos;
