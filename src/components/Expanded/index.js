import React, { useEffect, useState } from 'react';
import './Expanded.scss';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from '../../axios';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Expanded = () => {
    
    // const cookies = new Cookies();
    // const navigate = useNavigate();
    // const [userId, setUserId] = useState();
    // // const { id } = useParams();

    // const [displayData, setDisplayData] = useState({});

    // useEffect(()=>{
    //     const auth = cookies.get('auth-token');
    //     // if(!auth){
    //     //     navigate('/sign-in');
    //     // }
    //     axios.post('/api/user/get-user-by-token',{},{
    //         headers:{
    //             Authorization: 'Bearer ' + auth
    //         }
    //     }).then(res=>{
    //         if(!res.data.success){
    //             navigate('/sign-in');
    //         }
    //         setUserId(res.data.user._id);
    //     }).catch(err=>{
    //         console.log(err,'err');
    //         navigate('/sign-in');
    //     })
    // }, []);

    // const {id} = useParams();

    // useEffect(()=>{
    //     if(userId){
    //         axios.get(`/api/listing/get-all?userId=${userId}&offerTitle=${id}`
    //         ).then(res=>{
    //             setDisplayData(res.data.data[0]);
    //             console.log(res.data.data);
    //         }).catch(err=>{
    //             console.log(err,'err');
    //         });
    //     }
    // },[userId]);

    const [displayData, setDisplayData] = useState({});

    const cookies = new Cookies();
    const navigate = useNavigate();
    const [userId, setUserId] = useState();
  
    useEffect(() => {
      const auth = cookies.get("auth-token");
      if (!auth) {
        navigate("/sign-in");
      }
      axios
        .post(
          "/api/user/get-user-by-token",
          {},
          {
            headers: {
              Authorization: "Bearer " + auth,
            },
          }
        )
        .then((res) => {
          if (!res.data.success) {
            navigate("/sign-in");
          }
          setUserId(res.data.user._id);
        })
        .catch((err) => {
          console.log(err, "err");
          navigate("/sign-in");
        });
    }, []);
  
    const { id } = useParams();
  
    useEffect(() => {
      if (userId) {
        axios
          .get(`/api/listing/get-all?userId=${userId}&offerTitle=${id}`)
          .then((res) => {
            setDisplayData(res.data.data[0]);
            console.log(res.data.data);
          })
          .catch((err) => {
            console.log(err, "err");
          });
      }
    }, [userId]);
  

    if(displayData){
        return (
            <div className='expanded'>
                <div className='back'>
                    <span><ArrowBackIcon/></span>
                    <span onClick={()=>navigate('/')}>Continue Shopping</span>
                </div>
                <div className='mainExp'>
                    <div className='left'>
                        <div className='headExp'>
                            <span className='image'></span>
                            <span>{displayData.offerTitle}</span>
                        </div>
                        <span className='data'>Todayq News is an online Cryptocurrency News, Analysis & Blockchain platform focused on covering daily happenings in the cryptocurrency and blockchain space. The website is presenting the latest developments from the market, offering a clear view of the performance and dynamics of Blockchain, Bitcoin, Ethereum, and other cryptocurrency projects.</span>
                        <div className='price'>
                            <span className='amount'>{displayData?.price?`$${displayData?.price}`:"$200"}</span>
                            <span ><AddCircleOutlineIcon/></span>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='row'>
                            <span className='head'>Website</span>
                            <span className='data'>{displayData.websiteLink}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Visitors</span>
                            <span className='data'> {displayData?.visitors}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Twitter</span>
                            <span className='data'>{displayData.twitter}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Facebook</span>
                            <span className='data'>{displayData.facebook}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>LinkedIn</span>
                            <span className='data'>{displayData.linkedin}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Do-Follow Links</span>
                            <span className='data'>{displayData.doFollowLinkAllowed ? 'true' : 'false'}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>No-Follow Links</span>
                            <span className='data'>{displayData.noFollowLinkAllowed ? 'true' : 'false'}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Google news</span>
                            <span className='data'>{displayData.googleNews}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Indexed Article</span>
                            <span className='data'>{displayData.indexedArticle}</span>
                        </div>
                        <div className='row'>
                            <span className='head'>Social Share</span>
                            <span className='data'>{displayData.socialShare}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (<h2>No Data Found</h2>)
}

export default Expanded;