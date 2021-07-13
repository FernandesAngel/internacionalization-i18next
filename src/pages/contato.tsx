import useTranslation from "next-translate/useTranslation";
import { Menu } from "../components/Menu";

export default function Home() {
  const {t} = useTranslation()
  return (
    <>
    <Menu />
    <h1>{t("contact:title")}</h1>
    </>
  )
}
