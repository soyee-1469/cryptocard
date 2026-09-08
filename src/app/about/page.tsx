import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 md:py-24">
      <p className="font-display text-xs tracking-[0.28em] text-teal">ABOUT</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">
        잔액을 카드로 꺼내는 가장 간단한 방법
      </h1>
      <div className="mt-8 space-y-5 text-sm leading-7 text-white/70">
        <p>
          CryptoCard는 암호화폐를 일상 결제 수단으로 바꿔 주는 선불 카드
          서비스입니다. 거래소에서 법정화폐로 출금하기 어려운 순간, 해외 결제나
          구독, 여행 경비를 카드 한 장으로 처리할 수 있게 만드는 것이 목표입니다.
        </p>
        <p>
          사용자는 스테이블코인 또는 메이저 코인을 충전해 두고, 가맹점 결제 시
          필요한 법정화폐로 전환됩니다. 가상 카드로 즉시 시작하고, 필요한
          경우에만 실물 메탈 카드를 받을 수 있습니다.
        </p>
        <p>
          이 저장소는 CryptoCard 웹 서비스의 첫 버전입니다. 신청 화면은 흐름을
          검증하기 위한 프론트엔드이며, 실제 발급·결제 연동은 이후 단계에서
          붙입니다.
        </p>
      </div>
      <Link
        href="/apply"
        className="mt-10 inline-flex h-12 items-center rounded-full bg-gold px-6 text-sm font-semibold text-[#1a1406] hover:bg-gold-strong"
      >
        카드 신청하기
      </Link>
    </div>
  );
}
