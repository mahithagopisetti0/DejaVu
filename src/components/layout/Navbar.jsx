import { Bell, Search, Menu } from 'lucide-react';

export default function Navbar({ onMenuClick, title }) {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-16 flex flex-shrink-0 items-center justify-between px-4 sm:px-6 sticky top-0 z-10 shadow-sm w-full">

      <div className="flex items-center gap-4">
        <button
          className="p-2 -ml-2 rounded-lg hover:bg-slate-100/50 md:hidden text-slate-500 transition-colors"
          onClick={onMenuClick}
        >
          <Menu className="w-5 h-5" />
        </button>

        {title && (
          <h2 className="text-lg font-semibold text-slate-800 hidden sm:block">
            {title}
          </h2>
        )}
      </div>

      <div className="flex items-center justify-end gap-3 sm:gap-5 flex-1">

        <div className="hidden md:flex relative group max-w-xs w-full lg:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-1.5 bg-slate-100/50 border border-slate-200 hover:border-slate-300 rounded-lg text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/30 w-full transition-all placeholder:text-slate-400 text-slate-700"
          />
        </div>

        <button
          className="relative p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors flex-shrink-0"
        >
          <Bell className="w-5 h-5" />

          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full box-content"></span>
        </button>

        <div className="h-8 w-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm cursor-pointer hover:bg-indigo-100 transition-colors flex-shrink-0">
          JD
        </div>

      </div>
    </header>
  );
}