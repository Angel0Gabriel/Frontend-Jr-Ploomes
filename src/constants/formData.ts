// DADOS E CONSTANTES

import type { IFieldType, IField, ISection, IForm } from '../types';

export const fieldTypes: Array<IFieldType> = [
  { Id: 1, Name: "Texto simples", NativeType: "string" },
  { Id: 2, Name: "Número inteiro", NativeType: "number" },
  { Id: 3, Name: "Número com casas decimais", NativeType: "number" },
  { Id: 4, Name: "Sim ou Não", NativeType: "boolean" },
  { Id: 5, Name: "Data", NativeType: "string" },
  { Id: 6, Name: "CEP", NativeType: "string" },
  { Id: 7, Name: "Telefone", NativeType: "number" },
];

export const fields: Array<IField> = [
  { Id: 1, Title: "Nome completo", PropertyName: "Name", ColumnSpan: 3, FieldTypeId: 1, Required: true },
  { Id: 2, Title: "Nome da rua", PropertyName: "Adress", ColumnSpan: 2, FieldTypeId: 1, Required: false },
  { Id: 3, Title: "Número", PropertyName: "AdressNumber", ColumnSpan: 1, FieldTypeId: 2, Required: false },
  { Id: 4, Title: "Data de Nascimento", PropertyName: "Birthday", ColumnSpan: 1, FieldTypeId: 5, Required: false },
  { Id: 5, Title: "Salário Anual", PropertyName: "AnnualSalary", ColumnSpan: 2, FieldTypeId: 3, Required: false },
  { Id: 7, Title: "Está empregado?", PropertyName: "Employed", ColumnSpan: 1, FieldTypeId: 4, Required: false },
  { Id: 8, Title: "Tem filhos?", PropertyName: "HasChildren", ColumnSpan: 1, FieldTypeId: 4, Required: false },
  { Id: 9, Title: "Número de Filhos", PropertyName: "ChildrenQuantity", ColumnSpan: 1, FieldTypeId: 2, Required: false },
  { Id: 10, Title: "CEP", PropertyName: "CEP", ColumnSpan: 1, FieldTypeId: 6, Required: false },
  { Id: 11, Title: "Telefone", PropertyName: "Phone", ColumnSpan: 2, FieldTypeId: 7, Required: false },
];

export const sections: Array<ISection> = [
  { Id: 1, Title: "Dados gerais", FieldIds: [1, 4, 11, 7, 8, 9, 5, 10, 2, 3] },
  { Id: 2, Title: "Dados básicos", FieldIds: [1, 4, 11] },
  { Id: 3, Title: "Sócio economicos", FieldIds: [7, 8, 9, 5] },
  { Id: 4, Title: "Endereço", FieldIds: [10, 2, 3] },
  { Id: 5, Title: "Dados do conjugue", SubSectionIds: [2, 3, 4] },
];

export const forms: Array<IForm> = [
  { Id: 1, Columns: 1, SectionIds: [1], Title: "Dados do cliente" },
  { Id: 2, Columns: 3, SectionIds: [2, 3, 4], Title: "Dados do cliente por seção" },
  { Id: 3, Columns: 2, SectionIds: [1, 5], Title: "Dados do cliente e do conjugue" },
];

