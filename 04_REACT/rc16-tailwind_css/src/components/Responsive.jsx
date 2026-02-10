import React from "react";

export default function Responsive() {
  return (
    <section className="section-container">
      <div className="section-title">
        <h2>Responsive Design</h2>
        <p className="text-lg text-neutral-300">
          Mobile-first responsive design with Tailwind breakpoints
        </p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="title">Tailwind Breakpoints</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card">
              <span className="font-bold text-blue-400">sm</span>
              <p className="text-sm mt-2">640px and up</p>
            </div>
            <div className="card">
              <span className="font-bold text-blue-400">md</span>
              <p>768px and up</p>
            </div>
            <div className="card">
              <span className="font-bold text-blue-400">lg</span>
              <p>1024px and up</p>
            </div>
            <div className="card">
              <span className="font-bold text-blue-400">xl</span>
              <p>1280px and up</p>
            </div>
            <div className="card">
              <span className="font-bold text-blue-400">2xl</span>
              <p>1536px and up</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title">Direction Change on Different Screens</h3>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="card">
              <h4>Column 1</h4>
              <p>Stacks on mobile</p>
            </div>
            <div className="card">
              <h4>Column 2</h4>
              <p>Rows on desktop</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="title">Show/Hide on Different Screens</h3>
          <div className="space-y-3">
            <div className="text-blue-900 rounded bg-blue-100 md:hidden">
              <p>This only shows on mobile</p>
            </div>
            <div className="text-blue-900 rounded bg-blue-100 hidden md:block">
              <p>This only shows on md and larger</p>
            </div>
            <div className="text-blue-900 rounded bg-blue-100 hidden lg:block">
              <p>This only shows on lg and larger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
