
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { App } from 'vue';
// 使用 Element icon
export function setupElementIcon(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}