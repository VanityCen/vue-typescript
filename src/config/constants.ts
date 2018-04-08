import { BASE_URL } from './api'
export default {
  // 表格配置
  table: {
    showOverflowTooltip: true,
    border: true,                       // 边框
    stripe: true,                       // 斑马纹
    pageSizes: [10, 20, 30, 50, 100],   // 分页信息
    smallPageSizes: [8, 10, 15, 20, 30, 50], // 小屏分页
    import: {
      urlPrefix: '/common/imports/'
    }
  },

  // 按钮配置
  button: {
    size: 'medium'
  },

  // 下拉框设置
  select: {
    size: 'mini',
    placeholder: '请选择'
  },

  // 表单设置
  input: {
    size: 'mini',
    placeholder: '请输入',
    /**
     * 设置五种长度不一最大输入长度控制不同输入框的最大输入长度
     */
    xShortMaxlength: '10',
    shortMaxlength: '20',
    normalMaxlength: '30',
    longMaxlength: '200',
    xLongMaxlength: '500'
  },

  // 日期选择器
  datePiker: {
    size: 'mini',
    placeholder: '请选择'
  },

  format: {
    // 时间转换
    date: {
      short: 'yyyy-MM',
      default: 'yyyy-MM-dd',
      long: 'yyyy-MM-dd HH:mm:ss', // HH 24小时制
      exact: 'yyyy-MM-dd HH:mm:ss.SSS'
    },
    // 数字转换
    number: {},
    // 金额转换
    money: {}
  },

  BASE_URL
}
