import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <h1>Hello</h1>
      <Link href="/list">
        <a>List Item</a>
      </Link>
    </>
  );
};

export default Homepage;
