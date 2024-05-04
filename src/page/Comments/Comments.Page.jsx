import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";

const Comments = () => {
  const [comment, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <Layout>
      {comment.map((i) => (
        <a href={`/comments/${i.id}`}>{i.title}</a>
      ))}
    </Layout>
  );
};

export default Comments;
