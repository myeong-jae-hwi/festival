<template>
  <div class="calendar-container">
    <header class="calendar-header">
      <h4 class="calendar-header-data">{{ currentYear }}년 {{ currentMonth }}월</h4>
    </header>
    <div class="calendar-days">
      <div class="day" v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</div>
    </div>
    <div class="calendar-dates">
      <div v-for="(date, index) in currentWeekDates" :key="index" :class="['date', { 'selected-date': selectedDate === isSameDate(selectedDate, date), 'disabled-date': isDisabled(date) }]" @click="!isDisabled(date) && changeTab(date)">
        {{ date.getDate() }}
      </div>
    </div>
  </div>
  <div class="tab-content">
    <p v-if="selectedDate">선택된 날짜: {{ selectedDate.toLocaleDateString() }}</p>
    <!-- 각 날짜에 따른 컨텐츠를 보여주는 UI -->
    <div v-if="selectedDate && selectedDate.getDate() === 25">
      <!-- 예시: 특정 날짜에 맞는 탭 컨텐츠 -->
      <p>25일의 컨텐츠</p>
    </div>
    <!-- 다른 날짜에 대한 탭 콘텐츠 추가 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      selectedDate: new Date(),
      disableDay: [27, 28, 29, 2],
    };
  },
  computed: {
    currentWeekDates() {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const currentWeek = [];

      // 이번 주의 일요일부터 토요일까지의 날짜를 계산
      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - dayOfWeek + i);
        currentWeek.push(date);
      }
      return currentWeek;
    },
  },
  methods: {
    isDisabled(date) {
      return this.disableDay.includes(date.getDate());
    },
    changeTab(date) {
      this.selectedDate = date;
    },
    isSameDate(date1, date2) {
      // 새로운 메서드 추가
      if (!date1 || !date2) return false;

      console.log("a :", date1, "b: ", date2);

      return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    },
  },
};
</script>

<style scoped>
.calendar-container {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.calendar-header {
  text-align: left;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  padding: 2.3rem;
  padding-top: 4rem;
}

.calendar-header-data {
  margin-top: 0;
}

.calendar-days,
.calendar-dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.8rem;
  place-items: center;
}

.day {
  text-align: center;
  font-weight: bold;
  color: #666;
}

.date {
  width: 1.5rem;
  height: 1.5rem;
  inline-size: 1.5rem;
  block-size: 1.5rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  color: #333;
}

.date.selected-date {
  background-color: #6f42c1;
  color: white;
}

.date.disabled-date {
  /* background-color: #e0e0e0; */
  color: #ccc;
  cursor: not-allowed;
}

.tab-content {
  margin-top: 1rem;
}
</style>
