import HeaderHero from './components/HeaderHero';
import Problems from './components/Problems';
import Features from './components/Features';
import Stakeholders from './components/Stakeholders';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <HeaderHero />
      <main>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="rounded-xl border border-indigo-100 bg-indigo-50 p-6">
            <p className="text-sm font-medium text-indigo-900">Purpose</p>
            <p className="mt-2 text-sm text-indigo-800">
              Build a single source of truth that centralizes event communication, streamlines approvals, and enables
              real-time discipline monitoring—improving engagement, safety, and operational efficiency across MKCE.
            </p>
          </div>
        </div>
        <Problems />
        <Features />
        <Stakeholders />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} MKCE Campus Management App • Project Brief
        </div>
      </footer>
    </div>
  );
}

export default App;
