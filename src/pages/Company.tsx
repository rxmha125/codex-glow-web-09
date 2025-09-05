import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Company = () => {
  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Company
            </h1>
            <p className="text-xl text-white/70">
              Content will be added soon
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;