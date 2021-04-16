import format from 'date-fns/format'
import ja from 'date-fns/locale/ja'

const formatDateJP = date => {
  let yobi = format(new Date(date), '（E曜日）', { locale: ja })
  console.log('yobi: ', yobi)
  let result = format(new Date(date), 'yyyy年MM月dd日', { locale: ja })
  let rep = result.replace('年0', '年 ')
  return { yyyymmdd: rep, yobi }
}

export default ({}, inject) => {
  inject('formatDateJP', formatDateJP)
}
