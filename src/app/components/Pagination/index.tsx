import Link from "next/link";

const Pagination = ({
  totalCount,
  limit,
}: {
  totalCount: number;
  limit: number;
}) => {
  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };
  return (
    <ul className="flex gap-4 p-6">
      {range(1, Math.ceil(totalCount / limit)).map((number, index) => (
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
