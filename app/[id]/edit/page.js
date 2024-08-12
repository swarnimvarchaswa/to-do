import Edit from "@/app/Ui/edit/edit";

export default function EditPage() {
  return (
    <>
      <div className="h-lvh w-lvw bg-black scroll-y-auto">
        <h1 className="text-white m-0 p-6 font-thin tracking-widest text-xl border-b-[1px] border-white/50">
          Minimalistic To-Do
        </h1>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white m-0 p-6 font-thin tracking-widest text-xl">
            Edit
          </h2>
          <div className="mx-6">
            <Edit />
          </div>
        </div>
      </div>
    </>
  );
}
