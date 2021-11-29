import React, { FC, useState, useEffect } from "react";
import axios from "axios";
// interface IProps {
//   code: any;
// }

/**
 * @author
 * @function @useAuth
 **/

export default function useAuth({ code }: any) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRrefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios
      .post("http:/localhost:3001/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [code]);
}
