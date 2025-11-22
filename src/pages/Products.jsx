import { Laptop, Monitor, Wrench, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="bg-brand-gray-light min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-4">Our Products</h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            We sell high-quality computers and parts. From home laptops to gaming PCs, we have what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Laptops */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gray-light rounded-full mb-4 text-primary">
              <Laptop className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Laptops</h3>
            <p className="text-gray-800">
              Reliable laptops for home, school, or business. We can help you pick the right one.
            </p>
          </div>

          {/* Gaming PCs */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gray-light rounded-full mb-4 text-primary">
              <Monitor className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Gaming PCs</h3>
            <p className="text-gray-800">
              Powerful gaming computers built by us. Great performance and quality parts.
            </p>
          </div>

          {/* Custom Builds */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-gray-light rounded-full mb-4 text-primary">
              <Wrench className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">Custom Builds</h3>
            <p className="text-gray-800">
              We build computers to match exactly what you need. Just tell us what you want to do.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-secondary rounded-xl p-8 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-secondary to-black opacity-50"></div>
           <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect Computer</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Call or visit us. We'll help you find a computer that fits your budget and needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-red transition-colors inline-flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
              <a href="tel:5852710050" className="bg-white text-secondary px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
                Call (585) 271-0050
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
