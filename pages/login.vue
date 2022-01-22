<template>
  <div>
    <video id="bg-video" autoplay muted loop>
      <source src="~assets/video/bg.mp4" type="video/mp4">
    </video>
    
    <div id="gnb">
      <div class="logo-wrap">
        <img src="~assets/img/logo-login.png" class="logo">
      </div>
    </div>

    <div id="cnt">
      <div class="login-wrap">
        <div class="gnb">
          <img  @click="routerPush('/')" src="~assets/img/icon/i-close.png" class="icon-close">
          <div v-if="slideTarget>0" class="progress-wrap">
            <div class="progress" :style="{ width: ((slideTarget)*25)+'%' }"></div>
          </div>
        </div>
        <carousel class="slide-wrap" :per-page="1" :value="slideTarget" :navigateTo="naviTaget" :paginationEnabled="false" :mouse-drag="false">

          <slide class="slide-1">
            <p class="form-title">Log in</p>
            <input class="form" type="text" placeholder="Enter your email">
            <input class="form form-last" :type="login.passwordShow ? 'text' : 'password'" placeholder="Enter your password">
            <button @click="login.passwordShow = !login.passwordShow" class="btn-check">
              <span v-if="login.passwordShow">Hide</span>
              <span v-else>Show</span>
            </button>
            <p class="find-pw">
              Forgot your password?
              <span class="find-pw-link">Find password</span>
            </p>
            <button @click="routerPush('/ttv')" class="ai-btn">Log in</button>
            <p @click="check.saveLoginInfo = !check.saveLoginInfo" v-if="check.saveLoginInfo" class="info-save">
              <img src="~assets/img/icon/i-check-active.png" class="icon-check">
              Save login information
            </p>
            <p @click="check.saveLoginInfo = !check.saveLoginInfo" v-else class="info-save">
              <img src="~assets/img/icon/i-check.png" class="icon-check">
              Save login information
            </p>
            <div class="social-login">
              <div class="btn-login" style="">
                <img src="~assets/img/icon/social-google.png" class="icon">
                Log in with Google
              </div>
              <div class="btn-login" style="border-left: 1px solid #3c3c3c; text-align: right; padding-left: 5px;">
                <img src="~assets/img/icon/social-facebook.png" class="icon">
                Log in with Facebook
              </div>
            </div>
            <p class="comment">Sign up and make a video!</p>
            <button @click="slideTarget=1" class="ai-btn ai-btn-gray">Sign Up</button>
          </slide>

          <slide class="slide-2">
            <div class="slide-title">
              <img @click="slideTarget=0" src="~assets/img/icon/left-arrow.png" class="icon-back">
              <div class="title">Sign up</div>
              <div class="explain">Member category selection</div>
            </div>
            <div class="select-wrap">
              <div @click="slideTarget=2" class="select select-1">
                <p class="title">Individual</p>
                <p class="sub">Individual members who want to<br/> create their own videos</p>
              </div>
              <div @click="toggleAlert()" class="select select-2">
                <p class="title">Corporate member</p>
                <p class="sub">Corporate members who want to<br/> make videos together</p>
              </div>
            </div>
          </slide>

          <slide class="slide-3">
            <div class="slide-title">
              <img @click="slideTarget=1" src="~assets/img/icon/left-arrow.png" class="icon-back">
              <div class="title">Sign up</div>
              <div class="explain">Individual</div>
            </div>
            <p class="info info-1">Social membership</p>
            <button class="btn-social">
              <img src="~assets/img/icon/social-google.png" class="icon">
              Log in with Google
            </button>
            <button class="btn-social">
              <img src="~assets/img/icon/social-facebook-f.png" class="icon">
              Log in with Facebook
            </button>
            <p class="info info-2">Individual membership</p>
            <div class="form-email-check">
              <input v-model="select.email" class="form" type="text" placeholder="Enter your email(ID)">
              <button class="btn-check" :class="{'btn-check-active':select.email.length>0}">Check</button>
            </div>
            <p class="info info-3">*After signing up, you must verify<br/>your identity via email to use the service.</p>
            <button @click="slideTarget=3" :disabled="select.email.length<1" :class="{'ai-btn-disabled':select.email.length<1}" class="ai-btn">Next</button>
          </slide>

          <slide class="slide-4">
            <div class="slide-title">
              <img @click="slideTarget=2" src="~assets/img/icon/left-arrow.png" class="icon-back">
              <div class="title">Sign up</div>
              <div class="explain">Individual</div>
            </div>
            <input v-model="password.pw" class="form" :type="password.passwordShow ? 'text' : 'password'" placeholder="Enter password">
            <button @click="password.passwordShow = !password.passwordShow" class="btn-check">
              <span v-if="password.passwordShow">Hide</span>
              <span v-else>Show</span>
            </button>
            <p class="rules">* 8-16 characters (upper&lowercase), numbers, symbols</p>
            <input v-model="password.pwc" class="form" type="password" placeholder="Vertify password">
            <p class="rules">* Enter the same password</p>
            <div class="select-wrap">
              <div class="select-header">
                <p class="title">Purpose of video production</p>
                <p class="tag">*Multiple</p>
              </div>
              <div class="select-list">
                <div 
                  class="select" 
                  v-for="(item,index) in selectList" 
                  :key="index" 
                  :class="{'select-active':item.active}" 
                  @click="item.active = !item.active"
                >
                  {{ item.name }}
                </div>
                <!-- <div class="select">Interest</div>
                <div class="select">Vlog</div>
                <div class="select">Others</div> -->
              </div>
            </div>
            <div class="select-wrap">
              <div class="select-header">
                <p class="title">Terms and conditions</p>
                <p class="tag">View ></p>
              </div>
              <p @click="check.signUpAgree = !check.signUpAgree" v-if="check.signUpAgree" class="agree-check">
                <img src="~assets/img/icon/i-check-active.png" class="icon-check">
                I agree to all terms and conditions for TTV A.I.
              </p>
              <p @click="check.signUpAgree = !check.signUpAgree" v-else class="agree-check">
                <img src="~assets/img/icon/i-check.png" class="icon-check">
                I agree to all terms and conditions for TTV A.I.
              </p>
            </div>
            <button @click="routerPush('/ttv')" :disabled="password.pw.length<1" :class="{'ai-btn-disabled':password.pw.length<1}" class="ai-btn">Sign-up</button>
            <!-- <button @click="routerPush('/ttv')" :disabled="signUpCalc()" :class="{'ai-btn-disabled':signUpCalc()}" class="ai-btn">Sign-up</button> -->
          </slide>

        </carousel>
      </div>
    </div>

    <Footer/>
    <Alert comment="Comming soon" />
  </div>
