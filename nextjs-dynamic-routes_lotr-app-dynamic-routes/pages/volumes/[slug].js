import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Image from "next/image";
import Head from "next/head";

export default function VolumeDetail() {
  const router = useRouter();
  const routerQuery = router.query.slug;

  const volIndex = volumes.findIndex((vol) => vol.slug === routerQuery);
  const volume = volumes[volIndex];
  const nextVolume = volumes[volIndex + 1];
  const previousVolume = volumes[volIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}:<strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <Link href={`/volumes/${previousVolume.slug}`}>Previous Volume</Link>
      ) : null}
      {nextVolume ? (
        <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
      ) : null}
    </>
  );
}
