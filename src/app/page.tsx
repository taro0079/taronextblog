import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl">Stoichiometric</h1>
      <p className="p-4">ようこそ！awesometaroのページです！</p>
      <div className="flex gap-x-6 m-10">
        <div>
          <Link href="https://github.com/taro0079" className="text-blue-500">
            Github
          </Link>
        </div>
        <div>
          <Link
            href="https://twitter.com/jirorian_tele"
            className="text-blue-500"
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
