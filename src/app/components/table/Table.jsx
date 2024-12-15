import TableRow from "./TableRow";

const Table = ({ data, headers }) => {
    return (
        <table className="w-full text-left table-auto min-w-max bg-white">
            <thead>
                <tr>
                    {headers.map((header) => (
                        <th
                            key={header.key}
                            className="p-4 border-b border-slate-300 bg-slate-50"
                        >
                            <p className="block text-sm font-normal leading-none text-slate-500">
                                {header.title}
                            </p>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <TableRow key={index} row={row} headers={headers} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;

