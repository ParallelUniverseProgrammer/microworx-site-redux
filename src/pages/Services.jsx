import { Monitor, Server, Shield, Wrench, Cloud, Database } from 'lucide-react';

const services = [
  {
    title: "Business Support",
    description: "Complete IT support for small businesses. We handle security, servers, and day-to-day computer problems.",
    icon: Server,
  },
  {
    title: "Computer Repair",
    description: "Fast repair for laptops and desktops. We fix broken screens, slow computers, and replace batteries.",
    icon: Wrench,
  },
  {
    title: "Virus Removal",
    description: "We clean infected computers and install protection to keep your personal information safe.",
    icon: Shield,
  },
  {
    title: "Data Recovery",
    description: "Lost important files or photos? We can help recover data from failing hard drives.",
    icon: Database,
  },
  {
    title: "Remote Help",
    description: "Quick help without leaving home. We can securely connect to your computer to fix software issues.",
    icon: Cloud,
  },
  {
    title: "Custom Computers",
    description: "Computers built just for you. Perfect for gaming, editing video, or specialized work.",
    icon: Monitor,
  },
];

const Services = () => {
  return (
    <div className="bg-brand-gray-light min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-4">Our Services</h1>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto">
            From quick repairs to business support, Microworx is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 p-6 group border-t-4 border-transparent hover:border-primary">
              <div className="bg-brand-gray-light rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
              <p className="text-gray-800 leading-relaxed mb-4">
                {service.description}
              </p>
              <a href="/contact" className="text-primary font-semibold hover:text-brand-red inline-flex items-center">
                Learn more &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary rounded-xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-brand-red rounded-full opacity-20 blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">Need Something Else?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We know every problem is different. Call us to discuss what you need.
            </p>
            <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-red transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
