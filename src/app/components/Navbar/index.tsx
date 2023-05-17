import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex shadow w-full p-4 justify-between">
      <h1 className="font-bold">Stoichiometric</h1>
      <div className="flex gap-4">
        <Link href="/">HOME</Link>
        <Link href="/blog/pages/1">BLOG</Link>
      </div>
    </div>
  );
};

export default Nav;
