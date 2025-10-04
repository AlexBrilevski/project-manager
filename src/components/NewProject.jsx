import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const NewProject = ({ handleCancel, handleSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };
  const handleDueDateChange = (e) => {
    setDueDate(e.currentTarget.value);
  };

  const onSaveClick = () => {
    handleSave({ id: Date.now(), title, description, dueDate, tasks: [] });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button
            className={"text-stone-800 hover:text-stone-950"}
            onClick={handleCancel}>
            Cancel
          </Button>
        </li>
        <li>
          <Button
            className={"px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"}
            onClick={onSaveClick}>
            Save
          </Button>
        </li>
      </menu>
      <div>
        <Input label={'Title'} value={title} onChange={handleTitleChange} type={'text'} />
        <Input label={'Description'} value={description} onChange={handleDescriptionChange} isTextarea={true} />
        <Input label={'Due date'} value={dueDate} onChange={handleDueDateChange} type={'date'} />
      </div>
    </div>
  );
};

export default NewProject;
