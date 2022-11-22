import Header from '../../common/Header';
import AddListing from '../AddListing/Index';
import Expanded from '../Expanded';
import Marketplace from '../Marketplace';
import ProfileAdvertiser from '../Profile/ProfileAdvertiser';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import WalletAdvertiser from '../WalletAdvertiser';
import WalletPublisher from '../WalletPublisher';
import CommonPopup from '../../common/Popup';
import Cart from '../Cart';

import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path='/' exact element={<Marketplace />}/>
          <Route path='/expand/:id' exact element={<Expanded />}/>
          <Route path='/sign-in' exact element={<SignIn />}/>
          <Route path='/sign-up' exact element={<SignUp />}/>
          <Route path='/profile' exact element={<ProfileAdvertiser />}/>
          {/* <Route path='/marketplace' exact element={<ProfileAdvertiser />}/> */}
        {/* <Expanded/> */} 
        {/* <WalletPublisher /> */}
        {/* <WalletAdvertiser /> */}
        {/* <ProfileAdvertiser /> */}
        {/* <AddListing /> */}
        {/* <CommonPopup title='Reset Your Password' input1='Registered Email' input2="Confirm It" buttonText='Submit' /> */}
        {/* <Cart /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
