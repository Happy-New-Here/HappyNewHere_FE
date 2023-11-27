import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/common/Footer";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
