<template>
  <div v-show="props.compType === 'date'">
    <el-form-item label="ID">
      <el-tooltip
        class="item"
        effect="dark"
        content="请注意,ID的修改可能会导致该组件相关事件失效！"
        placement="left"
      >
        <el-input class="input" v-model="props.id" @change="handlerChangeId"></el-input>
      </el-tooltip>
    </el-form-item>
    <el-form-item label="标题">
      <el-input class="input" v-model="props.label"></el-input>
    </el-form-item>
    <el-form-item label="栅格间隔">
      <el-input-number v-model="props.gutter" :min="0"></el-input-number>
    </el-form-item>
    <el-form-item label="标签宽度">
      <el-input-number v-model="props.labelWidth" :min="1" :max="200"></el-input-number>
    </el-form-item>
    <el-form-item label="显示标签">
      <el-switch v-model="props.showLabel"></el-switch>
    </el-form-item>
    <el-form-item label="提示符">
      <el-input class="input" v-model="props.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="必填">
      <el-switch v-model="props.required"></el-switch>
    </el-form-item>
    <el-form-item label="时间类型">
      <el-select class="input" v-model="props.type" @change="handlerFormatChange">
        <el-option
          v-for="item in dateTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间格式">
      <el-input class="input" :value="props.format" @change="handlerChangeValueFormat" />
    </el-form-item>
    <el-form-item label="清空">
      <el-switch v-model="props.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="只读">
      <el-switch v-model="props.readonly"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="props.disabled"></el-switch>
    </el-form-item>
    <el-form-item
      label="分隔符"
      v-show="
        props.type === 'monthrange' || props.type === 'daterange' || props.type === 'datetimerange'
      "
    >
      <el-input v-model="props['range-separator']"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-date-picker
        class="input"
        v-model="props.modelValue"
        :format="props.format"
        :type="props.type"
        placeholder="选择日期"
        @change="handlerSelectDate"
      />
    </el-form-item>
  </div>
</template>
<script>
// https://day.js.org/docs/en/display/format#list-of-all-available-formats

import { changeId } from '../mixin'
const dateType = [
  {
    label: '日(date)',
    value: 'date'
  },
  {
    label: '周(week)',
    value: 'week'
  },
  {
    label: '月(month)',
    value: 'month'
  },
  {
    label: '年(year)',
    value: 'year'
  },
  {
    label: '日期时间(datetime)',
    value: 'datetime'
  },
  {
    label: '月份范围',
    value: 'monthrange'
  },
  {
    label: '日期范围',
    value: 'daterange'
  },
  {
    label: '日期时间范围',
    value: 'datetimerange'
  }
]
const dateTimeFormat = {
  date: 'YYYY-MM-DD',
  week: 'YYYY 第 ww 周',
  month: 'YYYY-MM',
  year: 'YYYY',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  daterange: 'YYYY-MM-DD',
  monthrange: 'YYYY-MM',
  datetimerange: 'YYYY-MM-DD HH:mm:ss'
}

export default {
  name: 'dateConfig',
  props: ['props', 'getFormId'],
  components: {},
  mixins: [changeId],
  data() {
    return {
      dateTypeOptions: dateType,
      date: ''
    }
  },
  methods: {
    handlerFormatChange(val) {
      if (val === 'monthrange' || val === 'daterange' || val === 'datetimerange') {
        this.props.modelValue = []
      } else {
        this.props.modelValue = ''
      }
      this.props.format = dateTimeFormat[val]
    },
    handlerChangeValueFormat(val) {
      this.props.format = val
    },
    handlerSelectDate(val) {}
  },
  mounted() {}
}
</script>
<style scoped>
.input {
  width: 75%;
}
</style>
