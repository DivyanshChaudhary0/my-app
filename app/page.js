import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World
      <div>
        <Link href="/about">About</Link>
      </div>
      <div>
        <Link href="/services">Services</Link>
      </div>
    </div>
  );
}
