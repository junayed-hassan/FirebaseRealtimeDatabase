import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function Private() {
    const authUser = useSelector((state) => state.auth);

    if (!authUser.isLogin) {
        return <Navigate to={"/login"} />;
    }

    if (authUser.isLogin && authUser.user.role != "admin") {
        return "you are not admin, you are user";
    }

    if (authUser.isLogin && authUser.user.role == "admin") {
        return <Outlet />;
    }

    // return <Outlet />;
}
