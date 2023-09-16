import Header from './Header/Header';
import { Suspense } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;
