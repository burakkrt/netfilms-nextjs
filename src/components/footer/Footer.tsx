import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex h-full justify-center items-center text-red-400">
        Crated by
        <Link
          href="https://github.com/burakkrt"
          target="_blank"
          className="ms-1 underline hover:text-red-100 duration-150">
          @burakkurt
        </Link>
      </div>
    </footer>
  );
}
