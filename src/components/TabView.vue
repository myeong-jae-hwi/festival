<template>
  <div class="tabs">
    <div class="tab-headers">
      <button v-for="tab in tabs" :key="tab.id" @click="selectTab(tab.id)">
        {{ tab.name }}
      </button>
    </div>

    <!-- 전달받은 날짜를 사용해 컨텐츠 표시 -->
    <div class="tab-content">
      현재 선택된 날짜: {{ formatDate(selectedDate) }}
      <component :is="currentTabComponent" :selected-date="selectedDate" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 부모로부터 props로 날짜 받음
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("ko-KR");
    },
  },
};
</script>