</template>

<script>
import common from '~/mixins/common.js';
import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import VueCookies from 'vue-cookies'
import { Carousel, Slide } from 'vue-carousel';
// import {mapGetters} from "vuex";
Vue.use(VueCarousel);
Vue.use(VueCookies);

export default {
  mixins: [common],
  components: {
    Carousel,
    Slide
  },
  computed: {
    // naviTaget: () => {
    //   this.slideTarget = parseInt($cookies.get('loginStep'));
    //   return parseInt($cookies.get('loginStep'));
    // }
  },
  data: () => ({
    slideTarget: 0,
    naviTaget: 0,
    check: {
      saveLoginInfo: false,
      signUpAgree: false,
    },
    login: {
      passwordShow: false,
    },
    select: {
      // email: 'example@gmail.com',
      email: '',
      emailValid: false,
    },
    password: {
      pw: 'Example123!',
      pwc: 'Example123!',
      // pw: '',
      // pwc: '',
      passwordShow: false,
    },
    selectList: [
      {name: 'Promotion', active: false},
      {name: 'Interest', active: false},
      {name: 'Vlog', active: false},
      {name: 'Others', active: false},
    ]
  }),
  beforeMount() {
    this.slideTarget = parseInt($cookies.get('loginStep'));
    this.naviTaget =  parseInt($cookies.get('loginStep'));
  },
  methods: {
    toggleAlert() {
      this.$store.commit('Alert/openAlert');
    },
    signUpCalc() {
      return true;
    }
  }
}
</script>

<style scoped src="~/assets/css/index.css"></style>
<style scoped src="~/assets/css/login.css"></style>