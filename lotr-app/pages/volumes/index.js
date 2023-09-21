import Link from "next/link";
import { introduction } from "@/lib/data";

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        <li>
          <Link href="volumes/the-fellowship-of-the-ring">Volume-1</Link>
        </li>
        <li>
          <Link href="volumes/the-two-towers">Volume-2</Link>
        </li>
        <li>
          <Link href="volumes/the-return-of-the-king">Volume-3</Link>
        </li>
      </ul>
    </>
  );
}
