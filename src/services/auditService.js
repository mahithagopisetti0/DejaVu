import { delay } from './api';
import { mockAudits } from '../data/mockAudits';

export const auditService = {
  getAudits: async () => {
    await delay(600);
    return [...mockAudits];
  },
  
  getAuditById: async (id) => {
    await delay(400);
    const audit = mockAudits.find(a => a.id === id);
    if (!audit) throw new Error('Audit not found');
    return { ...audit };
  },

  createAudit: async (auditData) => {
    await delay(800);
    const newAudit = {
      id: `AUD-${Math.floor(Math.random() * 1000) + 4000}`,
      ...auditData,
      status: 'Draft',
      date: new Date().toISOString().split('T')[0]
    };
    return newAudit;
  }
};
