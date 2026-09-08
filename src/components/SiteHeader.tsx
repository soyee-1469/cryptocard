"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#070b14]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg tracking-[0.18em] text-gold">
          {SITE_NAME}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-gold"
                    : "transition-colors hover:text-white"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/apply"
            className="inline-flex h-10 items-center rounded-full bg-gold px-5 text-sm font-semibold text-[#1a1406] hover:bg-gold-strong"
          >
            지금 신청
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
          aria-expanded={open}
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">메뉴</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </span>
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/8 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-gold font-semibold text-[#1a1406]"
              onClick={() => setOpen(false)}
            >
              지금 신청
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
