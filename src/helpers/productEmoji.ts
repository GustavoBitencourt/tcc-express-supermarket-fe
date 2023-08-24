export function productEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'limpeza':
      return '🧼'
    case 'carne':
      return '🥩'
    case 'hortifruti':
      return '🍎'
    case 'padaria':
      return '🍞'
    default:
      return '🧑‍🍳'
  }
}
