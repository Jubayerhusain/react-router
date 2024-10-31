import { Outlet, useNavigation } from "react-router-dom";
import Header from "./../Header/Header";
const Home = () => {
  // for loading
  const navigation = useNavigation();
  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? (
        <span className="loading loading-bars loading-lg"></span>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default Home;
