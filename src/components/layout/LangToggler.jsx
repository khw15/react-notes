import React, {useContext} from 'react'
import {MdGTranslate} from 'react-icons/md'
import LocaleContext from '../../contexts/LocaleContext'

const languageTitles = {
  id: 'Indonesia',
  en: 'English',
  ko: '한국어',
  ja: '日本語',
  default: 'Language'
}

const LangToggler = () => {
  const {locale, toggleLocale} = useContext(LocaleContext)

  // eslint-disable-next-line max-len
  const getLanguageTitle = () => languageTitles[locale] || languageTitles.default

  return (
    <button
      type="button"
      title={getLanguageTitle()}
      className="toggle-locale"
      onClick={toggleLocale}
    >
      <MdGTranslate />
    </button>
  )
}

export default LangToggler
