import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div id="footer" className="bg-[#191919] py-36">
            <div className="footer-content w-10/12 mx-auto">
                <footer className="footer pb-12 text-white justify-between">
                    <nav className="grid gap-6">
                        <h1 className="text-2xl font-extrabold">Book Vibe</h1>
                        <p>Find and read more books you'll love,<br/>and keep track of the books you want to read.</p>
                        <nav className="md:place-self-center md:justify-self-start">
                            <div className="grid grid-flow-col gap-4">
                                <a><FaFacebook className="text-2xl" /></a>
                                <a><FaTwitter className="text-2xl" /></a>
                                <a><FaInstagram className="text-2xl" /></a>
                            </div>
                        </nav>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Support</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Contact</h6>
                        <a>524 Broadway, NYC</a>
                        <a>+880 1584 525489</a>
                    </nav>
                </footer>
                <footer className="footer pt-12 border-t text-white border-[#ffffff1A] grid justify-between">

                    <p>2024 Book Vibe | All Rights Reserved</p>
                    <p>Powered by Book Vibe</p>
                </footer>
            </div>
        </div>
    );
};

export default Footer;