import type { ISection, TColumns } from '../../types';
import { fields as allFields, fieldTypes as allFieldTypes, sections as allSections } from '../../constants/formData';
import { FormField } from '../FormField/FormField';
import './FormSection.css';

interface FormSectionProps {
  section: ISection;
  formColumns: TColumns;
  formData: Record<string, string | number | boolean>;
  onChange: (propertyName: string, value: string | number | boolean) => void;
  level?: number;
  visitedSectionIds?: Set<number>;
}

export const FormSection = ({ 
  section, 
  formColumns, 
  formData, 
  onChange,
  level = 0,
  visitedSectionIds = new Set()
}: FormSectionProps) => {
  if (visitedSectionIds.has(section.Id)) {
    console.warn(`Loop circular detectado na seção ${section.Id}`);
    return null;
  }
  
  const newVisitedIds = new Set(visitedSectionIds).add(section.Id);
  const renderFields = () => {
    if (!section.FieldIds || section.FieldIds.length === 0) return null;

    return section.FieldIds.map(fieldId => {
      const field = allFields.find(f => f.Id === fieldId);
      if (!field) return null;

      const fieldType = allFieldTypes.find(ft => ft.Id === field.FieldTypeId);
      if (!fieldType) return null;

      const value = formData[field.PropertyName] ?? (
        fieldType.NativeType === 'boolean' ? false : 
        fieldType.NativeType === 'number' ? '' : ''
      );

      return (
        <FormField
          key={field.Id}
          field={field}
          fieldType={fieldType}
          value={value}
          onChange={onChange}
          columnSpan={field.ColumnSpan}
        />
      );
    });
  };

  const renderSubSections = () => {
    if (!section.SubSectionIds || section.SubSectionIds.length === 0) return null;

    return section.SubSectionIds.map(subSectionId => {
      const subSection = allSections.find(s => s.Id === subSectionId);
      if (!subSection) return null;

      return (
        <FormSection
          key={subSection.Id}
          section={subSection}
          formColumns={formColumns}
          formData={formData}
          onChange={onChange}
          level={level + 1}
          visitedSectionIds={newVisitedIds}
        />
      );
    });
  };

  const hasContent = (section.FieldIds && section.FieldIds.length > 0) || 
                     (section.SubSectionIds && section.SubSectionIds.length > 0);

  if (!hasContent) return null;

  return (
    <div className={`form-section level-${level}`}>
      <h3 className={`section-title level-${level}`}>{section.Title}</h3>
      
      {section.FieldIds && section.FieldIds.length > 0 && (
        <div className={`form-grid grid-cols-${formColumns}`}>
          {renderFields()}
        </div>
      )}
      
      {section.SubSectionIds && section.SubSectionIds.length > 0 && (
        <div className="subsections-container">
          {renderSubSections()}
        </div>
      )}
    </div>
  );
};

