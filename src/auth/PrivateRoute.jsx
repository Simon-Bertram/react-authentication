import { Route, redirect } from "react-router-dom";

const PrivateRoute = props => {
  const user = null;

  if (!user) { return redirect('login'); }

  return <Route {...props} />

}
 
export default PrivateRoute;