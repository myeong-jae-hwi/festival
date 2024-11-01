<template>
  <div class="tabs">
    <div class="tab-content">
      <BaseList :items="currentListItems" @item-click="handleItemClick" />
    </div>
  </div>
</template>

<script>
import BaseList from "./BaseList.vue";

export default {
  components: {
    BaseList,
  },
  props: {
    selectedDate: {
      type: Date,
      required: true,
    },
  },
  data() {
    return {
      // 날짜별 아이템 데이터를 객체로 저장
      itemsByDate: {
        // 예: '2024-01-01' 형식의 키
        "2024-11-01": [
          {
            image: "/images/qwer.webp",
            title: "QWER",
            desc: "1일 설명 텍스트",
          },
          {
            image: "/images/second1.webp",
            title: "1일 두 번째 아이템",
            desc: "1일 설명 텍스트",
          },
        ],
        "2024-11-02": [
          {
            image: "/images/qwer2.webp",
            title: "2일 QWER",
            desc: "2일 설명 텍스트",
          },
          {
            image: "/images/second2.webp",
            title: "2일 두 번째 아이템",
            desc: "2일 설명 텍스트",
          },
        ],
      },
    };
  },
  computed: {
    // 선택된 날짜에 따라 보여줄 리스트 아이템 반환
    currentListItems() {
      const dateKey = this.formatDateKey(this.selectedDate);
      // 해당 날짜의 데이터가 있으면 반환, 없으면 기본 데이터 반환
      return (
        this.itemsByDate[dateKey] || [
          {
            image: "/images/default.webp",
            title: "기본 아이템",
            desc: "기본 설명 텍스트",
          },
        ]
      );
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString("ko-KR");
    },
    // 날짜를 키 형식으로 변환하는 메서드
    formatDateKey(date) {
      return date.toISOString().split("T")[0];
    },
    handleItemClick(item) {
      // 아이템 클릭 처리
      this.$emit("item-selected", item);
    },
  },
};
</script>
