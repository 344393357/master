export default {
  //组件名称 驼峰命名
  name: 'ElRow',
  //自定义属性 (非必须),重要,用于col 寻找父级
  componentName: 'ElRow',
  //组件props
  props: {
    //自定义的标签元素 默认div
    tag: {
      type: String,
      default: 'div'
    },
    // 栅格数量
    gutter: {
      type: Number,
      default: 0
    },
    //布局模式可选flex
    type: {
      type: String
    },
    // flex下布局 justify属性
    justify: {
      type: String,
      default: 'start'
    },
    // flex下布局 align属性
    align: {
      type: String,
      default: 'top'
    }
  },
  computed: {
    //计算row的左右margin
    style() {
      const ret = {}
      if (this.gutter) {
        ret.marginLeft = `-${this.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    }
  },
  render(h) {
    //渲染函数
    return h(this.tag, {
      class: [
        'el-row',
        this.justify !== 'start' ? `is-justify-${this.justify}` : '',
        this.align !== 'top' ? `is-align-${this.align}` : '',
        { 'el-row--flex': this.type === 'flex' }
      ],
      style: this.style
    }, this.$slots.default)
  }
}
