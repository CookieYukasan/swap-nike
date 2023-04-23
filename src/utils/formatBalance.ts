export default function formatBalance(balance: number): string {
  return balance.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
