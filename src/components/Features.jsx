import { CheckCircle2, Bell, Users, MapPin, BarChart3, Sparkles, Gift } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Bell,
      title: 'Centralized Event Notifications',
      points: [
        'Cross-department broadcast for all club events (with Fine Arts approvals flow).',
        'RSVP and acknowledgment to measure reach and predict attendance.',
        'Attachments for posters, rules, budgets, and schedules.'
      ],
    },
    {
      icon: MapPin,
      title: 'Real-time Yellow Tag Tracking',
      points: [
        'Live location sharing and zone assignments for 5–6 monitors.',
        'Shift schedules, incident logging, and escalation workflows.',
        'Heatmaps of coverage to fix blind spots in real time.'
      ],
    },
    {
      icon: Users,
      title: 'Role-based Dashboards',
      points: [
        'Students: event feed, RSVPs, attendance history, feedback.',
        'Administrators: approvals, budgets, analytics, communication.',
        'Yellow Tags: duty roster, zones, incident reporting, live chat.'
      ],
    },
    {
      icon: Sparkles,
      title: 'AI-based Event Recommendations',
      points: [
        'Suggest events by interests, past attendance, department, and schedule.',
        'Smart reminders to reduce last-minute drop-offs.'
      ],
    },
    {
      icon: Gift,
      title: 'Gamified Participation',
      points: [
        'Points, badges, and leaderboards for attending and volunteering.',
        'Redeemable rewards aligned with campus policies.'
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      points: [
        'Engagement metrics by department, year, and gender for inclusivity.',
        'Event ROI dashboards and discipline incident trends.',
        'Data exports for accreditation and placement reports.'
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-bold">Key Features</h2>
      <p className="mt-2 text-sm text-gray-600">Designed to create clarity, accountability, and equal access for the entire campus community.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, points }) => (
          <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600"><Icon className="h-5 w-5" /></div>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
