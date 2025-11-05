import React, { useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Ethan Carter",
      date: "2023-05-15",
      rating: 5,
      text: "Live Line Engineering installed our solar system flawlessly. Their team was professional, and the system works perfectly.",
    },
  ]);

  const [form, setForm] = useState({ name: "", rating: 5, text: "" });
  const [showForm, setShowForm] = useState(false); // 👈 controls visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;

    const newReview = {
      name: form.name,
      date: new Date().toISOString().split("T")[0],
      rating: form.rating,
      text: form.text,
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: 5, text: "" });
    setShowForm(false); // 👈 hide form after submit
  };

  return (
    <section className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-6">Client Testimonials</h3>

      {/* Reviews List */}
      <div className="space-y-6 mb-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <div className="flex items-center gap-4 mb-2">
              <img
                src="/images/BlankProfile.jpeg"
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </p>
            <p className="text-gray-700 mt-2">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      {!showForm && (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            Add a Review
          </button>
        </div>
      )}

      {/* Review Form (appears only when button clicked) */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded p-6 mx-auto mt-6"
        >
          <h4 className="text-lg font-semibold mb-4">Add Your Review</h4>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded px-3 py-2 mb-3"
          />

          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 mb-3"
          >
            <option value={5}>★★★★★ (5)</option>
            <option value={4}>★★★★☆ (4)</option>
            <option value={3}>★★★☆☆ (3)</option>
            <option value={2}>★★☆☆☆ (2)</option>
            <option value={1}>★☆☆☆☆ (1)</option>
          </select>

          <textarea
            name="text"
            value={form.text}
            onChange={handleChange}
            placeholder="Write your review..."
            className="w-full border rounded px-3 py-2 mb-3"
            rows="4"
          />

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-gray-500 hover:underline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit Review
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Testimonials;
  