import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import KatagaJourney from './components/KatagaJourney.jsx';
import PriorityMission from './components/PriorityMission.jsx';
import ForYouToday from './components/ForYouToday.jsx';
import QuickActions from './components/QuickActions.jsx';
import MemberCard from './components/MemberCard.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <div className="container">
          <Hero />
          <KatagaJourney />
          <PriorityMission />
          <ForYouToday />
          <QuickActions />
          <MemberCard />
        </div>
      </main>
    </div>
  );
}

export default App;
