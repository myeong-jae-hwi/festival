<template>
  <div class="calendar-container">
    <header class="calendar-header">
      <h4 class="calendar-header-data">{{ currentYear }}년 {{ currentMonth }}월</h4>
    </header>

    <div class="calendar-days">
      <div v-for="(day, index) in daysOfWeek" :key="index" :class="['day', { sunday: index === 0, saterday: index === 6 }]">
        {{ day }}
      </div>
    </div>

    <div class="calendar-dates">
      <div
        v-for="(date, index) in currentWeekDates"
        :key="index"
        :class="[
          'date',
          {
            'selected-date': isSameDate(date, selectedDate),
            'disabled-date': isDisabled(date),
            today: isToday(date),
            sunday: index === 0,
            saterday: index === 6,
          },
        ]"
        @click="!isDisabled(date) && changeSelctedDate(date)"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar",

  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth() + 1,
      daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      selectedDate: new Date(),
      disableDay: [27, 28, 29, 2],
      weekOffset: 0,
    };
  },
  computed: {
    currentWeekDates() {
      const today = new Date();
      today.setDate(today.getDate() + this.weekOffset * 7);
      const dayOfWeek = today.getDay();
      const currentWeek = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - dayOfWeek + i);
        currentWeek.push(date);
      }
      this.currentMonth = currentWeek[0].getMonth() + 1;
      this.currentYear = currentWeek[0].getFullYear();

      return currentWeek;
    },
  },

  methods: {
    isDisabled(date) {
      return this.disableDay.includes(date.getDate());
    },

    changeSelctedDate(date) {
      this.selectedDate = date;
      this.$emit("date-selected", date);
    },

    isSameDate(date1, date2) {
      if (!date1 || !date2) return false;
      return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
    },

    isToday(date) {
      const today = new Date();
      return this.isSameDate(date, today);
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
  /* max-width: 600px; */
  margin: 0 auto;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.calendar-nav-btn {
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

/* .calendar-nav-btn:hover {
  background-color: #f0f0f0;
} */

.calendar-header-data {
  margin: 0;
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
}

.calendar-days,
.calendar-dates {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.8rem;
  padding: 0.3rem;
  place-items: center;
}

.day {
  text-align: center;
  font-weight: bold;
  color: #666;
}

.date {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  color: #333;
  transition: all 0.2s;
}

/* .date:hover:not(.disabled-date) {
  background-color: #f0f0f0;
} */

.date.selected-date {
  background-color: #6f42c1;
  color: white;
  width: 2rem;
  height: 2rem;
}

.date.disabled-date {
  color: #ccc;
  cursor: not-allowed;
}

.date.today {
  border: 2px solid #6f42c1;
  padding: 0.3rem;
  width: 2rem;
  inline-size: 2rem;
  height: 2rem;
  block-size: 2rem;
}

.sunday {
  color: #e74c3c;
}

.saterday {
  color: #3458db;
}
</style>
