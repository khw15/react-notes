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
  let localeString
  if (locale === 'id') {
    localeString = 'id-ID'
  } else if (locale === 'ko') {
    localeString = 'ko-KR'
  } else if (locale === 'ja') {
    localeString = 'ja-JP'
  } else {
    localeString = 'en-US'
  }

  return new Date(date).toLocaleDateString(localeString, options)
}

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1)

const extractContent = (html) =>
  new DOMParser().parseFromString(html, 'text/html').documentElement.textContent

export {showFormattedDate, capitalizeFirstLetter, extractContent}
