import App from './App';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import {user, isAuthenticated, isLoading, useAuth0 } from "@auth0/auth0-react";
//import Auth from './Auth';

const PrivateRoute = () => <App />;
function Wrapper() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {loginWithRedirect} = useAuth0();
    if (isLoading) {
        //return <div>Loading ...</div>;
        console.log("Loading");
      }
    if(isAuthenticated){
        console.log("Loaded");
       /* return (
            
              <div>
                Loaded
              </div>
            );*/
    }
    return <button onClick={() => loginWithRedirect()}>Log In</button>;

}
export default Wrapper;
