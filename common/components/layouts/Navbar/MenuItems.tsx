import Link from "next/link";

export default function MenuItems() {
  return (
    <div className="flex items-center">
      <ul className="flex gap-5 items-center text-lg font-medium">
        <li>
          <Link href={"/destination"} aria-label="destination">
            Destination
          </Link>
        </li>
        <li>
          <Link href={"/#"} aria-label="stories">
            Stories
          </Link>
        </li>
        <li>
          <Link href={"/#"} aria-label="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
