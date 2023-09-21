import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Volume3() {
  const vol3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return (
    <>
      <h1>{vol3.title}</h1>
      <p>{vol3.description}</p>
      <ul>
        {vol3.books.map((book) => (
          <li key={vol3.slug}>{book.title}</li>
        ))}
      </ul>
      <Image src={vol3.cover} width={500} height={500} alt="img1"></Image>
      <br />
      <Link href="/volumes"> Return</Link>
    </>
  );
}
