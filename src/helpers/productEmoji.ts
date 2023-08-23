export function productEmoji(name: string) {
  switch (name.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍨'
    default:
      return '🧑‍🍳'
  }
}
