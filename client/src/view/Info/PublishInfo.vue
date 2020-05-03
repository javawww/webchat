<template>
  <div>
      <Header
        leftIcon="chevron_left"
        rightIcon=""
        content="发信息赚金币"
        color=""
        @leftClick="goback"
        ></Header>
      <mu-container class="form-wrapper">
        <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
          <mu-form-item prop="input" label="小标题">
            <mu-text-field v-model="form.input"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="textarea" label="描述">
            <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.textarea"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="date" label="验证时间">
            <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
          </mu-form-item>
          <mu-form-item prop="place" label="联系地址">
            <mu-text-field v-model="form.input"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="mobile" label="联系方式">
            <mu-text-field v-model="form.input"></mu-text-field>
          </mu-form-item>
          <mu-form-item prop="switch" label="仅自己可见">
            <mu-switch v-model="form.switch"></mu-switch>
          </mu-form-item>

          <mu-button color="primary">提交</mu-button>
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
        options: [
          'Option 1', 'Option 2', 'Option 3', 'Option 4',
          'Option 5', 'Option 6', 'Option 7', 'Option 8',
          'Option 9', 'Option 10'
        ],
        labelPosition: 'top',
        form: {
          input: '',
          select: '',
          date: '',
          radio: '',
          checkbox: [],
          switch: false,
          slider: 30,
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
    max-width: 460px;
  }
</style>
