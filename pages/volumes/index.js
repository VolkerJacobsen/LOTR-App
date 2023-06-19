import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
  console.log(randomVolume);

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={title}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push(`/volumes/${randomVolume.slug}`)}>
        Random volume
      </button>
    </>
  );
}
