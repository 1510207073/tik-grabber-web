<template>
  <div class="min-h-screen flex flex-col justify-between bg-black text-white">
    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="text-5xl font-bold overflow-hidden">
        <div class="scrolling-gradient bg-clip-text text-transparent">
          TikGrabber
        </div>
      </div>
      <div class="mt-4 text-center relative">
        <div class="typing-container pt-8 pb-4"> <!-- 添加内边距确保动画不被裁切 -->
          <span
            v-for="(word, wordIndex) in displayWords"
            :key="wordIndex"
            :class="['typed-word']"
            :style="getWordAnimationStyle(wordIndex)"
          >
            {{ word }}
            <span v-if="wordIndex < displayWords.length - 1">&nbsp;</span>
          </span>
          <span class="cursor" v-if="isTyping"></span>
        </div>
      </div>
      <div class="mt-8 flex space-x-4">
        <a
          href="https://apps.apple.com/us/app/tikgrabber/id123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppStore class="h-12" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.tikgrabber"
          target="_blank"
          rel="noopener noreferrer"
        >
        <GooglePlay class="h-12" />
        </a>
      </div>
    </div>
    <div class="mt-4 text-gray-400 text-sm text-center">
      Copyright © 2024 BitRhythm.
    </div>
  </div>
</template>

<script>

import AppStore from '@/assets/icons/appstore.svg'
import GooglePlay from '@/assets/icons/googleplay.svg'

export default {
  name: "App",
  components: {
    AppStore, // 注册 AppStore 组件
    GooglePlay // 注册 GooglePlay 组件
  },
  data() {
    return {
      fullText: "A free download tool for getting TikTok videos.",
      displayText: "",
      displayWords: [],
      animationProgress: 0,
      isTyping: false,
      isAnimating: false,
      currentIndex: 0
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      this.isTyping = true;
      this.displayText = "";
      this.displayWords = [];
      this.currentIndex = 0;
      this.animationProgress = 0;
      this.typeNextChar();
    },
    typeNextChar() {
      if (this.currentIndex < this.fullText.length) {
        this.displayText += this.fullText[this.currentIndex];
        this.displayWords = this.displayText.split(' ');
        this.currentIndex++;
        setTimeout(() => this.typeNextChar(), 100);
      } else {
        this.isTyping = false;
        setTimeout(() => this.startRopeAnimation(), 500);
      }
    },
    startRopeAnimation() {
      this.isAnimating = true;
      let startTime = null;
      const animationDuration = 2000; // 增加动画持续时间，让每个单词都有足够时间完成动画

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / animationDuration;

        if (progress <= 1) {
          this.animationProgress = progress;
          requestAnimationFrame(animate);
        } else {
          this.isAnimating = false;
          setTimeout(() => {
            this.startTyping();
          }, 1000);
        }
      };

      requestAnimationFrame(animate);
    },
    getWordAnimationStyle(wordIndex) {
      if (!this.isAnimating) return {};

      const words = this.fullText.split(' ');
      const totalWords = words.length;

      // 调整动画时间分配，确保所有单词都有动画
      const durationPerWord = 1 / (totalWords + 1); // 为每个单词分配相等的时间份额

      // 计算每个单词的动画时间窗口
      const wordStartTime = wordIndex * durationPerWord;
      const wordEndTime = wordStartTime + durationPerWord * 2; // 增加单个单词的动画时间

      // 计算当前单词的动画进度
      let wordProgress = 0;

      if (this.animationProgress >= wordStartTime && this.animationProgress <= wordEndTime) {
        // 在时间窗口内，计算单词的具体动画进度
        wordProgress = (this.animationProgress - wordStartTime) / durationPerWord;
        // 将进度标准化到0-1范围
        wordProgress = Math.min(1, wordProgress);
        // 使用缓动函数创建更自然的动画
        wordProgress = this.easeOutBack(Math.min(1, wordProgress));
      }

      // 最大跳跃高度（像素）
      const maxJumpHeight = 25;

      // 计算Y轴偏移
      const yOffset = -wordProgress * maxJumpHeight;

      return {
        transform: `translateY(${yOffset}px)`,
        transition: 'transform 0.1s ease-out'
      };
    },
    // 缓动函数：添加一点回弹效果
    easeOutBack(t) {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    }
  }
};
</script>

<style scoped>
.scrolling-gradient {
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ffff00,
    #00ff00,
    #0000ff,
    #ff00ff,
    #ff0000
  );
  background-size: 600% 100%;
  animation: gradientAnimation 10s linear infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.typing-container {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.typed-word {
  font-size: 35px;
  display: inline-block;
  will-change: transform;
  position: relative;
  z-index: 2;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: white;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
