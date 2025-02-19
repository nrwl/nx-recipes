import { useRef } from 'react';
import { useAddSetMutation } from './__generated__/operations';

export function AddSetForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [addSet] = useAddSetMutation({
    refetchQueries: ['setList'],
  });

  const handleSubmit = (formData: FormData) => {
    const name = formData.get('name')?.toString();
    const year = formData.get('year')?.toString();
    const numParts = parseInt(formData.get('numParts')?.toString() || '0', 10);

    if (name && year && numParts > 0) {
      addSet({ variables: { name, year, numParts } });
    }
    formRef.current?.reset();
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="border border-slate-200 max-w-60 p-6 mx-6"
    >
      <label
        htmlFor="name"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Name
      </label>
      <div className="mt-2">
        <input
          id="name"
          name="name"
          type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>

      <label
        htmlFor="name"
        className="mt-2 block text-sm/6 font-medium text-gray-900"
      >
        Year
      </label>
      <div className="mt-2">
        <input
          id="year"
          name="year"
          type="text"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>

      <label
        htmlFor="name"
        className="mt-2 block text-sm/6 font-medium text-gray-900"
      >
        Number of Parts
      </label>
      <div className="mt-2">
        <input
          id="numParts"
          name="numParts"
          type="number"
          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Create new set
      </button>
    </form>
  );
}

export default AddSetForm;
