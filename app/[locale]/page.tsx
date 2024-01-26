import { NextIntlClientProvider, useTranslations } from "next-intl"
import Text from "@/components/text"

export default function Index() {
  const t = useTranslations("Index")
  return (
    <main>
      {t("title")}
      <Text />
    </main>
  )
}
