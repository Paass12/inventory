/* eslint-disable */

const REG_MOBLIE = /^1(3|5|7|8|9)[0-9]{9}$/
const REG_EMAIL = /^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

const strategies = {
  isSame(value, compareValue, errorMsg) {
    return value !== compareValue
      ? errorMsg : void 0;
  },
  isTrue(value, errorMsg) {
    return !value
      ? errorMsg : void 0;
  },
  isNonEmpty(value, errorMsg) {
    return value === ''
      ? errorMsg : void 0;
  },
  minLength(value, length, errorMsg) {
    return value.length < length
      ? errorMsg : void 0;
  },
  maxLength(value, length, errorMsg) {
    return value.length > length
      ? errorMsg : void 0;
  },
  isMoblie(value, errorMsg) {
    return !REG_MOBLIE.test(value)
      ? errorMsg : void 0;
  },
  isEmail(value, errorMsg) {
    return !REG_EMAIL.test(value)
      ? errorMsg : void 0;
  },
  isMoblieOrIsEmail(value,errorMsg) {
    return !REG_MOBLIE.test(value) && !REG_EMAIL.test(value)
      ? errorMsg : void 0;
  }
};

/* Validator类 */
class Validator {
  constructor() {
    this.cache = []; // 保存校验规则
  }

  add(dom, rules) {
    for (const rule of rules) {
      const strategyAry = rule.strategy.split(':'); // 例如['minLength',6]
      const errorMsg = rule.errorMsg; // '用户名不能为空'
      this.cache.push(() => {
        const strategy = strategyAry.shift(); // 用户挑选的strategy
        strategyAry.unshift(dom); // 把input的value添加进参数列表
        strategyAry.push(errorMsg); // 把errorMsg添加进参数列表，[dom.value,6,errorMsg]
        return strategies[strategy](...strategyAry);
      });
    }
  }

  start() {
    for (const validatorFunc of this.cache) {
      const errorMsg = validatorFunc(); // 开始校验，并取得校验后的返回信息
      if (errorMsg) { // r如果有确切返回值，说明校验没有通过
        return errorMsg;
      }
    }
  }
}

export default Validator;
