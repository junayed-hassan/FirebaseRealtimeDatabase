import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router";

export default function Private() {
    const authUser = useSelector((state) => state.auth);
    const navigate = useNavigate();

    if (!authUser.isLogin) {
        return <Navigate to={"/login"} />;
    }

    if (authUser.isLogin && authUser.user.role != "admin") {
        navigate("/");
    }

    if (authUser.isLogin && authUser.user.role == "admin") {
        return <Outlet />;
    }

    // return <Outlet />;
}
