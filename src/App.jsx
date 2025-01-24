import {UserProvider} from "./UserContext.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UpdateUser from "./components/UpdateUser.jsx";

export const App = () => {

    return(
     <div>
        <UserProvider>
            <UserProfile/>
            <UpdateUser/>
        </UserProvider>
     </div>
 )
}

