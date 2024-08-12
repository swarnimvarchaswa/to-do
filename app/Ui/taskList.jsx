import {
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

export default function TaskList({ task, onDelete, onComplete }) {
  return (
    <div
      key={task.id}
      className={clsx(
        "relative my-1 border-l-2  rounded-r-xl py-3 text-white/90 bg-white/10 hover:bg-white/20 group",
        {
          "border-red-300": task.priority === "High",
          "border-blue-300": task.priority === "Medium",
          "border-yellow-200": task.priority === "Low",
          "border-green-300": task.priority === "Optional",
          "border-white/90": task.priority === "",
        }
      )}
    >
      <div className=" flex flex-row">
        <p className="grow pl-5 text-xl line-clamp-1 select-none">
          {task.task}
        </p>

        <div
          className=" w-6 h-6  my-auto mx-2 hidden group-hover:block hover:text-green-300 flex-shrink-0"
          onClick={() => onComplete(task.id)}
        >
          <CheckCircleIcon className="w-full h-full" />
        </div>
        <Link className=" w-6 h-6 my-auto mx-2 hidden group-hover:block hover:text-blue-300 flex-shrink-0"
        href={`./${task.id}/edit`}
        >
          <PencilSquareIcon className="w-full h-full" />
        </Link>
        <div
          className=" w-6 h-6 my-auto ml-2 mr-4 hidden group-hover:block hover:text-red-300 flex-shrink-0"
          onClick={() => onDelete(task.id)}
        >
          <TrashIcon className="w-full h-full" />
        </div>
      </div>

      <div className="w-full border-b-[1px] my-2 px-4 border-white/30 hidden group-hover:block"></div>

      <p className="mx-6 my-5 hidden group-hover:block select-none text-white/70 text-base">
        {task.description}
      </p>
      <p className=" absolute bottom-1 right-2 w-fit hidden group-hover:block select-none text-white/40 text-xs">
        {new Date(task.date).toLocaleString("en-US", {
          weekday: "short", // Shortened day of the week
          month: "short", // Shortened month
          day: "numeric", // Numeric day of the month
          hour: "2-digit", // 2-digit hour
          minute: "2-digit", // 2-digit minutes
        })}
      </p>
    </div>
  );
}
