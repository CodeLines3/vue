import ECharts from "vue-echarts";
import { App } from "vue";
import { CanvasRenderer } from "echarts/renderers"; // 渲染器
import { use } from "echarts/core";
import {
  LegendComponent,
  TooltipComponent,
  GridComponent,
  TitleComponent,
} from "echarts/components";
use([CanvasRenderer, GridComponent, TooltipComponent, LegendComponent, TitleComponent]);

export function setupEcharts(app: App) {
  app.component("v-chart", ECharts);
}
