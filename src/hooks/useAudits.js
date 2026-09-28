import { useState, useEffect, useCallback } from 'react';
import { auditService } from '../services/auditService';

export function useAudits() {
  const [audits, setAudits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAudits = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await auditService.getAudits();
      setAudits(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch audits');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAudits();
  }, [fetchAudits]);

  const createAudit = async (data) => {
    const newAudit = await auditService.createAudit(data);
    setAudits(prev => [newAudit, ...prev]);
    return newAudit;
  };

  return { audits, loading, error, refetch: fetchAudits, createAudit };
}
