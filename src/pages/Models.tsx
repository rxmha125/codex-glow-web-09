import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModelsSection from '@/components/models/ModelsSection';
import ModelsTable from '@/components/models/ModelsTable';

const Models = () => {
  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ModelsSection />
        <ModelsTable />
      </div>
      <Footer />
    </div>
  );
};

export default Models;