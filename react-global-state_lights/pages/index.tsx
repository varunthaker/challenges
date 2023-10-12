import Link from "../components/Link";
import { useLightStore } from "../store/lightStore";

export default function HomePage() {
  const numOfSwitchedOnLights = useLightStore(
    (state) => state.numOfSwitchedOnLights
  );

  return (
    <div>
      <h1>Home</h1>
      <p> {numOfSwitchedOnLights()} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
