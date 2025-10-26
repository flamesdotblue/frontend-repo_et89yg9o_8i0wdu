import { Shield, Users, Settings } from 'lucide-react';

export default function Stakeholders() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="text-2xl font-bold">Role-specific Interfaces</h2>
      <p className="mt-2 text-sm text-gray-600">Clear responsibilities and outcomes for each user group ensure adoption and measurable impact.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-50 p-2 text-purple-600"><Users className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Students</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Unified event feed across all departments and clubs.</li>
            <li>RSVP, reminders, and attendance certificates.</li>
            <li>Feedback and grievance channels (hostel, food, infrastructure).</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600"><Settings className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Administrators</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Approval workflows for events, budgets, and venues.</li>
            <li>Communication tools to reach all or targeted student groups.</li>
            <li>Analytics for engagement, incident trends, and compliance.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-rose-50 p-2 text-rose-600"><Shield className="h-5 w-5" /></div>
            <h3 className="text-lg font-semibold">Yellow Tag Monitors</h3>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li>Live location sharing and zone assignment visibility.</li>
            <li>Incident reporting with photos, notes, and escalation.</li>
            <li>Shift planning, attendance, and handover summaries.</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h4 className="text-base font-semibold">Expected Outcomes</h4>
        <ul className="mt-3 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
          <li>Increased event participation across all departments and genders.</li>
          <li>Faster response and better coverage by discipline monitors.</li>
          <li>Reduced administrative overhead through digitized workflows.</li>
          <li>Transparent data for policy decisions and accreditation.</li>
        </ul>
      </div>
    </section>
  );
}
