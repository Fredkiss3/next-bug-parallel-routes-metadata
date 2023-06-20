import Link from 'next/link';

export default async function Page({ params }) {
  return (
    <div>
      <h2 style={{ color: 'red' }}>Parallel route (/modal/{params.path})</h2>

      <Link href={`/`}>go home</Link>
      <br />
      <a href={`/`}>go home (full reload)</a>
    </div>
  );
}

export function generateMetadata({ params }) {
  return {
    title: `@modal ${params.path}`,
  };
}
