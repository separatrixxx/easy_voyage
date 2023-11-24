import { MainPage } from "page_components/MainPage/MainPage";
import { indexPageHelper } from 'helpers/pages.helper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


function Main(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    indexPageHelper(router, setIsAuth);
  }, [router]);

  if (!isAuth) {
    return (
      <MainPage />
    );
  } else {
    return (
      <></>
    );
  }
}

export default Main;
