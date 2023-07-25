const uuid = () => {
  const hexDigits = 'abcdef0123456789'
  const uuid = Array(36).fill(null)

  return uuid
    .map((e, i) => {
      return i === 8 || i === 13 || i === 18 || i === 23
        ? '-'
        : hexDigits[Math.floor(Math.random() * hexDigits.length)]
    })
    .join('')
}

export default uuid
