import Header from "../../common/Header";
// import AddListing from '../AddListing/Index';
// import Expanded from '../Expanded';
// import Marketplace from '../Marketplace';
// import ProfileAdvertiser from '../Profile/ProfileAdvertiser';
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import WalletAdvertiser from "../WalletAdvertiser/newWalletComponent/index";
import WalletPublisher from "../WalletPublisher";
import CommonPopup from "../../common/Popup";
import Cart from "../Cart";

import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketPlace from "../Marketplace/marketplace/MarketPlace";
import Expand from "../Expanded/expand/Expand";
// import WalletPublisher from "../WalletPublisher/walletPublisher/WalletPublisher";
// import ProfileAdvertiser from '../Profile/profileAdvertiser/ProfileAdvertiser';
import ProfileAdvertiser from "../Profile/ProfileAdvertiser";
// import WithdrawlPublisher from "../withdrawlPublisher/WithdrawlPublisher";
import WithdrawlPublisher from "../withdrawlPublisher/index";
import Popup from "../../common/Popup/popup/Popup";
import AddListing from "../AddListing/Index";
import Desktop from "../desktop/Desktop";
import { AlertDialog } from "../../common/alertDialogue/AlertDialog";
// import Cart from "../Cart/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/expand" exact element={<MarketPlace />} /> */}
          <Route path="/" exact element={<MarketPlace />} />
          {/* <Route path="/expand" exact element={<Expand />} /> */}
          <Route path="/expand/:id" exact element={<Expand />} />
          <Route path="/sign-in" exact element={<SignIn />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/wallet-publisher" exact element={<WalletPublisher />} />
          <Route
            path="/withdrawl-publisher"
            exact
            element={<WithdrawlPublisher />}
          />
          <Route
            path="/wallet-advertiser"
            exact
            element={<WalletAdvertiser />}
          />
          <Route path="/profile" exact element={<ProfileAdvertiser />} />
          <Route path="/add-listing" exact element={<AddListing />} />
          <Route
            path="/popup"
            exact
            element={
              <Popup
                title="Set New Password"
                name1="newPass"
                label1="Enter New Password"
                name2="confPass"
                label2="Confirm New Password"
                buttonText="Submit"
              />
            }
          />
          <Route path="/cart" exact element={<Cart />} />
          {/* <Route path='/profile' exact element={<ProfileAdvertiser />}/> */}
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
