import { volumes } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
export default function Volume1() {
  const vol1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <h1>{vol1.title}</h1>
      <p>{vol1.description}</p>
      <ul>
        {vol1.books.map((book) => (
          <li key={vol1.slug}>{book.title}</li>
        ))}
      </ul>
      <Image src={vol1.cover} width={500} height={500} alt="img1"></Image>
      <br />
      <Link href="/volumes"> Return</Link>
    </>
  );
}
