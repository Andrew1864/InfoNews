
interface TextCellProps {
    value: string
}

const TextCell:React.FC<TextCellProps> = ({ value }) => {
    return (
        <td className="p-4 border-b border-slate-200">
            <p className="block text-sm text-slate-800">{value}</p>
        </td>
    );
};

export default TextCell;
