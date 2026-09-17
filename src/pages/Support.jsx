import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Support = () => {
  return (
    <section className="mt-[35px] sm:mt-20 py-[150px] px-4 sm:px-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold text-center text-cyan-400 mb-12">
        Support Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Donate Section */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Make a Donation
          </h2>
          <p className="text-gray-400 mb-6">
            Your contributions help us continue creating innovative projects and
            delivering high-quality content. Every donation, big or small, makes
            a difference!
          </p>
          <a
            href="https://www.paypal.com/donate/?business=TTT2WWDAR887W&no_recurring=0&item_name=Helping+us+raise+awareness+of+sciences+and+arts.+We+aim+to+advance+into+research+and+development+about+neural+engineering.&currency_code=USD" // <-- your Stripe payment link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Donate Now
          </a>
        </div>

        {/* Share Section */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Share Our Mission
          </h2>
          <p className="text-gray-400 mb-6">
            Help us grow by sharing our work with your friends, family, and
            colleagues. Spread the word on social media and let others know
            about our mission!
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/jdproductionz4L/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-3xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://x.com/productionz_jd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-3xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/jd.productionz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-3xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-david-diaz-villarreal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2Veb1NJoQ9GAyk3hRa8xeA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Volunteer Section */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Volunteer with Us
          </h2>
          <p className="text-gray-400 mb-6">
            Join our team and contribute your skills to help us grow. Whether
            you're a developer, designer, or marketer, we’d love to have you on
            board!
          </p>
          <a
            href={`mailto:prodjd@gmail.com?subject=Volunteer%20Interest&body=Hello,%0D%0A%0D%0AI am 
              interested in volunteering with your organization. Please let me know
               how I can help!%0D%0A%0D%0AThank you.%0D%0A%0D%0AMy talents are: [TYPE IN HERE]`}
            className="inline-block px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            // (URL Encoding) ASCII, %0D%0A represents the carriage return (CR) and line feed (LF) characters
          >
            Become a Volunteer
          </a>
        </div>

        {/* Partner Section */}
        <div className="p-6 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            Partner with Us
          </h2>
          <p className="text-gray-400 mb-6">
            Collaborate with us to create impactful projects. We’re always
            looking for like-minded organizations to work with and make a
            difference together.
          </p>
          <a
            href={`mailto:prodjd@gmail.com?subject=Partnership%20Opportunity&body=Hello,%0D%0A%0D%0AI am interested in partnering with your organization. Please let me know how we can collaborate!%0D%0A%0D%0AThank you.%0D%0A%0D%0A`}
            className="inline-block px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Partner with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;
