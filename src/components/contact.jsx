import styles from "../styles";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact"  className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full shadow-xl rounded-2xl grid md:grid-cols-2 overflow-hidden">
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-200">We would love to hear from you! Fill out the form and we’ll get back to you shortly.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>sales@chapapay.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>+254 700 000 000</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        <div className="p-8 bg-white">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "Sending..."}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {status === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className={`text-sm mt-2 ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
