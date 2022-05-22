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
            return '#cc6699';
          case 'L3':
            return '#0cc';
          case 'L4':
            return '#fb4f27';
          case 'R1':
            return '#F72C5B';
          case 'R3':
            return '#f90';
          case 'ro':
            return 'rgba(0, 240, 0, 0.5)';
          default: break;
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
        emit('dbclick', data);
        break;
    }
  });
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
