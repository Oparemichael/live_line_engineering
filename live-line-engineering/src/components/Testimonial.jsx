const Testimonials = () => {
  return (
    <section className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>

      <div className="bg-white shadow rounded p-4">
        <div className="flex items-center gap-4 mb-2">
          <img src="/images/BlankProfile.jpeg" alt="Ethan Carter" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold">Ethan Carter</p>
            <p className="text-gray-500 text-sm">2023-05-15</p>
          </div>
        </div>
        <p className="text-yellow-500">★★★★★</p>
        <p className="text-gray-700 mt-2">
          Live Line Engineering installed our solar system flawlessly. Their team was professional, and the system works perfectly.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
