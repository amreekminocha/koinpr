import './Header.scss';

const Header = () =>{
    return (
        <div className='header'>
            <div className='left'>
                <span className='heading'>Koinpr</span>
                <span className='subHeading'>A <b>Todayq</b> Product</span>
            </div>
            <div className='right'>
                <span>Publishers</span>
                <span>My Account</span>
                <span>Sign Out</span>
            </div>
        </div>
    );
};

export default Header;