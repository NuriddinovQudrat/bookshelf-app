import { useBooks } from "../hooks";

const Layout = () => {
  const { data } = useBooks();

  console.log(data);

  return <div>Layout</div>;
};

export default Layout;
