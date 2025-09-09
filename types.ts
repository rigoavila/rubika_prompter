
export interface PromptVariable {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'slider';
  placeholder: string;
  tip: string;
  options?: string[];
  defaultValue?: string | number;
}

export interface PromptTemplate {
  id: string;
  name:string;
  description: string;
  keywords: string[];
  category: 'normal' | 'programmer';
  variables: PromptVariable[];
  generate: (vars: Record<string, any>, antiSesgo: boolean) => string;
}

export interface SavedPrompt {
  id: string;
  title: string;
  templateId: string;
  variableValues: Record<string, any>;
  antiSesgo: boolean;
  createdAt: string;
}