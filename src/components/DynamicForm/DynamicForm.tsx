import React, { useState } from 'react';
import type { IForm } from '../../types';
import { sections as allSections } from '../../constants/formData';
import { FormSection } from '../FormSection/FormSection';
import './DynamicForm.css';

interface DynamicFormProps {
  form: IForm;
  onSubmit: (data: Record<string, string | number | boolean>) => void;
  onCancel: () => void;
}

export const DynamicForm = ({ form, onSubmit, onCancel }: DynamicFormProps) => {
  const [formData, setFormData] = useState<Record<string, string | number | boolean>>({});

  const handleFieldChange = (propertyName: string, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [propertyName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    onSubmit(formData);
    setFormData({});
  };

  const renderSections = () => {
    return form.SectionIds.map(sectionId => {
      const section = allSections.find(s => s.Id === sectionId);
      if (!section) return null;

      return (
        <FormSection
          key={section.Id}
          section={section}
          formColumns={form.Columns}
          formData={formData}
          onChange={handleFieldChange}
          level={0}
        />
      );
    });
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      <div className="form-sections">
        {renderSections()}
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn btn-submit">
          Salvar
        </button>
      </div>
    </form>
  );
};

