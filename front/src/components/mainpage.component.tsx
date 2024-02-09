import { useEffect } from 'react';
import { useData } from '../hooks/usedata.hook';

function MainPage() {
  const {
    fetch,
    data,
    isError,
    isPending
  } = useData();
  console.log({
    data,
    isError,
    isPending
  });
  useEffect(()=>{
    fetch({
      page:1,
      maxNumber:10,
    });
  }, []);

  return (
    <>hola</>
  )
}

export default MainPage
