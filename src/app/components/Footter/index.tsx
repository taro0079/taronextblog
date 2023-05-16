"use client";

const Footter = () => {
  const date = new Date();
  return (
    <div>
      <div className="flex justify-center">
        <p className="text-xs">created by T. M. at {date.getFullYear()}</p>
      </div>
    </div>
  );
};
export default Footter;
