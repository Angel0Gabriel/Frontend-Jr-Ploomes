import { useState } from 'react';
import { Modal } from './components/Modal/Modal';
import { DynamicForm } from './components/DynamicForm/DynamicForm';
import { forms } from './constants/formData';
import type { IForm } from './types';
import './styles/App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<IForm | null>(null);

  const handleOpenModal = (form: IForm) => {
    setSelectedForm(form);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedForm(null);
  };

  const handleFormSubmit = (data: Record<string, string | number | boolean>) => {
    console.log('Formulário submetido:', data);
    handleCloseModal();
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema de Formulários Dinâmicos</h1>
        <p>Selecione um formulário para preencher</p>
      </header>

      <main className="app-main">
        <div className="form-buttons">
          {forms.map(form => (
            <button
              key={form.Id}
              className="form-button"
              onClick={() => handleOpenModal(form)}
            >
              <div className="form-button-content">
                <span className="form-button-title">{form.Title}</span>
                <span className="form-button-subtitle">
                  {form.SectionIds.length} {form.SectionIds.length === 1 ? 'seção' : 'seções'}
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>

      {selectedForm && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedForm.Title}
        >
          <DynamicForm
            form={selectedForm}
            onSubmit={handleFormSubmit}
            onCancel={handleCloseModal}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
