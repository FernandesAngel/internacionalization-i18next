import { Menu } from "../components/Menu";
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Menu />
      <h1>{t("home:title")}</h1>
    </>
  )
}
