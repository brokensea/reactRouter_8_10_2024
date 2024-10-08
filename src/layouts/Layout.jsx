import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Layout() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                {/* Outlet is where the child routes will be rendered */}
                <Outlet />
            </main>
        </>
    )
}