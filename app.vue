<template>
  <div class="min-h-screen flex flex-col justify-between bg-black text-white">
    <div class="flex flex-col items-center justify-center flex-grow">
      <div class="text-5xl font-bold overflow-hidden">
        <div class="scrolling-gradient bg-clip-text text-transparent">
          TikGrabber
        </div>
      </div>
      <div class="mt-4 text-center relative">
        <div class="typing-container pt-8 pb-4">
          <span
            v-for="(word, wordIndex) in displayWords"
            :key="wordIndex"
            :class="['typed-word']"
            :style="getWordAnimationStyle(wordIndex)"
          >
            {{ word }}
            <span v-if="wordIndex < displayWords.length - 1"> </span>
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

<script setup>
import { ref, onMounted } from 'vue';
import AppStore from '@/assets/icons/appstore.svg';
import GooglePlay from '@/assets/icons/googleplay.svg';

const fullText = ref("A free download tool for getting TikTok videos.");
const displayText = ref("");
const displayWords = ref([]);
const animationProgress = ref(0);
const isTyping = ref(false);
const isAnimating = ref(false);
const currentIndex = ref(0);

onMounted(() => {
  startTyping();
});

const startTyping = () => {
  isTyping.value = true;
  displayText.value = "";
  displayWords.value = [];
  currentIndex.value = 0;
  animationProgress.value = 0;
  typeNextChar();
};

const typeNextChar = () => {
  if (currentIndex.value < fullText.value.length) {
    displayText.value += fullText.value[currentIndex.value];
    displayWords.value = displayText.value.split(' ');
    currentIndex.value++;
    setTimeout(typeNextChar, 100);
  } else {
    isTyping.value = false;
    setTimeout(startRopeAnimation, 500);
  }
};

const startRopeAnimation = () => {
  isAnimating.value = true;
  let startTime = null;
  const animationDuration = 2000;

  const animate = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = (timestamp - startTime) / animationDuration;

    if (progress <= 1) {
      animationProgress.value = progress;
      requestAnimationFrame(animate);
    } else {
      isAnimating.value = false;
      setTimeout(() => {
        startTyping();
      }, 1000);
    }
  };

  requestAnimationFrame(animate);
};

const getWordAnimationStyle = (wordIndex) => {
  if (!isAnimating.value) return {};

  const words = fullText.value.split(' ');
  const totalWords = words.length;
  const durationPerWord = 1 / (totalWords + 1);
  const wordStartTime = wordIndex * durationPerWord;
  const wordEndTime = wordStartTime + durationPerWord * 2;
  let wordProgress = 0;

  if (animationProgress.value >= wordStartTime && animationProgress.value <= wordEndTime) {
    wordProgress = (animationProgress.value - wordStartTime) / durationPerWord;
    wordProgress = Math.min(1, wordProgress);
    wordProgress = easeOutBack(Math.min(1, wordProgress));
  }

  const maxJumpHeight = 25;
  const yOffset = -wordProgress * maxJumpHeight;

  return {
    transform: `translateY(${yOffset}px)`,
    transition: 'transform 0.1s ease-out'
  };
};

const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
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
