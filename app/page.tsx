import Link from 'next/link';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <main>
      <h1>Home route</h1>

      <Link href={`/modal/first`}>Go to @modal/first</Link>
      <br />
      <Link href={`/modal/second`}>Go to @modal/second</Link>
      <br />
      <Link href={`/modal/third`}>Go to @modal/third</Link>
    </main>
  );
}

export const metadata = {
  title: 'home',
};
