<template>
  <!-- <base-calender /> -->
  <only-calender @date-selected="handleDateSelect"></only-calender>
  <tab-view :selected-date="selectedDate" />
  <!-- <BaseList :items="listItems" @item-click="handleItemClick" /> -->
</template>

<script>
import OnlyCalender from "@/components/OnlyCalender.vue";
import TabView from "@/components/TabView.vue";
export default {
  components: {
    OnlyCalender,
    TabView,
  },
  data() {
    return {
      selectedDate: new Date(),
      listItems: [
        {
          image: "/images/qwer.webp",
          title: "QWER",
          desc: "설명 텍스트",
        },
        {
          image: "/path/to/image2.jpg",
          title: "두 번째 아이템",
          desc: "설명 텍스트",
        },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      console.log("clicked:", item);
    },
    handleDateSelect(date) {
      this.selectedDate = date;
      // 필요한 경우 여기서 추가 로직 처리
    },
  },
};
</script>
