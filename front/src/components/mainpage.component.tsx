import { useEffect } from 'react';
import { useData } from '../hooks/usedata.hook';
import { Table } from './table/table.component';

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
  useEffect(() => {
    fetch({
      page: 1,
      maxNumber: 10,
    });
  }, []);

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
            data={data}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage
