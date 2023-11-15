import {BsFillCollectionPlayFill} from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between">
      <Link className="flex items-end gap-4 hover:scale-105 duration-100" href="/">
        <BsFillCollectionPlayFill className="main-color-red" size="42px" />
        <h1 className="main-color-red inline-block text-4xl font-bold">VIZYONTELE</h1>
      </Link>
      <nav className="text-xl flex flex-row gap-5">
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
        <Link href="/">Kids</Link>
      </nav>
    </header>
  );
}
