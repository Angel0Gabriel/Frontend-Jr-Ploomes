// TIPOS

export type TNativeType = "string" | "number" | "boolean";
export type TColumns = 1 | 2 | 3;

export interface IFieldType {
  Id: number;
  Name: string;
  NativeType: TNativeType;
}

export interface IField {
  Id: number;
  Required: boolean;
  Title: string;
  PropertyName: string;
  ColumnSpan: TColumns;
  FieldTypeId: number;
}

export interface ISection {
  Id: number;
  Title: string;
  FieldIds?: Array<number>;
  SubSectionIds?: Array<number>;
}

export interface IForm {
  Id: number;
  Title: string;
  Columns: TColumns;
  SectionIds: Array<number>;
}

