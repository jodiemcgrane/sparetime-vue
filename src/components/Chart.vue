<!--
@Date:   2021-03-08T16:13:54+00:00
@Last modified time: 2021-03-08T17:04:20+00:00
-->


<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Array,
      default: null
    },

  },
  mounted() {
    this.renderChart(this.chartdata)
  }
}
</script>

<style lang="css" scoped>
</style>
