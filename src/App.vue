<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition mode="out-in">
        <keep-alive>
          <suspense>
            <component :is="Component" :key="route.path" />
            <template #fallback>
              <el-icon class="is-loading">
                <Loading />
              </el-icon>
            </template>
          </suspense>
        </keep-alive>
      </transition>
    </template>
  </router-view>
</template>

<style lang="scss">
#app {
  position: relative;
  height: 100%;
  width: 100%;
}
.is-loading {
  position: fixed;
  font-size: 60px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
