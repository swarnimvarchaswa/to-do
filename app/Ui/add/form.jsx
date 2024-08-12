export default function Form({handleSubmit, initialValues = {}}) {
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          type="text"
          name="task"
          placeholder="Task"
          className="w-full bg-white/10 text-lg py-2 px-4 mb-6 rounded-xl text-white/90"
          defaultValue={initialValues.task || ""}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description (optional)"
          className="w-full bg-white/10 text-lg py-2 px-4 mb-6 rounded-xl text-white/90"
          defaultValue={initialValues.description || ""}
        />
        <select
          name="priority"
          defaultValue={initialValues.priority || ""}
          className="w-full bg-white/10 text-lg py-2 px-4 mb-6 rounded-xl text-white/90"
          placeholder="hi"
        >
          <option value="" disabled className="bg-black">
            Priority (optional)
          </option>
          <option value="High" className="bg-black text-red-300">
            High
          </option>
          <option value="Medium" className="bg-black text-blue-300">
            Medium{" "}
          </option>
          <option value="Low" className="bg-black text-yellow-200">
            Low{" "}
          </option>
          <option value="Optional" className="bg-black text-green-300">
            Optional{" "}
          </option>
        </select>

        <button
          type="submit"
          className="w-full bg-white/50 hover:bg-white/70 text-lg py-2 px-4 mb-6 rounded-xl text-white/90"
        >
          Add
        </button>
      </form>
    </>
  );
}
