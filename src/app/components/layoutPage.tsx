"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const LayoutPages = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <div
      style={{
        backgroundImage: "url('/grid.svg')",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="text-white bg-black">
        <nav className="flex items-center justify-between gap-4 h-16 max-w-screen-xl mx-auto">
          <Link href="/">
            <div className="flex gap-4">
              <Image src="/next-white.svg" alt="logo" width={38} height={38} />
              <Image src="/redux.svg" alt="logo" width={34} height={34} />
            </div>
          </Link>

          <div>
            <ul className="flex gap-8">
              <li>
                <Link href="/introduction">
                  <span
                    className={`hover:text-purple-900 ${
                      pathname.includes("/introduction")
                        ? "text-purple-900"
                        : "text-white"
                    }`}
                  >
                    Introdução
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/concepts">
                  <span
                    className={`hover:text-purple-900 ${
                      pathname.includes("/concepts")
                        ? "text-purple-900"
                        : "text-white"
                    }`}
                  >
                    Conceitos
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/flow">
                  <span
                    className={`hover:text-purple-900 ${
                      pathname.includes("/flow")
                        ? "text-purple-900"
                        : "text-white"
                    }`}
                  >
                    Fluxo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/architecture">
                  <span
                    className={`hover:text-purple-900 ${
                      pathname.includes("/architecture")
                        ? "text-purple-900"
                        : "text-white"
                    }`}
                  >
                    Arquitetura
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="pt-24 pb-24">
        <div className="text-white">{children}</div>
      </div>
      <footer className="text-white bg-purple-900 h-16 fixed bottom-0 w-full z-10 ">
        <div className="max-w-screen-xl  flex items-center justify-between mx-auto h-16">
          <span> Estudo, NEXT.js com Redux, Sea Tecnologia - Junho/2024 </span>
          <Link href="https://github.com/DebsLorena">Lorena Debs</Link>
        </div>
      </footer>
    </div>
  );
};
