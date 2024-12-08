import TableRow from "./TableRow";


const Table = ({ headers }) => {

    return (
        <table className="w-full text-left table-auto min-w-max">
            {headers?.map((header) => (
                <th key={header?.key}
                    className="p-4 border-b border-slate-300 bg-slate-50">
                    <p className="block text-sm font-normal leading-none text-slate-500">
                        {header?.title}
                    </p>
                </th>
            ))}
            <TableRow />
        </table>
    );

};

export default Table;

