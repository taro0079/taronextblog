import Link from "next/link";
import { Generator } from "./generater";

const Pagination = ({
  totalCount,
  limit,
}: {
  totalCount: number;
  limit: number;
}) => {
  return (
    <ul className="flex gap-4 p-6">
      {Generator(totalCount, limit).map((number, index) => (
        <li key={index} className="border rounded-xs w-10 h-10 ">
          <Link
            href={`/blog/pages/${number}`}
            className="flex justify-center items-center h-full"
          >
            {number}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
