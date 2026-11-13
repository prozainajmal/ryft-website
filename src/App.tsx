import { ReleaseContext, useLatestRelease } from './release';
import IntroOverlay from './sections/IntroOverlay';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import FeaturesOverview from './sections/FeaturesOverview';
import AgentRosterBelt from './sections/AgentRosterBelt';
import Numbers from './sections/Numbers';
import MatchDayIntro from './sections/MatchDayIntro';
import Round1 from './sections/Round1';
import Round2 from './sections/Round2';
import Round3 from './sections/Round3';
import LoadoutStrip from './sections/LoadoutStrip';
import Round4 from './sections/Round4';
import Gallery from './sections/Gallery';
import Compare from './sections/Compare';
import Safety from './sections/Safety';
import RoadmapChangelog from './sections/RoadmapChangelog';
import Download from './sections/Download';
import Faq from './sections/Faq';
import Community from './sections/Community';
import Footer from './sections/Footer';

export default function App() {
  const release = useLatestRelease();
  return (
    <ReleaseContext.Provider value={release}>
      <div className="ry" style={{ minHeight: '100vh', background: '#0E1117', color: '#E9ECF1', fontFamily: 'Inter, system-ui, sans-serif', fontSize: 16, lineHeight: 1.55, overflowX: 'hidden' }}>
        <IntroOverlay />
        <Nav />
        <main>
          <Hero />
          <FeaturesOverview />
          <AgentRosterBelt />
          <Numbers />
          <MatchDayIntro />
          <Round1 />
          <Round2 />
          <Round3 />
          <LoadoutStrip />
          <Round4 />
          <Gallery />
          <Compare />
          <Safety />
          <RoadmapChangelog />
          <Download />
          <Faq />
          <Community />
        </main>
        <Footer />
      </div>
    </ReleaseContext.Provider>
  );
}
