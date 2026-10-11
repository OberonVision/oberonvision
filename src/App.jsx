import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Philosophy from './components/Philosophy';
import Industries from './components/Industries';
import About from './components/About';
import Process from './components/Process';
import Quotes from './components/Quotes';
import DedicatedSpace from './components/DedicatedSpace';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomNav from './components/MobileBottomNav';

export const App = () => {
  return (
    <ThemeProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Philosophy />
        <Industries />
        <About />
        <Process />
        <Quotes />
        <DedicatedSpace />
        <Contact />
      </main>
      <Footer />
      {/* Mobile-First Floating Bottom Navigation & Quick Connect Dock */}
      <MobileBottomNav />
    </ThemeProvider>
  );
};

export default App;
