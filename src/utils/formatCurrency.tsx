export function fromatCurrency(value: any) {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
   })
}