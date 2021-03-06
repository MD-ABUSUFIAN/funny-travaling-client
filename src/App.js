import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Home/Shared/NavBar/Navigation';
import Offering from './Pages/Home/Offering/Offering';
import OfferInfo from './Pages/Home/OfferInfo/OfferInfo';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import ContextProvider from './Context/ContextProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import VanueRentals from './Pages/Home/VENUE RENTALS/VanueRentals';
import Footer from './Pages/Home/Shared/Footer/Footer';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddedNewService from './Pages/AddedNewService/AddedNewService';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/travelOffer">
          <Offering></Offering>
        </Route>
        <PrivateRoute path="/offerInfo/:infoId">
          <OfferInfo></OfferInfo>
        </PrivateRoute>
        <Route path="/venuerentals">
         <VanueRentals></VanueRentals>
        </Route>
        <Route path="/about">
        <AboutUs></AboutUs>
        </Route>
        <Route path="/login">
         <Login></Login>
        </Route>
        <PrivateRoute path="/newservice">
         <AddedNewService></AddedNewService>
        </PrivateRoute>
        <PrivateRoute path="/manageOrder">
         <ManageOrder></ManageOrder>
        </PrivateRoute>
        <PrivateRoute path="/myorder">
         <MyOrder></MyOrder>
        </PrivateRoute>

        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
