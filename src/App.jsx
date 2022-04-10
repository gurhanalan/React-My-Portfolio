import './main.scss';

import Hero from './components/hero/Hero';
import Nav from './components/navbar/Nav';

import ProjectList from './components/projectlist/ProjectList';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default App;
