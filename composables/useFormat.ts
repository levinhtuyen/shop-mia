import dayjs from 'dayjs'
export enum FormatDate {
  DATE_TIME = 'YYYY-MM-DD HH:mm',
  DATE = 'YYYY-MM-DD',
  HOUR = 'HH:mm'
}

export const useFormat = () => {
  const formatDate = (
    date: Date | string | number,
    format: string,
    lang = 'en'
  ): string => {
    if (!date) {
      return ''
    }
    if (typeof date === 'number') {
      return dayjs(new Date(date * 1000))
        .locale(lang)
        .format(format || FormatDate.DATE)
    }
    return dayjs(date)
      .locale(lang)
      .format(format || FormatDate.DATE)
  }
  const formatMoney = (price: number) => {
    if (!price) {
      return '0'
    }
    return new Intl.NumberFormat('vi-VN').format(price)
  }
  const formatCompactNumber = (n: number) => {
    if (!n) return 0
    if (n < 1e3) return n
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K'
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M'
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B'
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T'
  }
  return {
    formatMoney,
    formatCompactNumber,
    formatDate
  }
}
