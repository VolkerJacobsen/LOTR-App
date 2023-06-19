import { volumes } from "../../../lib/data.js";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const data = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <Link href="../volumes">← All volumes</Link>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <ul>
        <li>
          {data.books[0].ordinal} - {data.books[0].title}
        </li>
        <li>
          {data.books[1].ordinal} - {data.books[1].title}
        </li>
      </ul>
      <Image
        src={data.cover}
        height={230}
        width={140}
        alt="The fellowship of the ring cover"
      />
      <p>
        <Link href="../volumes/the-two-towers">The two towers</Link>
        <Link href="../volumes/the-return-of-the-ring">
          The return of the ring
        </Link>
      </p>
    </>
  );
}
