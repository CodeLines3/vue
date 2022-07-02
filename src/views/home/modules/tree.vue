<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GraphObject, Diagram, Node as goNode, Shape, Binding, TextBlock, Link, TreeModel, ToolManager, Point, TreeLayout, DiagramEvent } from "gojs";
import {DoubleTreeLayout} from "gojs/extensionsJSM/DoubleTreeLayout";
import { Ability } from "../cache";

const root: any = ref(null); // 挂载节点 
const emit = defineEmits(['dbclick']);
let myDiagram: Diagram;
function init() {
  const $ = GraphObject.make,
  layout: any = $(DoubleTreeLayout, { 
    directionFunction: (n: any) => n.data && n.data.dir !== "left",
    bottomRightOptions: {
      alignment: TreeLayout.AlignmentCenterChildren
    }
  });
  myDiagram = $(Diagram, root.value, {
    allowDelete: false,
    scrollMode: Diagram.InfiniteScroll,
    initialAutoScale: Diagram.Uniform,
    "toolManager.mouseWheelBehavior": ToolManager.WheelZoom,
    layout,
  });

  myDiagram.nodeTemplate = $(goNode, "Auto",
    { 
      isShadowed: true,
      shadowOffset: new Point(2, 2),
      movable: false,
      selectionAdorned: false,
    },
    $(Shape, "RoundedRectangle",
      {
        strokeWidth: 0,
      },
      new Binding('figure', 'figure'),
      new Binding("fill", "", (data) => {
        const { key } = data,
        head = key.substr(0, 2);
        switch (head) {
          case 'L1':
            return '#41b883';
          case 'L2':
            return '#76ae63';
          case 'L3':
            return '#cc6699';
          case 'L4':
            return '#0cc';
          case 'R1':
            const head2 = key.substr(0, 3);
            switch (head2) {
              case 'R11':
                return '#61dafb';
              case 'R12':
                return '#bd34fe';
              case 'R13':
                return '#F72C5B';
              default:
                return '#111';
            }
          case 'R4':
            return '#d6ba33';
          case 'R3':
            return '#f90';
          case 'ro':
            return 'rgba(0, 240, 0, 0.5)';
          default: 
            return '#111';
        }
      })
    ),
    $(
      TextBlock,
      { margin: 5, font: "bold 16px sans-serif", stroke: '#fff' },
      new Binding("text", "text")
    )
  );

  myDiagram.linkTemplate = $(Link,
    { 
      selectable: false,
      isSelected: false,
      routing: Link.Orthogonal,
      corner: 5,
    },
    $(Shape)
  );
  myDiagram.model = new TreeModel(Ability);

  myDiagram.addDiagramListener('ObjectDoubleClicked', (e: DiagramEvent) => {
    const { subject: { part } } = e,
    { type: { name }, data} = part;
    switch (name) {
      case 'Link':
        break;
      default:
        handleDbClick(data)
        break;
    }
  });
}

// 双击节点
function handleDbClick(data: any) {
  const { url, text } = data;
  if (text === '小程序') {
    emit('dbclick', data);
  } else {
    url.forEach((e: string) => {
      const winblank = window.open(e)!;
      winblank.opener = null;
    });
  }
}

onMounted(() => {
  init();
});
</script>

<template>
  <div id="tree" ref="root"></div>
</template>
<style lang="scss" scoped>
#tree {
  height: 420px;
}
</style>
