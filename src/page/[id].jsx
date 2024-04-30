import { useParams } from "react-router-dom";
import Layout from "../components/layout/layout";

const FoodById = () => {
  const { id } = useParams();

  return <Layout>{id}</Layout>;
};

export default FoodById;
