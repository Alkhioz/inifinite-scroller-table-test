import { useCallback, useEffect, useRef, useState } from 'react';
import { useData } from '../hooks/usedata.hook';
import { Table } from './table/table.component';
import { debounce } from '../utils/debounce';

function MainPage() {
  const scrollController = useRef<any>(null);
  const page = useRef<number>(1);
  const MAX_NUMBER = 10;
  const [ cachedItems, setCachedItems ] = useState<any>([]);
  const {
    fetch,
    data,
    isError,
    isPending
  } = useData();

  const doFetch = () => {
    fetch({
      page: page.current,
      maxNumber: MAX_NUMBER,
    });
  }

  const updatePage = () => {
    page.current = page.current + 1;
  }

  const optimizedFetch = useCallback(debounce(doFetch), []);
  const optimizedUpdatePage = useCallback(debounce(updatePage), []);

  useEffect(() => {
    optimizedFetch();
  }, []);

  useEffect(()=>{
    if(!isError && !isPending && data){
      setCachedItems([
        ...cachedItems,
        ...data,
      ]);
    }
  }, [data, isPending, isError]);

  const handleScroll = () => {
    if(!scrollController.current) return;
    const { scrollTop, clientHeight, scrollHeight } = scrollController.current;
    const currentPosition = Math.round(scrollTop + clientHeight);
    const flag = scrollHeight - (currentPosition*0.2);
    if(currentPosition >= flag){
      optimizedUpdatePage();
      optimizedFetch();
    }
  }

  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-full flex flex-col justify-center items-center p-2 gap-2'>
        <h1>Infinite scroll table</h1>
        <div className='w-full h-full max-w-screen-xl max-h-96 bg-white text-black relative overflow-hidden'>
          <Table
            headers={[
              {
                display: 'ID',
                key: 'id'
              },
              {
                display: 'UUID',
                key: 'uuid'
              },
              {
                display: 'NAME',
                key: 'name'
              },
              {
                display: 'LAST NAME',
                key: 'lastName'
              },
              {
                display: 'INITIAL DATE',
                key: 'initialDate'
              },
              {
                display: 'FINAL DATE',
                key: 'finalDate'
              },
              {
                display: 'DESCRIPTION',
                key: 'description'
              },
              {
                display: 'TOTAL DEBT',
                key: 'totalDebt'
              },
            ]}
            data={cachedItems}
            scrollController={scrollController}
            handleScroll={handleScroll}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage
