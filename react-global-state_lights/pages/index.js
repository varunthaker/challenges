import Link from "../components/Link";
import { useLightStore } from "@/store/lightStore";

export default function HomePage() {
  const { count } = useLightStore();
  return (
    <div>
      <h1>Home</h1>
      <p>{count} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
