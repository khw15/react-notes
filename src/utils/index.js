const showFormatedDate = (date) => {
    const options = {
        year: 'numeric', 
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }
    return new Date(date).toLocaleDateString('en-US', options)
}

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const extraContent = (html) => new DOMParser()
    .parseFromString(html, 'text/html')
    .documentElement.textContent

export { showFormatedDate, capitalizeFirstLetter, extraContent }