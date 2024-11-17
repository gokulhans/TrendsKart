import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Font Awesome Icons

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh]  p-8 gap-12">
      {/* Contact Form Section */}
      <div className="flex flex-col w-full lg:w-1/2 space-y-6 flex-grow">
        <h1 className="text-4xl font-semibold text-gray mb-6 text-center lg:text-left">
          Get in Touch
        </h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input
              className="border-2 border-black rounded-lg p-3 focus:outline-none focus:ring-0"
              placeholder="Your Name"
            />
            <Input
              className="border-2 border-black rounded-lg p-3 focus:outline-none focus:ring-0"
              placeholder="Your Email*"
              required
              type="email"
            />
          </div>
          <Input
            className="border-2 border-black rounded-lg p-3 focus:outline-none focus:ring-0"
            placeholder="Phone Number"
          />
          <Textarea
            className="border-2 border-black rounded-lg p-3 focus:outline-none focus:ring-0 h-32"
            placeholder="Your Message"
          />
          <Button className="bg-black text-lg hover:bg-white hover:outline hover:text-black text-white w-full rounded-lg py-3 transition-all">
            Send Message
          </Button>
        </form>
      </div>

      {/* Contact Details Section */}
      <div className="flex flex-col w-full lg:w-1/2 outline bg-white p-8 rounded-lg shadow-xl space-y-4 flex-grow h-full">
        <h2 className="text-3xl font-semibold text-black mb-6 text-center lg:text-left">
          Contact Details
        </h2>
        <div className="space-y-4 text-lg text-[#2C2C2C]">
          <div>
            <p className="font-medium">
              <span className="font-bold">Email: </span>
              <a
                href="mailto:trendkartonline@gmail.com"
                className="text-gray-500 hover:underline"
                aria-label="Email us"
              >
                trendkartonline@gmail.com
              </a>
            </p>
            <p className="font-medium">
              <span className="font-bold">Phone: </span>
              <a
                href="tel:+919037395052"
                className="text-gray-500 hover:underline"
                aria-label="Call us"
              >
                +91 90373 95052
              </a>
            </p>
          </div>
          <div>
            <p className="font-medium">
              <span className="font-bold">Address: </span> Trend Kart, Karassery junction, Mukkam, Calicut, Kerala, India 673602
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="font-medium">
              <span className="font-bold">Instagram: </span>
              <a
                href="https://www.instagram.com/trend_kart_mukkam_?igsh=MWVoZGQzczNvMWRpcA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline flex items-center"
                aria-label="Instagram profile"
              >
                <FaInstagram className="mr-3" /> trend_kart_mukkam_
              </a>
            </p>
            <p className="font-medium">
              <span className="font-bold">Facebook: </span>
              <a
                href="https://www.facebook.com/profile.php?id=100093293153667&mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline flex items-center"
                aria-label="Facebook profile"
              >
                <FaFacebook className="mr-3" /> Trend Kart Facebook
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
