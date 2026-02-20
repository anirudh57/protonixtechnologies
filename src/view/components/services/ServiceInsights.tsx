function ServiceInsights() {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800">
        Insights
      </h2>
      <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm text-sm text-gray-700 space-y-2">
        <p className="text-gray-800 font-semibold">
          We share practical insights on:
        </p>
        <ul className="list-disc list-inside space-y-1.5">
          <li>Building and scaling digital products</li>
          <li>AI and data strategy for startups</li>
          <li>Engineering best practices</li>
          <li>Cloud optimization and performance</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">
          Ask us for examples or a walkthrough of recent work relevant to your product.
        </p>
      </div>
    </div>
  );
}

export default ServiceInsights;
