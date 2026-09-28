export const mockDashboardStats = {
  totalAudits: { value: 124, change: '+12%', trend: 'up' },
  activeChats: { value: 3, change: '-2%', trend: 'down' },
  memoriesIndexed: { value: 8942, change: '+5%', trend: 'up' },
  systemHealth: { value: '99.9%', change: '0%', trend: 'neutral' },
};

export const mockRecentActivity = [
  { id: 1, type: 'audit', title: 'Security Audit Completed', time: '2 hours ago', status: 'success' },
  { id: 2, type: 'memory', title: 'New memory cluster formed', time: '5 hours ago', status: 'info' },
  { id: 3, type: 'chat', title: 'AI Assistant processed legal query', time: '1 day ago', status: 'success' },
  { id: 4, type: 'audit', title: 'Compliance Audit Drafted', time: '2 days ago', status: 'warning' },
];
