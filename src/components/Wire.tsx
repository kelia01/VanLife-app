import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Trello, BarChart3, LayoutDashboard } from "lucide-react";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">FocusOS</h1>
        <nav className="flex flex-col gap-4">
          {[
            { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
            { name: "Projects", icon: <Trello size={18} /> },
            { name: "Calendar", icon: <Calendar size={18} /> },
            { name: "Reports", icon: <BarChart3 size={18} /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition ${
                active === item.name
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200 text-gray-700"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {active === "Dashboard" && (
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow p-6">📌 Quick Toggles</div>
              <div className="bg-white rounded-xl shadow p-6">🗂 Kanban Overview</div>
              <div className="bg-white rounded-xl shadow p-6">⏱ Focus Timer</div>
            </div>
          )}

          {active === "Projects" && (
            <div className="bg-white rounded-xl shadow p-6 h-96 flex items-center justify-center">
              <p className="text-gray-500">[Wireframe Placeholder for Trello-like Board]</p>
            </div>
          )}

          {active === "Calendar" && (
            <div className="bg-white rounded-xl shadow p-6 h-96 flex items-center justify-center">
              <p className="text-gray-500">[Wireframe Placeholder for Calendar View]</p>
            </div>
          )}

          {active === "Reports" && (
            <div className="bg-white rounded-xl shadow p-6 h-96 flex items-center justify-center">
              <p className="text-gray-500">[Wireframe Placeholder for Reports + Charts]</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
