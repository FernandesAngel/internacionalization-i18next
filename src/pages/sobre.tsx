import useTranslation from "next-translate/useTranslation";
import { Menu } from "../components/Menu";


export default function About() {
  const { t } = useTranslation()
  return (
    <>
    <Menu />
    <h1>{t("about:title")}</h1>
    </>
  )
}
