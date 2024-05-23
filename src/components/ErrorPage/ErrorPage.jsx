import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="h-screen grid justify-center items-center">
            <div id="error-page" className="text-center grid gap-4">
                <h1 className="text-3xl font-bold">Oops! No page found</h1>
                <NavLink to='/'><button className="btn">GO HOME</button></NavLink>
                <p>
                    <i>Error: {error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;