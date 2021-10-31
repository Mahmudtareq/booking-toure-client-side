import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import AboutUs from './components/About/AboutUs';
import Login from './components/LoginPage/Login';
import AuthProvider from './context/AuthProvider';
import AddService from './components/AddService/AddService';
import MyOrder from './components/MyOrder/Myorder';

import ShowAllServices from './components/ShowAllServices/ShowAllServices';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageOrder from './components/ManageOrder/ManageOrder';

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
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/manageOrder">
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/myOrder/:serviceId">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path ="/showAllServices">
            <ShowAllServices></ShowAllServices>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
    
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
