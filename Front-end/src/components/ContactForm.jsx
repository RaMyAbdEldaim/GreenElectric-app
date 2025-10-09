import { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import countries from "../data/countries"; // استيراد البلاد

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://gepms.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", country: "", message: "" });
      } else {
        setStatus("❌ Error while sending message");
      }
    } catch {
      setStatus("⚠️ Server is not running or connection issue");
    }
  };

  return (
    <>
      <NavBar />
      <section className="py-5 bg-light" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  <h2 className="text-center text-success mb-4">🌱 CONTACT REQUEST</h2>
                  <form onSubmit={handleSubmit}>
                    {/* الاسم */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        required
                      />
                    </div>

                    {/* الإيميل */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        required
                      />
                    </div>

                    {/* البلاد */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Country</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="form-select form-select-lg"
                        required
                      >
                        <option value="">Select your country</option>
                        {countries.map((c, index) => (
                          <option key={index} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    {/* الرسالة */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control form-control-lg"
                        required
                      ></textarea>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-success btn-lg rounded-3">
                        Send Message
                      </button>
                    </div>

                    <h2 className="text-success mt-3">
                      Location <i className="bi bi-geo-alt text-success"></i>
                    </h2>
                    <p className="fw-bold">
                      Space Tower floor 1, Abduaziz Hamad AlSaqer St., Mirqab, Kuwait City
                    </p>
                  </form>

                  {status && <p className="text-center mt-4 fw-semibold">{status}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
