import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

interface User {
    id: number;
    name: string;
}

const AutoCompleteWithDebounce = () => {
    const [query, setQuery] = useState<string>("")
    const [users, setUsers] = useState<User[]>([])
    const [filteredUsers, setFilteredUsers] = useState<User[]>([])
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers()
    }, [])

    useEffect(() => {
        if (debouncedQuery) {
            const filtered = users.filter(user => user.name.toLowerCase().includes(debouncedQuery.toLowerCase()));
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers([]);
        }
    }, [debouncedQuery, users])

    return (
        <div className="flex  flex-col p-8 w-[300px] mx-auto gap-4">
            <input type='text' onChange={(event) => setQuery(event.target.value)} value={query} className="w-full p-2 border border-gray-300 rounded" placeholder="Search user by name..." />
            {filteredUsers?.map((user: User) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    )

}

export default AutoCompleteWithDebounce;
