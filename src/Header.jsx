import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <h2>Templates</h2>
                <NavLink to='/filter-page'>Filter Page</NavLink>
            </nav>
        </header>
    )
}