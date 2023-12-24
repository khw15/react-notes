import React, {useContext} from 'react'
import {MdGTranslate} from 'react-icons/md'
import LocaleContext from '../../contexts/LocaleContext'

export default function LangToggler() {
  const {locale, toggleLocale} = useContext(LocaleContext)

  const getLanguageTitle = () => {
    switch (locale) {
      case 'id':
        return 'Indonesia'
      case 'en':
        return 'English'
      case 'ko':
        return '한국어'
      case 'ja':
        return '日本語'
      default:
        return 'Language'
    }
  }

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
