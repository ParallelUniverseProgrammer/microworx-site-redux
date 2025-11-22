import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-12 lg:py-16">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {/* Abstract dark pattern can be added here if needed */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-secondary to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Expert Computer Help <br/>
              <span className="text-brand-red">for Home & Business</span>
            </h1>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl">
              Since 1994, Microworx has provided Rochester with reliable computer sales, fast repairs, and friendly support. We are your local technology partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-red text-white px-6 py-3 rounded-md font-bold hover:bg-red-800 transition-all shadow-lg transform hover:-translate-y-0.5">
                Get a Quote
              </Link>
              <Link to="/services" className="bg-white text-secondary px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-0.5">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-12 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose Microworx?</h2>
            <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-secondary">Fast Repairs</h3>
              <p className="text-gray-800">Most repairs are done within 24-48 hours. We know you need your computer back quickly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all border-t-4 border-brand-red">
              <h3 className="text-xl font-bold mb-2 text-secondary">Expert Technicians</h3>
              <p className="text-gray-800">Our staff has decades of experience fixing all types of computer problems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-all border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-2 text-secondary">Local & Trusted</h3>
              <p className="text-gray-800">Serving Rochester for over 30 years with honest service and fair pricing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

