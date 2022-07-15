export const trimPublicAddress = (string, numberOfCharacter) => string && (
  `${string.slice(0, numberOfCharacter)}...${string.slice(string.length - numberOfCharacter, string.length)}`
)

export const abridgeNumber = (number = 0) => {
  if (number > 999999999) return `${(number / 1000000000).toFixed(1)}b`
  if (number > 999999) return `${(number / 1000000).toFixed(1)}m`
  if (number > 999) return `${(number / 1000).toFixed(1)}k`
  return number.toString()
}

export const ethFormat = (number) => {
  if (number === '0' || isNaN(number)) return 0
  return Math.round(Number(number) / Math.pow(10, 18))
}