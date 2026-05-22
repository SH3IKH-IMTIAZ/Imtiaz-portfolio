import { Navbar, HeroSection, AboutSection, SkillsSection, ToolsSection, ProjectsSection, ContactSection, Footer, TimelineSection, GallerySection, EducationSection } from './Components'
import './App.scss';




function App() {
  return (
    <div className='bg'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ToolsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}



export default App;