import Books from "../Books/Books";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router";
import { Helmet } from "react-helmet-async";

const Home = () => {

    const books = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Books books = {books}></Books>
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>
    );
};

export default Home;