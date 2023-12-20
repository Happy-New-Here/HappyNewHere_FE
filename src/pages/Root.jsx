import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/common/Footer";
import { ResponsiveLayout, Leftside } from "../styles/utils";

const Root = () => {
  const navigation = useNavigation();

  return (
    <>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
      {/* <Leftside>
        <Footer />
      </Leftside> */}
    </>
  );
};

export default Root;
