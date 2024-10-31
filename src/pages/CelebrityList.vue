<template>
  <!-- <base-calender /> -->
  <only-calender></only-calender>
  <!-- <BaseList :items="listItems" @item-click="handleItemClick" /> -->
</template>

<script>
import OnlyCalender from "@/components/OnlyCalender.vue";
export default {
  components: {
    OnlyCalender,
  },
  data() {
    return {
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
  },
};
</script>
