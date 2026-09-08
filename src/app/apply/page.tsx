import type { Metadata } from "next";
import { ApplyForm } from "./ApplyForm";

export const metadata: Metadata = {
  title: "카드 신청",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.1fr] md:py-20">
      <div>
        <p className="font-display text-xs tracking-[0.28em] text-teal">
          APPLY
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          CryptoCard 신청
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
          가상 카드는 승인 후 바로 사용할 수 있습니다. 실물 메탈 카드를 함께
          신청하면 등록된 주소로 배송됩니다.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-white/70">
          <li>· 본인 확인 후 가상 카드 번호 발급</li>
          <li>· USDT / USDC / BTC / ETH 충전</li>
          <li>· Visa 온·오프라인 가맹점 결제</li>
        </ul>
      </div>
      <ApplyForm />
    </div>
  );
}
