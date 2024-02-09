type header = {
    display: string,
    key: string,
}

type tableProps = {
    headers: header[],
    data: any,
}

export const Table = ({
    headers,
    data
}: tableProps) => {
    if(!data) return <></>
    return (
        <div className="w-full h-full overflow-scroll">
            <table className="table-auto text-sm text-left">
                <thead>
                    <tr>
                        {
                            headers.map((head: header, idx: number) => (
                                <th key={`header-${idx}`} scope="col" className="p-2">
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
                                        <td key={`col-${idxi}`} className='break-all p-2'>
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