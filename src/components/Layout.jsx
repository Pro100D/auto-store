import Header from "./Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
