import { createFileRoute, Link } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
  head: () => ({
    meta: [
      {
        title: "EngineerYourPath - For All Engineers Worldwide",
      },
    ],
  }),
})

const disciplines = [
  { name: "Agricultural Engineering", icon: "🌾", desc: "Farm machinery, irrigation, post-harvest" },
  { name: "Chemical Engineering", icon: "🧪", desc: "Process design, reactions, materials" },
  { name: "Civil Engineering", icon: "🏗️", desc: "Structures, construction, geotechnics" },
  { name: "Industrial and Production Engineering", icon: "🏭", desc: "Optimization, manufacturing, systems" },
  { name: "Mechanical Engineering", icon: "⚙️", desc: "Machines, thermodynamics, design" },
  { name: "Metallurgical and Materials Engineering", icon: "🔬", desc: "Metals, alloys, materials science" },
  { name: "Mining Engineering", icon: "⛏️", desc: "Mineral extraction, mine design, safety" },
]

function Dashboard() {
  const { user: currentUser } = useAuth()

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-600">EngineerYourPath</h1>
        <p className="font-semibold">For All Engineers Worldwide</p>
        <h2 className="text-2xl truncate max-w-sm mx-auto pt-4">
          Hi, {currentUser?.full_name || currentUser?.email} 👋
        </h2>
        <p className="text-muted-foreground">
          Welcome back, nice to see you again!
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">Choose Your Engineering Path</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {disciplines.map((d) => (
            <Link
              key={d.name}
              to="/items"
              className="rounded-xl border p-4 hover:shadow-md transition-all bg-white dark:bg-gray-900"
            >
              <div className="text-2xl mb-2">{d.icon}</div>
              <h4 className="font-bold">{d.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link to="/items" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold">
          Explore Resources
        </Link>
      </div>
    </div>
  )
}