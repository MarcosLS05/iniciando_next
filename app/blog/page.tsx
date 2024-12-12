import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h2>Blog</h2>
      <p>Lista de blogs:</p>
      <ul>
        <li>
          <Link href="/blog/1">Este es el Blog 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Este es el Blog 2</Link>
        </li>
      </ul>
    </div>
  );
}

