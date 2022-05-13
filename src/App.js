import { Navbar } from './components/Navbar';
import './App.css';
import { Hero } from './components/Hero';
import { CirclePhoto } from './components/CirclePhoto';
import  lisaPhoto  from './assets/img/img_lisa_circle.png';
import daniellePhoto from "./assets/img/img_danielle_circle.png";
import brianPhoto from "./assets/img/img_brian_circle.png";
import { Container } from './components/Container';
import { AboutUsTeamMember } from './components/AboutUsTeamMember';
import { FooterList } from './components/FooterList';

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <Navbar />
      </header>

      {/* Section Hero */}
      <section className="hero">
        <Hero />
      </section>

      {/* Section About Us */}
      <section className="about-us">
        <Container>
          <div className="about-us-teams-member">
            <CirclePhoto src={lisaPhoto} />
            <CirclePhoto src={daniellePhoto} />
            <CirclePhoto src={brianPhoto} />
          </div>
          <h2 className="about-us-heading">How it started</h2>
          <p className="about-us-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c
            ulpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="about-us-team-members-info">
            <AboutUsTeamMember
              src={lisaPhoto}
              name="lisa"
              email="lisa@gtd.co"
            />
            <AboutUsTeamMember
              src={daniellePhoto}
              name="Danielle"
              email="danielle@gtd.co"
              phone="(123) 456-7890"
            />
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <div className="footer-wrapper">
            <FooterList
              title="Team"
              data={["Lisa", "Danielle", "Brian", "Join Us"]}
            />
            <FooterList
              title="Learn More"
              data={["Manifesto", "Works", "Stories"]}
            />
            <FooterList
              title="Meet Us"
              data={["Studio", "Community", "Workshops"]}
            />
            <FooterList
              title="Contact"
              data={["Twitter", "Facebook", "Brian"]}
            />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
