import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

function UserComponent() {
    const dispatch = useDispatch();
    const {user, loading, error} = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    
  return (
    <div>
        User List : 
        <ul>
            {
                user.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))
            }

        </ul>
    </div>
  );
}   

export default UserComponent;