<template>
  <div class="container">
    <only-calender @date-selected="handleDateSelect"></only-calender>
    <tab-view :selected-date="selectedDate" />
  </div>
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
    };
  },
  methods: {
    handleItemClick(item) {
      console.log("clicked:", item);
    },
    handleDateSelect(date) {
      this.selectedDate = date;
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
</style>
