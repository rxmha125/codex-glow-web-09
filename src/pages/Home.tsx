import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Models from '@/components/Models';
import Research from '@/components/Research';
import Responsive from '@/components/Responsive';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-gradient overflow-x-hidden">
      <Navbar />
      <Hero />
      <Models />
      <Research isHomePage={true} />
      <Responsive />
      <Footer />
    </div>
  );
};

export default Home;