import { Award, ThumbsUp, MapPin, Wrench, Cpu, CheckCircle } from 'lucide-react';
import repairBayImg from '../assets/repair-bay.jpg';
import dataMigrationImg from '../assets/data-migration.jpg';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-secondary to-black opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">About Microworx</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-light">
            Your local technology experts, serving Rochester with skill, integrity, and a passion for problem-solving since 1994.
          </p>
        </div>
      </section>

      {/* Section 1: The Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-secondary mb-6">The Microworx Team</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  At Microworx, we believe that great service starts with great people. Our team represents a powerful blend of experience and innovation, featuring veteran computer repair technicians who average over 20 years in the IT field.
                </p>
                <p>
                  Complementing this depth of experience is our group of energetic younger engineers and sales professionals who bring enthusiasm and cutting-edge knowledge to the table. We pride ourselves on having a team that is truly engaged—we enjoy working with our customers to discover the perfect IT solutions for their unique needs.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-300">
                <img 
                  src={repairBayImg} 
                  alt="Microworx Team and Repair Bay" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Facility & Capabilities */}
      <section className="py-16 md:py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-300">
                <img 
                  src={dataMigrationImg} 
                  alt="Data Migration Room and Facility" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
            <div className="order-2">
              <div className="flex items-center mb-6">
                <div className="bg-brand-red/10 p-3 rounded-full mr-4">
                   <MapPin className="h-8 w-8 text-brand-red" />
                </div>
                <h2 className="text-3xl font-bold text-secondary">Built to Serve You Better</h2>
              </div>
              
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Our <strong>4,000 sq. ft. facility</strong> at <span className="font-semibold text-brand-red">20 Allens Creek Road, Brighton</span> is designed for efficiency. It features a state-of-the-art 50-bay computer service center and a well-stocked warehouse, allowing us to perform repairs faster and keep essential parts ready when you need them.
                </p>
                <p>
                  We are centrally located to easily serve the greater Rochester area. Our facility is more than just a shop; it's a comprehensive service hub designed to handle high volumes of work without sacrificing attention to detail.
                </p>
                <p>
                  With our extensive onsite warehouse, we can significantly reduce turnaround times, getting your equipment back in your hands as quickly as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Service Model */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Service That Comes to You</h2>
              <div className="prose prose-lg text-gray-700 space-y-6">
                <p>
                  Microworx employs technicians to assist you both in-store and at your home or office. We understand that unplugging your system and bringing it in isn't always practical.
                </p>
                <p>
                  We work with businesses and local customers to get you up and running faster, right where you are. This allows us to troubleshoot difficult environment-specific issues—like consistent internet drops or troublesome printer connections—ensuring your technology works seamlessly in its actual setting.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-gray-light p-8 rounded-2xl border border-gray-100 shadow-lg">
              <div className="flex items-center mb-6">
                <Wrench className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-secondary">On-Site & In-Store</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Minimize disruption to your productivity",
                  "Expert diagnosis of network and WiFi issues",
                  "Professional setup of peripherals and printers",
                  "Flexible appointment scheduling",
                  "Comprehensive hardware and software support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary mb-4">Our Commitment</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-center p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-primary duration-300 group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">High Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing the highest quality service and equipment. We aim for excellence in every repair and recommendation.
              </p>
            </div>
            
            <div className="bg-white text-center p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-brand-red duration-300 group">
              <div className="bg-brand-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/20 transition-colors">
                <Cpu className="h-10 w-10 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Tailored Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                 From onsite corporate engineering to single home desktop repairs, we provide the solution that best fits <em>your</em> specific needs.
              </p>
            </div>
            
            <div className="bg-white text-center p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-t-4 border-primary duration-300 group">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <ThumbsUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-secondary">Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide high-quality, cost-effective solutions. Our goal is to help you get the most value out of your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Microworx Difference?</h2>
          <p className="text-xl text-blue-50 mb-10">
            Call us or stop in to set up an appointment. We look forward to working with you.
          </p>
          <a href="/contact" className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg inline-block transform hover:-translate-y-1">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
