import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import {useRouter} from 'next/router'
export function Menu(){
    let router = useRouter()
    const { t } = useTranslation()
    return(
        <>
        <Link href="/">
            <a>{t("menu:home")}</a>
        </Link>
        {' '}|{' '}
        <Link href="/sobre">
            <a>{t("menu:about")}</a>
        </Link>
        {' '}|{' '}
        <Link href="/contato">
            <a>{t("menu:contact")}</a>
        </Link>
        {' '}|{' '}
        <ul>
            {router.locales?.map(locale => (
                <li key={locale}>
                    <Link href={router.asPath} locale={locale}><a>{locale}</a></Link>
                </li>
            ))}
        </ul>
        </>
    )
}