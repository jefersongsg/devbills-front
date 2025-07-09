import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

const PrivateRouter = () => {
  const { authState } = useAuth();
  if (!authState.user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
export default PrivateRouter;
