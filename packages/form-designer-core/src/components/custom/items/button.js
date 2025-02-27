/**
 * 单行&多行输入框
 */
export let button = {
  id: '',
  _id: '',
  compType: 'button',
  ele: 'el-button',
  //控件名称(左侧显示)
  compName: '按钮',
  //图标
  compIcon: 'button',
  //展示表单的模式
  viewType: 'component',

  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel: false,
  label: '按钮',
  labelWidth: 0,
  //大小，large / default /small
  size: 'default',
  //primary / success / warning / danger / info
  type: 'primary',
  span: 24,
  text: '按钮',
  //简单
  plain: false,
  //圆角
  round: false,
  //圆形
  circle: false,
  //加载中
  loading: false,
  //禁用
  disabled: false
}
