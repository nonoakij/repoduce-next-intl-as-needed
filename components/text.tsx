"use client"

import { useTranslations } from "next-intl"

export default function Text() {
  const t = useTranslations("Text")
  return <p>{t("foo")}</p>
}
