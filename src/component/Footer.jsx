const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* <!-- BrandName --> */}

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">BrandName</h2>
          <p className="text-sm leading-relaxed">
            Discover the best products, unparalleled service, and delightful
            experiences. Let us bring innovation to your everyday life.
          </p>
        </div>

        {/* <!-- Quick Links --> */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Support --> */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Contact Information --> */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@brandname.com" className="hover:underline">
              support@brandname.com
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-xl hover:text-yellow-400 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-xl hover:text-yellow-400 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-xl hover:text-yellow-400 transition"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-xl hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 text-gray-700 text-sm py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BrandName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
