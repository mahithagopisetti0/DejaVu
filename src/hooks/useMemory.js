import { useState, useEffect, useCallback } from 'react';
import { memoryService } from '../services/memoryService';

export function useMemory() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      const stats = await memoryService.getMemoryStats();
      setData(stats);
    } catch (err) {
      setError('Failed to load memory visualization data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { 
    timeline: data?.timeline || [], 
    categories: data?.categories || [], 
    totalIndexed: data?.totalIndexed || 0,
    loading, 
    error, 
    refetch: fetchStats 
  };
}
