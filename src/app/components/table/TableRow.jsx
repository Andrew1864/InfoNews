import TextCell from "./TextCell";

const TableRow = ({ row, headers }) => {
    return (
        <tr className="hover:bg-slate-50">
            {headers.map((header) => (
                <TextCell key={header.key} value={row[header.key]} />
            ))}
        </tr>
    );
};

export default TableRow;