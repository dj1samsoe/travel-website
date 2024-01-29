import Link from "next/link";

export default function MenuItems() {
  return (
    <div className="flex items-center">
      <ul className="flex gap-5 items-center text-lg font-medium">
        <li>
          <Link href={"/destination"} aria-label="destination" target="_blank">
            Destination
          </Link>
        </li>
        <li>
          <Link href={"/stories"} aria-label="stories" target="_blank">
            Stories
          </Link>
        </li>
        <li>
          <Link href={"/reviews"} aria-label="reviews" target="_blank">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
