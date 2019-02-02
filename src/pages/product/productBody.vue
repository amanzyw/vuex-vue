<template>
  <div>
    <el-table :data="productsList" style="width: 100%">
      <el-table-column prop="label" label="商品" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.price}}/{{scope.row.unit}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="zhe" label="折扣">
      </el-table-column>
      <el-table-column prop="num" label="库存">
        <template slot-scope="scope">
          <span>{{scope.row.num==0?'暂无存货':scope.row.num}}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="buy(scope)" type="primary" :disabled="scope.row.num==0" size="small">购买</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'ProductBody',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState('products', {
      productsList: 'productsList',
      buyStatus: 'buyStatus'
    })
  },
  watch: {
    buyStatus(newVal, oldVal) {
      console.log('newVal', newVal);
      let that = this;
      if (newVal == undefined) {
      } else if (newVal == 'success') {
        that.$message({
          message: '购买成功！',
          type: 'success'
        });
      } else if (newVal == 'error') {
        that.$message({
          message: '购买失败！',
          type: 'error'
        });
      } else if (newVal == 'buying') {
        that.$message({
          message: '正在购买中，请稍后！',
          type: 'info'
        });
      } else {
        that.$message({
          message: '未知错误！',
          type: 'error'
        });
      }
    }
  },
  mounted() {
    this.$store.dispatch('products/getAllGoods');
  },
  methods: {
    buy(scope) {
      console.log(scope);
      if (scope.row.num > 0) {
        this.$store.dispatch('products/buyProduct', {
          ...scope.row,
          id: scope.row.id,
          buyCount: 1
        });
      }
    }
  }
};
</script>
<style lang="scss">
</style>