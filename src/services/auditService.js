import { delay } from './api';
import { mockAudits } from '../data/mockAudits';
export const auditService = {
  getAudits: async () => {
  await delay(600);
  return [...mockAudits];
},
  getAuditById: async (id) => {
    throw new Error('Audit not found');
  },

  createAudit: async (auditData) => {
    const response = await fetch(
      "http://127.0.0.1:8000/create-audit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: auditData.title,
          assignee: auditData.assignee,
          department: auditData.department,
          finding: auditData.finding,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create audit in backend");
    }

    const data = await response.json();

    return {
      id: data.id,
      title: auditData.title,
      assignee: auditData.assignee,
      department: auditData.department,
      finding: auditData.finding,
      status: "Draft",
      date: new Date().toISOString().split("T")[0],
    };
  },
};