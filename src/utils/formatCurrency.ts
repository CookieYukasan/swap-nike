export default function formatCurrency(balance: number): string {
  return balance.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
