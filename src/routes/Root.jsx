import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";

const Root = () => {
  return ( 
    <>
      <header>
        <NavBar />
      </header>
      <main>
          <Outlet />
      </main>
    </>
   );
}
 
export default Root;