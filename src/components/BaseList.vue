<!-- BaseList.vue -->
<template>
  <ul class="base-list">
    <li v-for="(item, index) in items" :key="index" class="list-item" @click="$emit('item-click', item)">
      <div class="item-content">
        <img v-if="item.image" :src="item.image" :alt="item.title" class="item-image" />
        <div class="item-text">
          <div class="item-title">{{ item.title }}</div>
          <div v-if="item.desc" class="item-desc">{{ item.desc }}</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BaseList",

  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.base-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item {
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  background-color: #f0f0f0;
  margin: 0.625rem;
  border-radius: 0.35rem;
}

.list-item:last-child {
  border-bottom: none;
}

.item-content {
  display: flex;
  /* align-items: center; */
  gap: 12px;
}

.item-image {
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border-radius: 4px;
  background-color: #fff;
}

.item-text {
  text-align: left;
}

.item-title {
  margin-block: 0.8rem;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  font-weight: bold;
}

.item-desc {
  font-size: 12px;
  color: #666;
  margin-top: 4px;
}
</style>
