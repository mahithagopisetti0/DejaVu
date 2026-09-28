import { delay } from './api';
import { mockMemoryTimeline, mockMemoryCategories } from '../data/mockMemory';

export const memoryService = {
  getMemoryStats: async () => {
    await delay(700);
    return {
      timeline: mockMemoryTimeline,
      categories: mockMemoryCategories,
      totalIndexed: 8942
    };
  }
};
