import { NavLink } from "react-router-dom";

function NoMatch() {
    return (
        <>
            <div>
                <h2>Nothing to see here</h2>
                <p>
                    <NavLink to="/">
                        Go to the Home Page
                    </NavLink>
                </p>
            </div>
        </>
    )
}

export default NoMatch;