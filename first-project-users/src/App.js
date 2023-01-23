import UserForm from "./components/UserForm";
import {useState} from "react";
import UserList from "./components/UserList";

function App() {
    const [users, setUsers] = useState([]);

    const onUserAdd = (user) => {
        setUsers([...users, user]);
    }
    return (
        <div>
            <UserForm onUserAdd={onUserAdd}/>
            <UserList users={users}/>
        </div>
    );
}

export default App;
