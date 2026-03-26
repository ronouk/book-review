import { NavLink, useNavigate } from "react-router";

const ErrorPage = () => {

    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center my-12">
            <div id="error-page" className="text-center grid gap-4">
                <img width={320} src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781625589910/the-comedy-of-errors-9781625589910_hr.jpg" alt="" />
                <h1 className="text-2xl font-bold">Oops! No page found</h1>
                <button onClick={() => navigate(-1)} className="btn">GO HOME</button>
            </div>
        </div>
    );
};

export default ErrorPage;