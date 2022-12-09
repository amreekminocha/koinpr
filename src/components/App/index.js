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
import Navbar from "../../common/Header/Navbar";
import SettingsComponent from "../rss/settings/Settings";
import NewsOpen from "../rss/newsOpen/NewsOpen";
import Update from "../rss/updateHardware/Update";
// import Cart from "../Cart/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <SettingsComponent /> */}
        {/* <NewsOpen /> */}
        <Update />
        {/* <Routes>
    
          <Route path="/" exact element={<MarketPlace />} />
       
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
       
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
