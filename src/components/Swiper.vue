<style scoped>
.content {
  /*定高 垂直居中*/
  background-color: wheat;
  height: 50px;
  line-height: 50px;
  width: 400px;
}

.content div {
  /*水平居中 以及过渡效果不覆盖*/
  width: 400px;
  position: absolute;
  text-align: center;
}

.hgn-enter-active {
  /*进入结束帧*/
  /*transform: translateY(0);*/
  transition: all 1s ease;
  /*结束帧位置 设置 变化过程*/
}

.hgn-leave-active {
  /*离开结束帧*/
  opacity: 0;
  transform: translateY(-15px);
  /*上方位置 完全透明 */
  transition: all 1s ease;
  /*结束帧位置 设置 变化过程*/
}

.hgn-enter {
  /*进入开始帧*/
  opacity: 0;
  transform: translateY(15px)
  /*下方位置 完全透明 */
}

.hgn-leave {
  /*离开开始帧*/
  /*transform: translateY(0)*/
  /*无形变 可以不写*/
}
</style>

<template>
  <div class="index">
    <div class="content">
      <transition-group name='hgn'>
        <div v-for='(data,index) in text_list' :key='index' v-show='index===n'>
          <!--v-show或v-if均可 主要是为了触发transition  控制n的变化 改变现实的内容-->
          {{data}}
        </div>
      </transition-group>
    </div>

  </div>
</template>

<script>
export default {
  props: ['list'],
  data () {
    return {
      n: 0,
      text_list: ['123', '456', '789'],
      length_show: 0
    }
  },
  methods: {
    list_test () {
      setInterval(() => {
        if (this.n === this.text_list.length - 1) {
          this.n = 0
        } else {
          this.n++
        }
      }, 3000)
    }
  },
  watch: {
    list (val) {
      this.text_list = val || this.text_list
    }
  },
  created: function () {
    this.list_test()
  }
}
</script>