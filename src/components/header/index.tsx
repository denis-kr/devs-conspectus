import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mb-8 z-10">
      <div className="grid grid-cols-3">
        <Link href="/">
          <Image src="/logo.png" alt="" width={100} height={100} />
        </Link>
        {/* <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                /> */}
        <nav className="self-center justify-self-center">
          <ul className="flex gap-x-12">
            <li className="text-sm/6 font-semibold text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="text-sm/6 font-semibold text-white">
              <Link href="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
