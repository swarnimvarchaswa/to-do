import ToDoData from "@/app/Ui/toDoData";

export default function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="h-lvh w-lvw bg-black scroll-y-auto">
        <h1 className="text-white m-0 p-6 font-thin tracking-widest text-xl border-b-[1px] border-white/50">
          Minimalistic To-Do
        </h1>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white m-0 p-6 font-thin tracking-widest text-xl">
            {formattedDate}
          </h2>
          <div className="mx-6">
            <ToDoData />
          </div>
        </div>
      </div>
    </>
  );
}
