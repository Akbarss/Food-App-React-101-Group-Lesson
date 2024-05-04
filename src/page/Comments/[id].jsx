import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";

const CommentsById = () => {
  const { id } = useParams();
  const [commentsById, setCommentsById] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/`)
      .then((res) => res.json())
      .then((data) => setCommentsById(data));
  }, [id]);
  return (
    <Layout>
      {id}
      {commentsById && <img src={commentsById.url} />}
    </Layout>
  );
};

export default CommentsById;
