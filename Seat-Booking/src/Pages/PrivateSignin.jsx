import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateBookRoute() {
  const { isCurrentUser } = useSelector((state) => state.initialSlice);

  return isCurrentUser ? <Outlet /> : <Navigate to={"/"} />;
}

export const PrivateSignInRoute = () => {
  const { isCurrentUser } = useSelector((state) => state.initialSlice);

  if (!isCurrentUser) {
    return <Outlet />;
  }


  if (isCurrentUser) {
    return <Navigate to="/book" />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateSignInRoute;
