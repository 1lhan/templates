import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/'>Templates</NavLink>
                <NavLink to='/filter-page'>Filter Page</NavLink>
            </nav>
        </header>
    )
}