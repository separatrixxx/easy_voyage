import { HomePage } from "page_components/HomePage/HomePage";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { pageHelper } from 'helpers/pages.helper';


function Home(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [userType, setUserType] = useState<'guest' | 'owner'>('guest');

  useEffect(() => {
    pageHelper(router, setIsAuth, setUsername, setEmail, setUserType);
  }, [router]);

  if (isAuth) {
    return (
      <HomePage type={userType} />
    );
  } else {
    return (
      <></>
    );
  }
}

export default Home;
