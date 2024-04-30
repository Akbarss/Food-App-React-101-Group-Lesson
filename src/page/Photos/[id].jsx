import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

const PhotosById = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, [id]);
  return (
    <Layout>
      {id}
      {photos && <h1>{photos.title}</h1>}
    </Layout>
  );
};

export default PhotosById;
