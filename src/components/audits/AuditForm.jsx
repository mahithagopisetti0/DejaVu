import { useState } from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export function AuditForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    department: 'Engineering',
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.assignee.trim()) newErrors.assignee = 'Assignee is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Audit Title"
        placeholder="e.g. Q4 Security Compliance"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        error={errors.title}
      />
      
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Assignee"
          placeholder="e.g. Jane Doe"
          value={formData.assignee}
          onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
          error={errors.assignee}
        />
        
        <Select
          label="Department"
          options={['Engineering', 'HR', 'Finance', 'Legal']}
          value={formData.department}
          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
        />
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Create Audit
        </Button>
      </div>
    </form>
  );
}
