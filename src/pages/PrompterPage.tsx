import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { PROMPT_TEMPLATES } from '@/constants/prompts';
import { PromptTemplate, SavedPrompt } from '@/types';
import useLocalStorage from '@/hooks/useLocalStorage';

// --- Helper Components defined outside App to prevent re-renders ---

interface IdeaObjetivoCardProps {
    activeTab: 'normal' | 'programmer';
    setActiveTab: (tab: 'normal' | 'programmer') => void;
    setSelectedTemplate: (template: PromptTemplate | null) => void;
    setVariableValues: (values: Record<string, any>) => void;
}
const IdeaObjetivoCard: React.FC<IdeaObjetivoCardProps> = ({ activeTab, setActiveTab, setSelectedTemplate, setVariableValues }) => {
    const normalTemplates = useMemo(() => PROMPT_TEMPLATES.filter(p => p.category === 'normal'), []);
    const programmerTemplates = useMemo(() => PROMPT_TEMPLATES.filter(p => p.category === 'programmer'), []);

    const handleSelectChange = (id: string) => {
         const newTemplate = PROMPT_TEMPLATES.find(t => t.id === id);
         setSelectedTemplate(newTemplate || null);
         setVariableValues({});
    };

    const handleTabClick = (tab: 'normal' | 'programmer') => {
        setActiveTab(tab);
        setSelectedTemplate(null);
        setVariableValues({});
    }

    return (
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">1. Idea y Objetivo</h2>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">Entrada</span>
            </div>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    <button
                        onClick={() => handleTabClick('normal')}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'normal'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                    >
                        Modo Normal
                    </button>
                    <button
                        onClick={() => handleTabClick('programmer')}
                         className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'programmer'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                    >
                        Modo Programador
                    </button>
                </nav>
            </div>
            <div className="mt-6">
                {activeTab === 'programmer' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seleccioná un prompt de programación</label>
                         <select
                            onChange={(e) => handleSelectChange(e.target.value)}
                            defaultValue=""
                            className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-slate-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Elegí una plantilla...</option>
                            {programmerTemplates.map(template => (
                                <option key={template.id} value={template.id}>{template.name}</option>
                            ))}
                        </select>
                    </div>
                )}
                 {activeTab === 'normal' && (
                    <div>
                        {/* This can be expanded later with the idea -> suggestion flow */}
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Seleccioná una plantilla</label>
                         <select
                            onChange={(e) => handleSelectChange(e.target.value)}
                            defaultValue=""
                            className="w-full p-2 border border-gray-300 rounded-md bg-white dark:bg-slate-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Elegí una plantilla...</option>
                            {normalTemplates.map(template => (
                                <option key={template.id} value={template.id}>{template.name}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>
        </div>
    );
};


interface PersonalizationCardProps {
    selectedTemplate: PromptTemplate | null;
    variableValues: Record<string, any>;
    setVariableValues: (values: Record<string, any>) => void;
    antiSesgo: boolean;
    setAntiSesgo: (value: boolean) => void;
}
const PersonalizationCard: React.FC<PersonalizationCardProps> = ({ selectedTemplate, variableValues, setVariableValues, antiSesgo, setAntiSesgo }) => {
    const handleValueChange = (key: string, value: any) => {
        setVariableValues({ ...variableValues, [key]: value });
    };

    return (
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md h-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">2. Personalización</h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Estilo</span>
            </div>

            {!selectedTemplate ? (
                 <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400 py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="font-medium">Seleccioná una plantilla para ver sus variables.</p>
                </div>
            ) : (
                <div>
                    {selectedTemplate.variables.map(v => (
                        <div key={v.key} className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{v.label}</label>
                            {v.type === 'textarea' ? (
                                <textarea
                                    className="w-full h-24 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder={v.placeholder}
                                    value={variableValues[v.key] || ''}
                                    onChange={(e) => handleValueChange(v.key, e.target.value)}
                                />
                            ) : v.type === 'select' ? (
                                <select
                                    className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:text-white"
                                    value={variableValues[v.key] || v.defaultValue || ''}
                                    onChange={(e) => handleValueChange(v.key, e.target.value)}
                                >
                                    {v.options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            ) : (
                                <input
                                    type={v.type}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder={v.placeholder}
                                    value={variableValues[v.key] || ''}
                                    onChange={(e) => handleValueChange(v.key, e.target.value)}
                                />
                            )}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{v.tip}</p>
                        </div>
                    ))}
                    <div className="mt-6">
                         <label className="flex items-center space-x-3 cursor-pointer">
                            <input type="checkbox" checked={antiSesgo} onChange={(e) => setAntiSesgo(e.target.checked)} className="form-checkbox h-5 w-5 text-red-600 rounded focus:ring-red-500 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"/>
                            <span className="text-gray-900 dark:text-gray-100 font-medium">Activar Modo Anti-sesgo</span>
                         </label>
                         <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Añade una visión de "abogado del diablo" para identificar riesgos y supuestos no validados.</p>
                    </div>
                </div>
            )}
        </div>
    );
};


interface PreviewCardProps {
    generatedPrompt: string;
    onSave: () => void;
}
const PreviewCard: React.FC<PreviewCardProps> = ({ generatedPrompt, onSave }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedPrompt);
        alert('Prompt copiado al portapapeles!');
    };

    return (
        <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md h-full flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">3. Vista Previa del Prompt Final</h2>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Salida</span>
            </div>
            <pre className="whitespace-pre-wrap bg-slate-100 dark:bg-slate-900 p-4 rounded-md text-sm flex-grow overflow-y-auto scroll-container text-gray-800 dark:text-gray-200">
                <code>{generatedPrompt}</code>
            </pre>
            <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button onClick={copyToClipboard} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition">Copiar Prompt</button>
                <button onClick={onSave} className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition dark:bg-slate-600 dark:hover:bg-slate-500">Guardar en Biblioteca</button>
            </div>
        </div>
    );
};

interface LibraryDrawerProps {
    savedPrompts: SavedPrompt[];
    loadPrompt: (prompt: SavedPrompt) => void;
    deletePrompt: (id: string) => void;
    copyPrompt: (prompt: SavedPrompt) => void;
    clearLibrary: () => void;
    onClose: () => void;
}
const LibraryDrawer: React.FC<LibraryDrawerProps> = ({ savedPrompts, loadPrompt, deletePrompt, copyPrompt, clearLibrary, onClose }) => {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 pb-4 border-b dark:border-gray-700">
                <h2 className="text-xl font-bold dark:text-gray-100">Biblioteca</h2>
                 <button onClick={onClose} className="text-gray-500 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="flex-grow overflow-y-auto scroll-container -mr-4 pr-4">
                {savedPrompts.length === 0 ? (
                    <p className="text-gray-500 dark:text-gray-400 text-sm">No hay prompts guardados.</p>
                ) : (
                    <ul className="space-y-2">
                        {savedPrompts.map(p => (
                            <li key={p.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded-md group">
                                <div className="flex justify-between items-center">
                                    <div onClick={() => loadPrompt(p)} className="cursor-pointer flex-grow">
                                        <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm">{p.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">{new Date(p.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => copyPrompt(p)} className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300" title="Copiar">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" /><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H4z" /></svg>
                                        </button>
                                        <button onClick={() => deletePrompt(p.id)} className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" title="Borrar">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
             {savedPrompts.length > 0 && (
                <button onClick={clearLibrary} className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-2 rounded-md hover:bg-red-600 transition-colors text-sm">
                    Limpiar Biblioteca
                </button>
            )}
        </div>
    )
}

// --- Main App Component ---

const App: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | null>(null);
  const [variableValues, setVariableValues] = useState<Record<string, any>>({});
  const [antiSesgo, setAntiSesgo] = useState<boolean>(false);
  const [savedPrompts, setSavedPrompts] = useLocalStorage<SavedPrompt[]>('prompt-architect-library', []);
  const [isLibraryOpen, setIsLibraryOpen] = useState<boolean>(false);

  const [isProgrammerMode, setIsProgrammerMode] = useLocalStorage<boolean>('isProgrammerMode', false);
  const [activeTab, setActiveTab] = useState<'normal' | 'programmer'>(isProgrammerMode ? 'programmer' : 'normal');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isProgrammerMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // No FOUC script in index.html is needed anymore with this setup
    localStorage.setItem('theme', isProgrammerMode ? 'dark' : 'light');
  }, [isProgrammerMode]);

  const toggleProgrammerMode = () => {
    const newMode = !isProgrammerMode;
    setIsProgrammerMode(newMode);
    setActiveTab(newMode ? 'programmer' : 'normal');
    setSelectedTemplate(null);
    setVariableValues({});
  };

  const generatedPrompt = useMemo(() => {
      if (!selectedTemplate) return 'El prompt generado aparecerá aquí en formato Markdown...';
      return selectedTemplate.generate(variableValues, antiSesgo);
  }, [selectedTemplate, variableValues, antiSesgo]);

  const handleSavePrompt = () => {
      if (!selectedTemplate) return;
      const title = (variableValues.negocio || variableValues.producto || variableValues.nombre_agente || variableValues.componente_descripcion || selectedTemplate.name).slice(0, 40);
      const newPrompt: SavedPrompt = {
          id: new Date().toISOString(),
          title: title || `Prompt ${savedPrompts.length + 1}`,
          templateId: selectedTemplate.id,
          variableValues,
          antiSesgo,
          createdAt: new Date().toISOString()
      };
      setSavedPrompts([...savedPrompts, newPrompt]);
      setIsLibraryOpen(true);
  };

  const handleLoadPrompt = (prompt: SavedPrompt) => {
      const template = PROMPT_TEMPLATES.find(t => t.id === prompt.templateId);
      if (template) {
          setActiveTab(template.category);
          setSelectedTemplate(template);
          setVariableValues(prompt.variableValues);
          setAntiSesgo(prompt.antiSesgo);
          setIsLibraryOpen(false);
      }
  };

  const handleCopyPrompt = (prompt: SavedPrompt) => {
    const template = PROMPT_TEMPLATES.find(t => t.id === prompt.templateId);
    if (template) {
        const promptText = template.generate(prompt.variableValues, prompt.antiSesgo);
        navigator.clipboard.writeText(promptText);
        alert('Prompt copiado al portapapeles!');
    }
  };

  const handleDeletePrompt = (id: string) => {
      setSavedPrompts(savedPrompts.filter(p => p.id !== id));
  }

  const handleClearLibrary = () => {
    if(window.confirm("¿Estás seguro de que quieres borrar todos los prompts guardados?")) {
      setSavedPrompts([]);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex flex-col transition-colors duration-300">
      <header className="bg-white dark:bg-slate-800 shadow-sm p-4 z-30 flex justify-between items-center sticky top-0 h-16 border-b border-slate-200 dark:border-slate-700">
        <h1 className="text-xl md:text-2xl font-bold">
            <span style={{color: '#E65100'}}>Rubika</span> <span className="text-gray-800 dark:text-gray-100">Prompt Architect</span>
        </h1>
        <div className="flex items-center space-x-4">
            <label htmlFor="programmer-mode-toggle" className="flex items-center cursor-pointer">
                <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Modo Programador</span>
                <div className="relative">
                    <input type="checkbox" id="programmer-mode-toggle" className="sr-only peer" checked={isProgrammerMode} onChange={toggleProgrammerMode} />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </div>
            </label>
            <button
                onClick={() => setIsLibraryOpen(true)}
                className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors dark:bg-slate-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-slate-600 text-sm"
            >
                Biblioteca
            </button>
            <button
                className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors dark:bg-slate-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-slate-600 text-sm"
            >
                Ayuda
            </button>
        </div>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 lg:p-6 flex-grow">
            <div className="flex flex-col gap-6">
                <IdeaObjetivoCard
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    setSelectedTemplate={setSelectedTemplate}
                    setVariableValues={setVariableValues}
                />
                <PersonalizationCard
                    selectedTemplate={selectedTemplate}
                    variableValues={variableValues}
                    setVariableValues={setVariableValues}
                    antiSesgo={antiSesgo}
                    setAntiSesgo={setAntiSesgo}
                />
            </div>
            <PreviewCard generatedPrompt={generatedPrompt} onSave={handleSavePrompt} />
      </main>

      {isLibraryOpen && (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40 transition-opacity duration-300"
            onClick={() => setIsLibraryOpen(false)}
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isLibraryOpen ? 'translate-x-0' : 'translate-x-full'} dark:bg-slate-800`}>
         <LibraryDrawer
            savedPrompts={savedPrompts}
            loadPrompt={handleLoadPrompt}
            deletePrompt={handleDeletePrompt}
            copyPrompt={handleCopyPrompt}
            clearLibrary={handleClearLibrary}
            onClose={() => setIsLibraryOpen(false)}
         />
      </div>
    </div>
  );
};

export default App;
