import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import BuyNow from './Pages/BuyNow/BuyNow';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MoreCars from './Pages/Explore/MoreCars/MoreCars';
import Pay from './Pages/Pay/Pay';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/morecars">
            <MoreCars></MoreCars>
          </Route>
          <Route path="/pay">
            <Pay></Pay>
          </Route>
          <PrivateRoute path="/buynow/:buynowId">
            <BuyNow></BuyNow>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
