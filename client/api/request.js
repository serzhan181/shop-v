const regexps = {
  takeBase: /^[*\[\]]\[.*(?=\])\]/g,
  body: /\{.*(?=\})\}/g,
}

export const request = (query, options = {}) => {
  if (Object.keys(options).length) {
  }
  return ``
}

// ?: wto means "what to order", e.g _createdAt, title, etc.
// TODO: change wto to more meaningful param.
// !: it can override other params passed to option.
const optionFns = {
  order: (query, wto, orderBy = 'desc') => {
    const orderedBase =
      query.trim().match(regexps.takeBase)[0] + `| order(${wto} ${orderBy})`

    return orderedBase + query.trim().match(regexps.body)[0]
  },
}
