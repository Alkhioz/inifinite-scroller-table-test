import { MutableRefObject } from "react"

type header = {
    display: string,
    key: string,
}

type tableProps = {
    headers: header[],
    data: any,
    scrollController: MutableRefObject<any>,
    handleScroll: ()=>void,
}

export const Table = ({
    headers,
    data,
    scrollController,
    handleScroll,
}: tableProps) => {
    if(!data || data.length === 0) return <></>
    return (
        <div 
            className="w-full h-full overflow-scroll"
            ref={scrollController}
            onScroll={handleScroll}
        >
            <table className="table-auto text-sm text-left">
                <thead>
                    <tr>
                        {
                            headers.map((head: header, idx: number) => (
                                <th key={`header-${idx}`} scope="col" className="bg-black text-white p-2">
                                    {head.display}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((elm: any, idx: number) => (
                            <tr key={`body-${idx}`}>
                                {
                                    headers.map((header: header, idxi: number) => (
                                        <td key={`col-${idxi}`} className='break-all p-2 min-w-8'>
                                            {elm[header.key]}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}