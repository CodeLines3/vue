<script setup lang="ts">
import { ref, onUnmounted, computed } from "vue";
import { Edu, Jobs, Projects, Info, JobLabels, ProLabels, Feature } from "./cache";
import TreeAbility from "./modules/tree.vue";
import userFeatures from "./composables/useFeatures";
import { interval, startWith, Subscription } from "rxjs";
import Dayjs from "dayjs";
import MiniPro from "@/assets/me.jpg";
import useSaver from "./composables/useSaver";

const { featureOption } = userFeatures(Feature);
const offset = computed(() => window.innerHeight / 2);
const homeEl: any = ref(null); // 截图节点
const dialogVisible = ref(false);
/** 下载时间 */
let current = ref("");
const subscription: Subscription = interval(1000)
  .pipe(startWith(1))
  .subscribe(() => {
    const date = Dayjs().format("YYYY-MM-DD HH:mm:ss");
    current.value = date;
  });
/** 钩子函数 */
onUnmounted(() => {
  subscription.unsubscribe();
});

// 下载
function handleSave() {
  useSaver(homeEl.value, current.value);
}

// 打开链接
function handleDbClick(data: any) {
  const { url, text } = data;
  if (text === '小程序') {
    dialogVisible.value = !dialogVisible.value;
  } else {
    window.open(url, '_blank', 'noopener=yes,noreferrer=yes');
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="home" ref="homeEl">
      <el-affix :offset="offset" target=".home">
        <el-button type="primary" @click="handleSave">下载</el-button>
      </el-affix>
      <p class="current">{{ current }}</p>
      <ul>
        <li class="info grid">
          <img :src="MiniPro" alt="小程序" />
          <el-row class="flex-item">
            <el-col :span="10" :xs="{ span: 24 }" v-for="(item, index) of Info" :key="index" :title="item.label">
              <label class="label">{{ item.label }}：</label>
              <span>{{ item.value }}</span>
            </el-col>
          </el-row>
        </li>
        <li class="edu">
          <p class="title">教育经历</p>
          <el-row class="level">
            <el-col :span="6" :xs="{ span: 24 }" v-for="(item, index) of Edu" :key="index" :title="item.label">
              <el-row>
                <el-col :span="0" :xs="{ span: 6 }" class="label">{{ item.label }}：</el-col>
                <el-col :span="24" :xs="{ span: 16 }">
                  <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">{{ item.value }}</a>
                  <span v-else>{{ item.value }}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </li>
        <li class="jobs">
          <p class="title">工作经历</p>
          <el-row v-for="item of Jobs" :key="item.id" class="level">
            <el-col v-for="t of JobLabels" :key="t.key" :class="t.key" :span="t.span || 24" :xs="t.xs || { span: 24 }">
              <el-row>
                <el-col :span="3" :xs="{ span: 4 }" v-if="t.label" class="label">
                  {{ t.label }}：
                </el-col>
                <el-col :span="21" :xs="{ span: 24 }" :class="{'flex-col':t.key==='name', content: !t.span }">
                  <span>{{ item[t.key] }}</span>
                  <span class="sub" v-if="t.key==='name' && t.sub">{{ item.sub }}</span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </li>
        <li class="projects">
          <p class="title">项目经历</p>
          <el-row v-for="item of Projects" :key="item.id" class="level">
            <el-col v-for="t of ProLabels" :key="t.key" :class="t.key" :span="t.span" :xs="t.xs">
              <el-row>
                <el-col :span="3" :xs="{span: 3}" v-if="t.label" class="label">
                  {{ t.label }}：
                </el-col>
                <el-col :span="21" :xs="{ span: 24 }" :class="{ content: !t.span }">
                  <a :href="t.href" v-if="t.href">{{ item[t.key] }}</a>
                  <span v-else>{{ item[t.key] }}</span>
                  <ul v-if="t.lis" class="content">
                    <li v-for="(c, ids) of item.lis" :key="ids">{{ c }}</li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </li>
        <li class="ability" id="ability">
          <p class="title">技能展示</p>
          <a href="https://codelines3.github.io/vue/" target="_blank" rel="noopener noreferrer"
            class="flex-item text-m">https://codelines3.github.io/vue</a>
          <TreeAbility @dbclick="handleDbClick" />
        </li>
        <li class=" flex-col">
          <p class="title">特点简介</p>
          <v-chart class="feature" autoresize :option="featureOption" />
        </li>
      </ul>
    </div>
    <el-dialog v-model="dialogVisible" width="36%">
      <img :src="MiniPro" alt="小程序" class="modal-img" />
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
  font-size: 16px;
}

.el-affix {
  margin-left: calc(100% + 2cm);
}

.home {
  position: relative;
  min-height: 297mm;
  width: 210mm;
  padding: 1cm 1.5cm;
  box-shadow: 0 0 4px #111;
  margin: 0 auto;
}

.current {
  position: absolute;
  left: 1cm;
  top: 0;
  transform: translateY(-50%);
  line-height: 32px;
  height: 16px;
  color: #099;
}

.title {
  position: relative;
  font-weight: 600;
  font-size: 20px;
  overflow: hidden;
  line-height: 32px;
  height: 32px;
  border-bottom: 1px solid $color;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    background: linear-gradient(-90deg, $color, transparent);
    background-position: 180% 0;
    z-index: -1;
    width: 8em;
    transform: skew(14deg);
  }
}

.grid {
  display: grid;
  grid-template-columns: auto 64px;
  grid-template-rows: 64px;
  grid-template-areas: "row imgme";

  img {
    grid-area: imgme;
    width: 64px;
    height: 64px;
    transform: scale(1.5) translateZ(0);
    transform-origin: center bottom;
  }

  .el-row {
    grid-area: row;
  }
}

ul {
  width: 100%;
  display: inline-block;
}

.label {
  min-width: 5em;
  font-weight: 600;
  line-height: 1.5;
  text-align: left;
}

.el-col {
  .level>& {
    padding-bottom: 12px;
  }

  &.time,
  &.name,
  &.job {
    font-weight: 600;

    .label {
      display: none;
    }
  }


}

.sub {
  font-size: 14px;
  color: #666;
}

.content {
  text-indent: 2em;
  line-height: 24px;

  ul {
    list-style: inside;
  }
}

.content ul,
.reason .content {
  text-indent: 0;
}

.feature {
  height: 260px;
}

.modal-img {
  margin: 0 auto;
  display: block;
  height: 200px;
  width: 200px;
}

@media screen and (max-width: 768px) {
  .home {
    width: 100% !important;
    padding: 0.5cm;
  }

  .grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    .el-row {
      width: 100%;
    }
    img {
      transform: none;
      width: 32%;
      height: auto;
    }
  }

  .current {
    display: none;
  }

  .el-col {

    &.time,
    &.name,
    &.job {
      .label {
        display: block;
      }

      .el-row {
        flex-wrap: nowrap;
      }

    }
  }

  .down, .el-affix {
    display: none;
  }
}
</style>
