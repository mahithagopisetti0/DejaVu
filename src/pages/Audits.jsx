import { useState } from 'react';
import { useAudits } from '../hooks/useAudits';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { LoadingState, ErrorState, EmptyState } from '../components/ui/States';
import { AuditTable } from '../components/audits/AuditTable';
import { AuditForm } from '../components/audits/AuditForm';
import { Plus, Search } from 'lucide-react';

export default function Audits() {
  const { audits, loading, error, refetch, createAudit } = useAudits();
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState(null);

  const filteredAudits = audits.filter(audit => 
    audit.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    audit.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateSubmit = async (data) => {
    await createAudit(data);
    setIsFormOpen(false);
  };

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500 h-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 leading-tight">Audit Management</h1>
          <p className="text-slate-500 mt-1">Review, track, and create new compliance audits.</p>
        </div>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Create Audit
        </Button>
      </div>

      <Card className="flex-1 min-h-[500px] flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between py-4 border-b border-slate-100">
          <CardTitle>All Audits</CardTitle>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search audits..."
              className="pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        
        <div className="flex-1 overflow-hidden">
          {loading ? (
            <LoadingState text="Loading audits..." />
          ) : error ? (
            <ErrorState title="Failed to load" message={error} onRetry={refetch} />
          ) : filteredAudits.length === 0 ? (
            <EmptyState title="No audits found" description="Try adjusting your search criteria or create a new audit." />
          ) : (
            <AuditTable 
              audits={filteredAudits} 
              onViewDetails={(audit) => setSelectedAudit(audit)}
            />
          )}
        </div>
      </Card>

      <Modal 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        title="Create New Audit"
      >
        <AuditForm 
          onSubmit={handleCreateSubmit} 
          onCancel={() => setIsFormOpen(false)} 
        />
      </Modal>

      <Modal 
        isOpen={!!selectedAudit} 
        onClose={() => setSelectedAudit(null)} 
        title={`Audit Details: ${selectedAudit?.id}`}
      >
        {selectedAudit && (
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500">Title</p>
              <p className="font-medium text-slate-900">{selectedAudit.title}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">Assignee</p>
                <p className="font-medium text-slate-900">{selectedAudit.assignee}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Status</p>
                <div className="mt-1">
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-slate-100 text-slate-800">
                    {selectedAudit.status}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-slate-500">Date</p>
                <p className="font-medium text-slate-900">{selectedAudit.date}</p>
              </div>
            </div>
            <div className="pt-4 flex justify-end">
              <Button variant="outline" onClick={() => setSelectedAudit(null)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
