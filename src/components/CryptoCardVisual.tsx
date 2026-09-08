export function CryptoCardVisual({
  holderName = "SOYEE KIM",
  className = "",
}: {
  holderName?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[1.586/1] w-full max-w-[420px] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#d4af37]/40 via-transparent to-[#3ee0c4]/20 blur-2xl" />
      <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,#152036_0%,#0b1220_48%,#17324a_100%)] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#e4c56b]/15 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-[#3ee0c4]/10 blur-2xl" />
        <div className="flex items-start justify-between">
          <div>
            <p className="font-display text-xs tracking-[0.32em] text-gold">
              CRYPTOCARD
            </p>
            <p className="mt-1 text-[11px] text-white/50">Metal · Visa</p>
          </div>
          <svg viewBox="0 0 32 24" className="h-7 w-9 text-white/80">
            <path
              fill="currentColor"
              d="M6 4c6 3 9 7 10 12-3-2-7-3-12-3v-9h2zm20 0v9c-5 0-9 1-12 3 1-5 4-9 10-12h2z"
            />
          </svg>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <div className="h-10 w-12 rounded-md bg-gradient-to-br from-[#f3e2a0] via-[#c9a227] to-[#8a6a12] shadow-inner" />
          <div className="h-8 w-8 rounded-full border border-white/20" />
        </div>
        <p className="font-display mt-8 text-xl tracking-[0.18em] text-white/95 sm:text-2xl">
          4532  ••••  ••••  4242
        </p>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-white/45">
              CARDHOLDER
            </p>
            <p className="mt-1 text-sm tracking-[0.16em]">{holderName}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-[0.2em] text-white/45">VALID</p>
            <p className="mt-1 text-sm tracking-widest">12/29</p>
          </div>
        </div>
      </div>
    </div>
  );
}
