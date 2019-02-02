<template>
  <div>
    <el-table show-summary :summary-method="getSummaries" :data="carList" style="width: 100%">
      <el-table-column prop="label" label="商品名称" width="180">
      </el-table-column>
      <el-table-column prop="buyCount" label="数量" width="180">
      </el-table-column>
      <el-table-column prop="price" label="单价" width="180">
        <template slot-scope="scope">
          {{scope.row.price}}元
        </template>
      </el-table-column>
      <el-table-column prop="zhe" label="折扣">
      </el-table-column>
      <el-table-column label="价格">
        <template slot-scope="scope">
          {{calculate(scope)}}元
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'CarBody',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('car', ['carList'])
  },
  methods: {
    getSummaries(obj) {
      console.log(obj);
      let { columns, data } = obj;
      let nums = [];
      console.log(columns, data);
      columns.forEach((item, index) => {
        if (index == 0) {
          nums[index] = '总价';
          return;
        }
        if (index == columns.length - 1) {
          let vs = data
            .map(it => {
              return {
                price: it.price,
                buyCount: it.buyCount,
                zhe: it.zhe
              };
            })
            .reduce((total, it) => {
              return total + it.price * it.zhe * it.buyCount;
            }, 0);
          nums[index] = vs;
          return;
        }
        nums[index] = '';
      });
      return nums;
    },
    calculate(scope) {
      console.log('scope', scope);
      return scope.row.buyCount * scope.row.price * scope.row.zhe;
    }
  }
};
</script>
<style lang="scss">
</style>