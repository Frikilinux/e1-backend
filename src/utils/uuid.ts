const uuid = (): string => {
  const hexDigits = 'abcdef0123456789'
  const uuid: string[] = Array(36).fill(null)

  return uuid
    .map((_, i) => {
      return i === 8 || i === 13 || i === 18 || i === 23
        ? '-'
        : hexDigits[Math.floor(Math.random() * hexDigits.length)]
    })
    .join('')
}

export default uuid
