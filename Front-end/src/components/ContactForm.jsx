import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Error while sending message");
      }
    } catch {
      setStatus("⚠️ Server is not running or connection issue");
    }
  };

  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                <h2 className="text-center text-success mb-4">
                  🌱 CONTACT REQUEST
                </h2>
                <p className="text-center text-muted mb-5">
                  Have a question or need support? Fill out the form below and our team will get back to you.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Message</label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg rounded-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                {status && (
                  <p className="text-center mt-4 fw-semibold">{status}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
