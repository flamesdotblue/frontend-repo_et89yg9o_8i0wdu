import { Bell, MapPin, AlertTriangle } from 'lucide-react';

export default function Problems() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-bold">The Problems We Are Solving</h2>
      <p className="mt-2 text-sm text-gray-600">
        Current coordination gaps at MKCE limit student engagement and strain administrative workflows.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600"><Bell className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Event Awareness & Coordination</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>No single platform to notify all departments about intra-college events.</li>
            <li>Student clubs struggle to reach full audiences; participation suffers.</li>
            <li>Fine Arts Club manages approvals/finances but lacks transparency and tracking.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-50 p-2 text-green-600"><MapPin className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Discipline Monitoring (Yellow Tag System)</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>5–6 Yellow Tags lack real-time location visibility and assignment tracking.</li>
            <li>Inefficient coverage and response times across campus zones.</li>
            <li>No centralized log for incidents or shift handovers.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
        <div className="flex items-center gap-3 text-amber-700">
          <AlertTriangle className="h-5 w-5" />
          <p className="font-semibold">Broader Student Challenges</p>
        </div>
        <p className="mt-3 text-sm text-amber-800">
          The app acknowledges strict rules, limited freedom, hostel and food concerns, placement anxiety, and
          infrastructure gaps—ensuring solutions are inclusive and beneficial to all departments and genders.
        </p>
      </div>
    </section>
  );
}
