import { Rocket, School } from 'lucide-react';

export default function HeaderHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <School className="h-4 w-4" />
              MKCE • Karur
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Campus Management App — Project Brief
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/90">
              A centralized platform for events, discipline monitoring, and campus-wide coordination—
              designed for students, administrators, and Yellow Tag monitors at M. Kumarasamy College of Engineering.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur">
            <Rocket className="h-8 w-8" />
            <div>
              <p className="text-sm font-semibold">Objective</p>
              <p className="text-xs text-white/90">Unify communication • Boost engagement • Streamline operations</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
