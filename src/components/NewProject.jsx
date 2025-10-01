import { useState } from 'react';
import Button from './Button';

const NewProject = ({ handleCancel, handleSave }) => {
  return (
    <div className="w-[35rem] mt-16">
      <div className="flex justify-end gap-4">
        <Button
          className="text-stone-800 hover:text-stone-950"
          onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          onClick={handleSave}>
          Save
        </Button>
      </div>
      <div>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Title
          </label>
          <input
            className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="text"
          />
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Description
          </label>
          <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"></textarea>
        </p>
        <p className="flex flex-col gap-1 my-4">
          <label className="text-sm font-bold uppercase text-stone-500">
            Due date
          </label>
          <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            type="date"
          />
        </p>
      </div>
    </div>
  );
};

export default NewProject;
