import { useState } from "react";
import { useAppSelector } from "../store/hooks/useAppSelector"
import { useAppDispatch } from "../store/hooks/useAppDispatch";
import { addOption, clearOptions, deleteOption } from "../store/slices/optionsSlice";

interface Option {
    id: string | number;
    value: string;
}

const CrudReduxtoolkit = () => {
    const options = useAppSelector((state) => state.options.list) as Option[];
    const dispatch = useAppDispatch()
    const [newOption, setNewOption] = useState("")

    const handleAdd = () => {
        if (newOption.trim()) {
            dispatch(addOption({
                id: Date.now(), // Simple ID generation
                value: newOption
            }))
            setNewOption("")
        }
    }

    const clearAll = () => {
        dispatch(clearOptions())
    }
    const handleDelete = (id: number) => dispatch(deleteOption(id));
    console.log(options)

    return (
        <div className="p-8 text-center">
            <h2 className="text-2xl mb-4">ℹ️ Crud Redux Toolkit Page</h2>
            <select>
                {options?.map((opt: Option) => (
                    <option key={opt.id} value={opt.value}>
                        {opt.value}
                    </option>
                ))}
            </select>

            <div className="flex flex-col items-center justify-center gap-4 mt-4">
                <input type='text' placeholder="Add Option" value={newOption} onChange={(e) => setNewOption(e.target.value)} className="border p-2 rounded" />
                <div className="flex gap-4 mb-4">
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={clearAll}>Clear All</button>
                </div>
            </div>
            <ul>
                {options.map(opt => (
                    <li key={opt.id} className="flex items-center justify-center gap-3">
                        {opt.id} - {opt.value}
                        <button onClick={() => handleDelete(opt.id as number)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default CrudReduxtoolkit 