"use client";

import { FormEvent, type ReactNode, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  country: string;
  cardType: "virtual" | "physical";
  asset: string;
  agree: boolean;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  country: "KR",
  cardType: "virtual",
  asset: "USDT",
  agree: false,
};

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};
  if (!form.name.trim()) errors.name = "이름을 입력해 주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "올바른 이메일을 입력해 주세요.";
  }
  if (!form.phone.trim()) errors.phone = "연락처를 입력해 주세요.";
  if (!form.agree) errors.agree = "약관에 동의해 주세요.";
  return errors;
}

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-teal/30 bg-teal/10 p-8"
        data-testid="apply-success"
      >
        <p className="font-display text-sm tracking-[0.2em] text-teal">
          APPLICATION RECEIVED
        </p>
        <h2 className="mt-3 text-2xl font-semibold">신청이 접수되었습니다</h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          {form.name}님, {form.email}로 검토 결과를 보내 드립니다. 가상 카드는
          승인 후 바로 사용할 수 있고, 실물 카드를 선택한 경우 배송 안내가
          이어집니다.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8"
    >
      <Field
        label="이름"
        error={errors.name}
        htmlFor="name"
      >
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          placeholder="홍길동"
        />
      </Field>
      <Field label="이메일" error={errors.email} htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
          placeholder="you@email.com"
        />
      </Field>
      <Field label="연락처" error={errors.phone} htmlFor="phone">
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass}
          placeholder="010-0000-0000"
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="거주 국가" htmlFor="country">
          <select
            id="country"
            name="country"
            value={form.country}
            onChange={(e) => update("country", e.target.value)}
            className={inputClass}
          >
            <option value="KR">대한민국</option>
            <option value="JP">일본</option>
            <option value="US">미국</option>
            <option value="VN">베트남</option>
            <option value="SG">싱가포르</option>
          </select>
        </Field>
        <Field label="충전 자산" htmlFor="asset">
          <select
            id="asset"
            name="asset"
            value={form.asset}
            onChange={(e) => update("asset", e.target.value)}
            className={inputClass}
          >
            <option value="USDT">USDT</option>
            <option value="USDC">USDC</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </Field>
      </div>
      <fieldset>
        <legend className="mb-2 text-sm text-white/70">카드 종류</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {(
            [
              { value: "virtual", label: "가상 카드", hint: "승인 즉시 발급" },
              { value: "physical", label: "실물 메탈 카드", hint: "2–5일 배송" },
            ] as const
          ).map((option) => (
            <label
              key={option.value}
              className={`cursor-pointer rounded-xl border p-4 ${
                form.cardType === option.value
                  ? "border-gold bg-gold/10"
                  : "border-white/10 bg-transparent"
              }`}
            >
              <input
                type="radio"
                name="cardType"
                value={option.value}
                checked={form.cardType === option.value}
                onChange={() => update("cardType", option.value)}
                className="sr-only"
              />
              <span className="block font-medium">{option.label}</span>
              <span className="mt-1 block text-xs text-white/50">
                {option.hint}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="flex items-start gap-3 text-sm text-white/70">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={(e) => update("agree", e.target.checked)}
          className="mt-1"
        />
        <span>
          개인정보 처리 및 카드 발급 안내에 동의합니다. 본 신청은 미리보기용
          접수 화면이며 실제 발급 심사는 별도 안내됩니다.
        </span>
      </label>
      {errors.agree ? (
        <p className="text-sm text-red-300">{errors.agree}</p>
      ) : null}
      <button
        type="submit"
        className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold text-sm font-semibold text-[#1a1406] hover:bg-gold-strong"
      >
        신청서 제출
      </button>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-xl border border-white/10 bg-[#0b1220] px-3 text-sm text-white outline-none focus:border-gold";

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-white/70">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-red-300">{error}</p> : null}
    </div>
  );
}
