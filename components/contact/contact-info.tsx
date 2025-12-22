"use client"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-blue-600 rounded-3xl p-8 text-white">
      {/* Address Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Address</h3>
        <p className="text-blue-100 leading-relaxed">
          New Baneshwor
          <br />
          Kathmandu 44600,Nepal
        </p>
      </div>

      {/* Contact Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-blue-100 mb-2">Tel : 01-456746 , 01-985647</p>
        <p className="text-blue-100">Email: hello@stusphere.com</p>
      </div>

      {/* Open Time Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Open Time</h3>
        <p className="text-blue-100 mb-2">Tel : 01-456746 , 01-985647</p>
        <p className="text-blue-100">Email: hello@stusphere.com</p>
      </div>

      {/* Social Media Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
        <div className="flex gap-4">
          <a
            href="#"
            className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors duration-200"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors duration-200"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="bg-white text-blue-600 rounded-full p-3 hover:bg-blue-100 transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}
