import {useContext} from 'react'
import LocaleContext from '../contexts/LocaleContext.js'
import content from '../utils/content.js'

function useLanguage(page) {
  const {locale} = useContext(LocaleContext)

  return content[`${page}Page`][locale]
}

export default useLanguage
