import React from "react";

const Footer = () => {
  return (
    <footer className="px-6 py-4 bg-white">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="mb-4 text-md font-bold">Resources</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Running Shoe Finder</li>
            <li>Product Advice</li>
            <li>Send Us Feedback</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-md font-bold">Get Help</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-md font-bold">Company</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
            <li>Impact</li>
            <li>Report a Concern</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

