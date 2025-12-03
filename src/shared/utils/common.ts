function isEmpty(value: any): boolean {
  if (value == null) {
    return true
  }

  if (Array.isArray(value) || typeof value === 'string' || typeof value === 'function') {
    return value.length === 0
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0
  }

  if (typeof value === 'object') {
    if ('length' in value && typeof value.length === 'number') {
      return value.length === 0
    }

    return Object.keys(value).length === 0
  }

  return false
}

function isHtmlEmpty(htmlString: string | undefined): boolean {
  if (!htmlString) return true

  const tempDiv = document.createElement('div')
  tempDiv.innerHTML = htmlString

  const textContent = tempDiv.textContent || tempDiv.innerText || ''

  return textContent.trim() === ''
}

export { isEmpty, isHtmlEmpty }
