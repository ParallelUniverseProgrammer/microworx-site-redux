import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-gray-light min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-secondary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-800">
            Have a question or need a quote? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
              <h2 className="text-2xl font-bold text-secondary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Visit Us</h3>
                    <p className="text-gray-800 mt-1">20 Allens Creek Rd<br />Rochester, NY 14618</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Call Us</h3>
                    <p className="text-gray-800 mt-1">(585) 271-0050</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Email Us</h3>
                    <p className="text-gray-800 mt-1">sales@microworx.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
                    <div className="text-gray-800 mt-1 space-y-1">
                      <p className="flex justify-between w-full max-w-xs"><span className="font-medium">Monday - Friday:</span> <span>9:00 AM - 6:00 PM</span></p>
                      <p className="flex justify-between w-full max-w-xs"><span className="font-medium">Saturday:</span> <span className="text-brand-red">Closed</span></p>
                      <p className="flex justify-between w-full max-w-xs"><span className="font-medium">Sunday:</span> <span className="text-brand-red">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-64 rounded-lg shadow-md overflow-hidden border border-gray-200">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=20+Allens+Creek+Rd,+Rochester,+NY+14618&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0"
                title="Microworx Location"
              ></iframe>
            </div>
          </div>

          {/* Call Emphasis */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center items-center text-center h-full">
            <div className="bg-primary/10 p-6 rounded-full mb-6">
              <Phone className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-4">Call Us Now</h2>
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              We have staff ready to answer your questions on the phone. No waiting, just real people.
            </p>
            <p className="text-gray-600 mb-6">
              Skip the wait and get help from our local experts.
            </p>
            <a 
              href="tel:5852710050" 
              className="bg-primary text-white px-8 py-4 rounded-md font-bold text-xl hover:bg-brand-red transition-all shadow-md transform hover:-translate-y-0.5 flex items-center"
            >
              <Phone className="h-6 w-6 mr-3" />
              (585) 271-0050
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
