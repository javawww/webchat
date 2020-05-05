<template>
  <div class="app-bottom">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" v-if="bottomNav">
        <mu-bottom-nav-item value="#/" title="在线聊天" icon="chat" to="/"/>
        <mu-bottom-nav-item value="#/search" title="交友广场" icon="search" to="/search"/>
        <mu-bottom-nav-item value="#/home" title="个人中心" icon="person" to="/home"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {

  components: {},
  data () {
    return {
      bottomNav: '',
    };
  },

  computed: {},

  mounted() {
    const hash = location.hash;
    this.bottomNav = hash;
  },

  methods: {}
}

</script>
<style lang='stylus' scoped>
.app-bottom {
  position: fixed;
  bottom: 21px;
  z-index: 102;
  width: 100%;
}
</style>
