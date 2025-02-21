import TextCell from "./TextCell";

interface Header {
    key: string;
    title: string;
}

interface TableRowProps {
    row: { [key: string]: any }; // Объект с данными для строки
    headers: Header[]; // Массив заголовков таблицы
}

const TableRow: React.FC<TableRowProps> = ({ row, headers }) => {
    return (
        <tr className="hover:bg-slate-50">
            {headers.map((header) => (
                <TextCell key={header.key} value={row[header.key]} />
            ))}
        </tr>
    );
};

export default TableRow;
