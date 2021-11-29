import React, { FC } from "react";
import { Container } from "react-bootstrap";
//space is %20
//word wrap
//alt z
//?after endpoint for our params
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=d85bfe356da5407ba7eab2e2c4504cf9&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

interface IProps {}

export const Login: FC<IProps> = (props) => {
  return (
    <div>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a className="btn btn-success btn-lg" href={AUTH_URL}>
          Login with Spotify
        </a>
      </Container>
    </div>
  );
};
