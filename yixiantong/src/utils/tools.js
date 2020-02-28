export default {
  formatJSON(array, key) {
    return array.map(item => {
      if(item[key]) {
        item[key] = item[key].split(',')
      }
      return item
    })
  },
  setTitle(array, field) {
    return array.filter(item => {
      return item.field === field
    })[0].iconText
  },
  jsonToArr(str) {
    return JSON.parse(str)
  },
  strToArr(str, split) {
    return str.split(split)
  },
  replaceToSpace(str) {
    return str.replace(/,/g, ' ')
  },
	trimSpace(str) {
		return str.replace(/\s+/g, '')
	},
  throttle(fn, delay) {
    let t = null,
      begin = new Date().getTime()

    return function () {
      let _self = this,
        args = arguments,
        cur = new Date().getTime();

      clearTimeout(t)

      if(cur - begin >= delay) {
        fn.apply(_self, args)
        begin = cur
      }else {
        t = setTimeout(() => {
          fn.apply(_self, args)
        }, delay)
      }
    }
  }
}
