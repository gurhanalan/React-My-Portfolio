import "./main.scss";

import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";
import Projects from "./components/projectlist/Projects";

const App = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Projects />
        </div>
    );
};

export default App;
