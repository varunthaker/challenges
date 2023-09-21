import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Volume2() {
  const vol2 = volumes.find(({ slug }) => slug === "the-two-towers");
  return (
    <>
      <h1>{vol2.title}</h1>
      <p>{vol2.description}</p>
      <ul>
        {vol2.books.map((book) => (
          <li key={vol2.slug}>{book.title}</li>
        ))}
      </ul>
      <Image src={vol2.cover} width={500} height={500} alt="img1"></Image>
      <br />
      <Link href="/volumes"> Return</Link>
    </>
  );
}
