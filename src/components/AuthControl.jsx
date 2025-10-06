import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../feature/auth/AuthSlice';

const AuthControl = () => {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.auth);

    const handlelogin = () => {
        const userData = { name: "John Doe", email: "test@gmail.com" }
        dispatch(login(userData));
    }

  return (
    <div>
        {
            isLoggedIn ? (
                <div
                    style={{
                        display: "flex",              
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",     
                    }}
                >
                    <h3>Welcome {user.name}!</h3>
                    <h3>{user.email}</h3>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",              
                        alignItems: "center",
                        flexDirection: "column",     
                    }}
                >
                    <h2>Please log in !</h2>
                    <button onClick={handlelogin}>Login</button>
                </div>
            )   
        }
    </div>
  )
}

export default AuthControl