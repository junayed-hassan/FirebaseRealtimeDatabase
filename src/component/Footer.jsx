const Footer = () => {
    return (
        <footer className="bg-[#0F3460] text-white">
            <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Brand Section */}
                <div>
                    <h2 className="text-xl font-bold text-red-500 mb-4">
                        Bonik
                    </h2>
                    <p className="text-sm mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor libero id et gravida. Sit diam duis mauris nulla
                        cursus. Erat et lectus vel ut sollicitudin elit at amet.
                    </p>
                </div>

                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">About Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Our Stores
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Our Cares
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Customer Care */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Customer Care
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                How to Buy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Track Your Order
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Corporate & Bulk Purchasing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:underline">
                                Returns & Refunds
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <address className="not-italic text-sm space-y-2">
                        <p>
                            70 Washington Square South, New York, NY 10012,
                            United States
                        </p>
                        <p>
                            Email:{" "}
                            <a
                                href="mailto:ui.lib.help@gmail.com"
                                className="hover:underline"
                            >
                                ui.lib.help@gmail.com
                            </a>
                        </p>
                        <p>Phone: +1 112 3456 780</p>
                    </address>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-xl hover:text-gray-300">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-gray-300">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-gray-300">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-gray-300">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="text-xl hover:text-gray-300">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
