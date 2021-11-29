import React, { FC } from "react";
import useAuth from "./useAuth";
interface IProps {
  code: any;
}

/**
 * @author
 * @function @
 **/

export const Dashboard: FC<IProps> = ({ code }) => {
  const accessToken = useAuth(code);
  return <div>{code}</div>;
};
