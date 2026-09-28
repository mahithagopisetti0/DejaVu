const variantStyles = {
  success: 'bg-green-100 text-green-700 ring-green-600/20',
  warning: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
  error: 'bg-red-100 text-red-700 ring-red-600/10',
  info: 'bg-blue-100 text-blue-700 ring-blue-700/10',
  default: 'bg-slate-100 text-slate-700 ring-slate-600/10',
  indigo: 'bg-indigo-100 text-indigo-700 ring-indigo-700/10'
};

export function Badge({ children, variant = 'default', className = '', ...props }) {
  return (
    <span 
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
