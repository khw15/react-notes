import Cookies from 'js-cookie'

const showFormattedDate = (date) => {
  const locale = Cookies.get('locale') || 'en'

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  // Set locale based on the cookie value
  const localeMappings = {
    id: 'id-ID',
    ko: 'ko-KR',
    ja: 'ja-JP',
    en: 'en-US'
  }

  const localeString = localeMappings[locale] || 'en-US'

  return new Date(date).toLocaleDateString(localeString, options)
}

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const extractContent = (html) =>
  new DOMParser().parseFromString(html, 'text/html').documentElement.textContent

export {showFormattedDate, capitalizeFirstLetter, extractContent}
