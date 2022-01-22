<template>
  <div id="frame">
    <div id="snb">
      <div class="btn btn-home">
        <img src="~assets/img/ttv-logo.png" class="icon-logo">
      </div>
      <div v-for="(item,index) in items" :key="index" :class="{'btn-active':index==itemNow}" @click="itemNow = index" class="btn">
        <img :src="require(`~/assets/img/icon/`+item.icon+`.png`)" class="icon">
      </div>
    </div>

    <div id="cnt">
      <div class="cnt-wrap">
        <div class="header-wrap">
          <p class="title">Step {{ itemNow+1 }}. {{ items[itemNow].name }}</p>
          <div @click="dropdownDisplay = !dropdownDisplay" class="auth-info">
            <img src="~assets/img/icon/profile-color.png" class="icon-profile">
            <span class="email">example@gmail.com</span>
            <img src="~assets/img/icon/i-down-arrow.png" class="icon-arrow">
            <transition name="fade">
              <div v-if="dropdownDisplay" @click="routerPush('/')" class="dropdown-wrap">
                <div class="top-angle"></div> 
                Log out
                <img src="~assets/img/icon/i-log-out.png" class="icon-log-out">
              </div>
            </transition>
          </div>

          <button v-if="itemNow==2" class="ai-btn ai-btn-youtube">
            <img src="~assets/img/icon/i-upload-youtube.png" class="icon">
          </button>

          <button v-if="itemNow==0" @click="eventNext(itemNow)" class="ai-btn">Next</button>
          <button v-else-if="itemNow==1" @click="itemNow = 2" class="ai-btn">Next</button>

          <button v-else-if="itemNow==2" class="ai-btn ai-btn-download">
            <img src="~assets/img/icon/i-download-video.png" class="icon-download">
          </button>
        </div>

        <div v-if="itemNow==0" class="content-wrap content-wrap-1">
          <textarea v-model="items[0].data.desc" @keyup="charCounting(0)" placeholder="Please enter 500-5,000 characters" class="text-wrap"></textarea>
          <div class="ftr-wrap">
            <p class="desc">*Enter your text and set it up, then click the Next Step button</p>
            <p class="character-count">Current number of characters : {{ items[0].data.charCount }}</p>
          </div>
        </div>

        <div v-else-if="itemNow==1">
          <div class="content-wrap content-wrap-2 content-wrap-2-1">
            <div class="content-wrap-header">
              <p>A.I video timeline</p>
              <p class="rgt">*You can upload your video by clicking the upload icon.</p>
            </div>
            <div class="item-wrap">
              <div v-for="(item,index) in items[1].data.timeline" :key="index" @click="activeTimelineItem(index)" :class="{'item-active':item.active}" class="item">
                <div class="header">
                  <div class="tag">{{ item.tag }}</div>
                </div>
                <div class="content"></div>
                <div class="ftr">
                  <div class="video-volumn">{{ item.volumn }}</div>
                  <img src="~assets/img/icon/i-upload.png" class="icon">
                </div>
              </div>
            </div>
          </div>

          <div class="content-wrap content-wrap-2 content-wrap-2-2">
            <div class="content-wrap-header">
              <p>A.I video editing</p>
              <p class="mid">Sentence analysis</p>
            </div>
            <div class="desc-wrap">
              {{ items[0].data.desc }}
            </div>
            <div class="content-wrap-header keyword-header" style="height: 50px;">
              <p>Keyword selection</p>
              <div class="keyword-wrap">
                <div v-for="(item,index) in items[1].data.timeline" :key="index" @click="activeTimelineItem(index)" :class="{'keyword-active':item.active}" class="keyword">{{ item.tag }}</div>
              </div>
            </div>
            <div class="item-wrap">
              <div v-for="(item,index) in items[1].data.keywordVideos" :key="index" @click="activeKeywordVideo(index)" :class="{'item-active':item.active}" class="item">
                <div class="header"></div>
                <div class="content"></div>
                <div class="ftr"></div>
              </div>
            </div>
          </div>

          <div class="content-wrap content-wrap-2 content-wrap-2-3">
            <div class="content-wrap-header">
              <p>Select sound (mood)</p>
              <p class="rgt">*You can hear the sound by clicking the button.</p>
            </div>
            <div class="keyword-wrap">
              <div v-for="(item,index) in items[1].data.soundList" :key="index" @click="activeSoundList(index)" :class="{'keyword-active':item.active}" class="keyword">{{ item.tag }}</div>
            </div>
          </div>
        </div>

        <div v-else-if="itemNow==2">
          <div class="content-wrap content-wrap-3 content-wrap-3-1">
            <div class="content-wrap-header">
              <p>A.I video preview</p>
            </div>
            <div class="video-wrap">
              <div class="video"></div>
            </div>
          </div>
          <div class="content-wrap content-wrap-3 content-wrap-3-2">
            <div class="content-wrap-header">
              <p>Video information</p>
            </div>
            <div class="info-wrap">
              <div class="info">
                <p class="title">Video length</p>
                <p class="volumn">00:09</p>
              </div>
              <div class="info">
                <p class="title">Sound(mood)</p>
                <p class="volumn">Exciting</p>
              </div>
            </div>
          </div>
          <div class="content-wrap content-wrap-3 content-wrap-3-3">
            <div class="content-wrap-header">
              <p>Select video resolution</p>
            </div>
            <div class="select-wrap">
              <div v-for="(item,index) in items[2].data.videoType" :key="index" @click="activeVideoType(index)" :class="{'select-active':item.active}" class="select">
                <p class="quality">{{ item.quality }}</p>
                <p class="pixel">{{ item.pixel }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <AlertOrange comment="Please enter more than 500 characters of text" />
  </div>
</template>

<script>
import common from '~/mixins/common.js';
export default {
  mixins: [common],
  data: () => ({
    dropdownDisplay: false,
    items: [
      {
        icon: 'i-text',
        active: false,
        name: 'Enter text',
        data: {
          desc: "In today's video, we will shoot a video about the desktop setting of 1 million YouTubers.",
          charCount: 0
        }
      },
      {
        icon: 'i-wand',
        active: false,
        name: 'Video editing',
        data: {
          timeline: [
            {
              active: true,
              tag: 'today',
              video: '',
              volumn: '00:05',
            },
            {
              active: false,
              tag: 'youtuber',
              video: '',
              volumn: '00:15',
            },
            {
              active: false,
              tag: 'desktop',
              video: '',
              volumn: '00:07',
            },
          ],
          keywordVideos: [
            {
              active: false,
              tag: '',
            },
            {
              active: false,
              tag: '',
            },
            {
              active: false,
              tag: '',
            },
            {
              active: false,
              tag: '',
            },
          ],
          soundList: [
            {
              active: false,
              tag: 'Exciting',
            },
            {
              active: false,
              tag: 'Calm',
            },
            {
              active: false,
              tag: 'Bright',
            },
            {
              active: false,
              tag: 'Dark',
            },
          ]
        }
      },
      {
        icon: 'i-download',
        active: false,
        name: 'Download the video',
        data: {
          videoType: [
            {
              active: true,
              quality: 'SD',
              pixel: '720p'
            },
            {
              active: false,
              quality: 'HD',
              pixel: '1080p'
            },
          ]
        }
      }
    ],
    itemNow: 0,
  }),
  mounted() {
    this.charCounting(0)
  },
  methods: {
    eventNext(index) {
      if(index==0) {
        if(this.items[index].data.charCount>500) {
          this.itemNow = 1;
        } else { 
          this.$store.commit('Alert/openAlert');
        }
      } 
    },
    charCounting(i) {
      this.items[i].data.charCount = parseInt(this.items[i].data.desc.length);
    },
    activeTimelineItem(index) {
      this.items[1].data.timeline.forEach((ele,i) => {
        ele.active = false;
      });
      this.items[1].data.timeline[index].active = true;
    },
    activeKeywordVideo(index) {
      this.items[1].data.keywordVideos.forEach((ele,i) => {
        ele.active = false;
      });
      this.items[1].data.keywordVideos[index].active = true;
    },
    activeSoundList(index) {
      this.items[1].data.soundList.forEach((ele,i) => {
        ele.active = false;
      });
      this.items[1].data.soundList[index].active = true;
    },
    activeVideoType(index) {
      this.items[2].data.videoType.forEach((ele,i) => {
        ele.active = false;
      });
      this.items[2].data.videoType[index].active = true;
    },
  }
}
</script>

<style scoped src="~/assets/css/ttv.css"></style>