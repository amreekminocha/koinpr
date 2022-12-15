import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

function UserAuthentication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [userId, setUserId] = useState(null);
  //   useEffect(() => {
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
      //   setUserId(res.data.user._id);
      dispatch(authenticatedUserDetails(res.data.user));
    })
    .catch((err) => {
      console.log(err, "err");
      navigate("/sign-in");
    });
  //   }, [userId]);
}

export { UserAuthentication };
