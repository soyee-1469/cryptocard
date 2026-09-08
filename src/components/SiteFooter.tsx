import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#05080f]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display tracking-[0.2em] text-gold">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-white/50">
            암호화폐로 충전하고, 전 세계에서 결제하세요.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/55">
          <Link href="/about" className="hover:text-white">
            소개
          </Link>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="/apply" className="hover:text-white">
            카드 신청
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/35">
        © {new Date().getFullYear()} CryptoCard. All rights reserved.
      </div>
    </footer>
  );
}
