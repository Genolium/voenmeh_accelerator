/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Benefits } from './components/Benefits';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Experts } from './components/Experts';
import { Partners } from './components/Partners';
import { FormSection } from './components/FormSection';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-red selection:text-white bg-brand-bg">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="benefits">
          <Benefits />
        </div>
        
        <div id="timeline">
          <Timeline />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="experts">
          <Experts />
        </div>

        <Partners />
        
        <div id="investors">
          <FormSection />
        </div>
        
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}
