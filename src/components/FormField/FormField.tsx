import React from 'react';
import type { IField, IFieldType, TColumns } from '../../types';
import './FormField.css';

interface FormFieldProps {
  field: IField;
  fieldType: IFieldType;
  value: string | number | boolean;
  onChange: (propertyName: string, value: string | number | boolean) => void;
  columnSpan: TColumns;
}

export const FormField = ({ 
  field, 
  fieldType, 
  value, 
  onChange,
  columnSpan 
}: FormFieldProps) => {
  const inputId = `field-${field.Id}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const { type, checked, value: targetValue } = target;
    let newValue: string | number | boolean;

    if (type === 'checkbox') {
      newValue = checked;
    } else if (fieldType.NativeType === 'number') {
      newValue = targetValue === '' ? '' : Number(targetValue);
    } else {
      newValue = targetValue;
    }

    onChange(field.PropertyName, newValue);
  };

  const renderInput = () => {
    switch (fieldType.Id) {
      case 1:
        return (
          <input
            id={inputId}
            type="text"
            value={value as string}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
          />
        );

      case 2:
        return (
          <input
            id={inputId}
            type="number"
            step="1"
            value={value === '' ? '' : value as number}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
          />
        );

      case 3:
        return (
          <input
            id={inputId}
            type="number"
            step="0.01"
            value={value === '' ? '' : value as number}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
          />
        );

      case 4:
        return (
          <div className="checkbox-wrapper">
            <input
              id={inputId}
              type="checkbox"
              checked={value as boolean}
              onChange={handleChange}
              required={field.Required}
              className="form-checkbox"
            />
            <span className="checkbox-label">{value ? 'Sim' : 'Não'}</span>
          </div>
        );

      case 5:
        return (
          <input
            id={inputId}
            type="date"
            value={value as string}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
          />
        );

      case 6:
        return (
          <input
            id={inputId}
            type="text"
            value={value as string}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
            placeholder="00000-000"
            maxLength={9}
          />
        );

      case 7:
        return (
          <input
            id={inputId}
            type="tel"
            value={value as string}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
            placeholder="(00) 00000-0000"
          />
        );

      default:
        return (
          <input
            id={inputId}
            type="text"
            value={value as string}
            onChange={handleChange}
            required={field.Required}
            className="form-input"
          />
        );
    }
  };

  const isCheckbox = fieldType.Id === 4;

  return (
    <div className={`form-field col-span-${columnSpan}`}>
      {isCheckbox ? (
        <label htmlFor={inputId} className="form-label">
          {field.Title}
          {field.Required && <span className="required-asterisk">*</span>}
          {renderInput()}
        </label>
      ) : (
        <>
          <label htmlFor={inputId} className="form-label">
            {field.Title}
            {field.Required && <span className="required-asterisk">*</span>}
          </label>
          {renderInput()}
        </>
      )}
    </div>
  );
};

