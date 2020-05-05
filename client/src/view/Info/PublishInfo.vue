<template>
  <div class="form-wrapper">
    <Header
      leftIcon="chevron_left"
      rightIcon="save"
      @rightClick="goback"
      content="赚金币"
      color=""
      @leftClick="goback"
      ></Header>
      <mu-container>
        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="150">
          <mu-form-item prop="textarea" label="最近有什么新鲜事？">
            <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
          </mu-form-item>
          <!-- <mu-form-item prop="goldCounts" label="">
            <mu-text-field help-text="是否付费内容" v-model="form.input"></mu-text-field>
          </mu-form-item> -->
          <mu-form-item prop="switch" label="仅自己可见">
            <mu-switch v-model="form.switch"></mu-switch>
          </mu-form-item>
        </mu-form>
      </mu-container>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {VueCropper} from 'vue-cropper';
  import { getItem } from '@utils/localStorage';
  import Alert from '@components/Alert';
  import Header from '@components/Header';
  import Confirm from '@components/Confirm';
  import loading from '@components/loading/loading';

  export default {
    name: 'PublishInfo',
    components: {
      VueCropper: VueCropper,
      Header: Header
    },
    data () {
      return {
        labelPosition: 'top',
        form: {
          switch: false,
          textarea: ''
        }
      }
    },
    mounted() {},

    methods: {
      goback() {
        this.$router.isBack = true;
        this.$router.goBack();
      },
    }
  };

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .form-wrapper {
    width: 100%;
    border: 1px dotted gray;
    overflow:scroll;
  }
</style>
