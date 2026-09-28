import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, MessageSquare, BrainCircuit, LogOut } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: FileText, label: 'Audits', path: '/audits' },
  { icon: MessageSquare, label: 'Chat', path: '/chat' },
  { icon: BrainCircuit, label: 'Memory', path: '/memory' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-slate-900 text-slate-300 border-r border-slate-800 shadow-xl z-20 sticky top-0 left-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          Nivara
        </h1>
      </div>
      
      <nav className="flex-1 px-4 mt-6 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isActive 
                  ? 'bg-indigo-600/10 text-indigo-400 font-medium' 
                  : 'hover:bg-slate-800 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-800">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl hover:bg-slate-800 hover:text-white transition-colors text-left">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
