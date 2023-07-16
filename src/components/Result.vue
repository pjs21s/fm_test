<template>
  <div>
    결과 페이지
    <div>{{ questions }}</div>
    <v-btn @click="shareKakao()">공유하기</v-btn>
  </div>
</template>
  
<script>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ResultComponent',
  setup() {

    const store = useStore();
    const questions = computed(() => store.state.questions);

    onMounted(async () => {
      await store.dispatch('loadQuestions');
    });

    const shareKakao = () => {
      Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '딸기 치즈 케익',
          description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
            mobileWebUrl: 'http://localhost:5173',
            webUrl: 'http://localhost:5173',
          },
        },
        social: {
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845,
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'http://localhost:5173',
              webUrl: 'http://localhost:5173',
            },
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'http://localhost:5173',
              webUrl: 'http://localhost:5173',
            },
          },
        ],
      });
      
    }
    
    return { shareKakao, questions };
  }
};

</script>
  