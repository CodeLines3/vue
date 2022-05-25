import { Ref, ref } from "vue";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// 下载
export default function useSaver(elRef: Ref<any>, time: string) {
  let base64 = ref(""),
    isLoaded = ref(true);
  const download = () => {
    new Promise((resolve) => {
      isLoaded.value = false;
      resolve(true)
    }).then(() => {
      html2canvas(elRef.value, {
        scale: 2,
      }).then((canvas: HTMLCanvasElement) => {
        const dataurl = canvas.toDataURL("image/jpeg", 1);
        base64.value = dataurl;
        let { width, height } = canvas;
        const A4Width = 592.28,
          A4Height = 841.89;
        const pdf = new jsPDF({
          unit: "pt",
          // format: [width, height],
          format: [A4Width, A4Height],
        });
        // pdf.addImage(dataurl, "JPEG", 0, 0, width, height);

        const pageHeight = (width / A4Width) * A4Height, // 一页pdf显示html页面生成的canvas高度;
          imgHeight = (A4Width / width) * height; // html页面生成的canvas在pdf中图片的宽高
        let position = 0;
        while (height > 0) {
          pdf.addImage(dataurl, "PNG", 0, position, A4Width, imgHeight);
          height -= pageHeight;
          position -= A4Height;
          pdf.html;
          // 避免添加空白页
          if (height > 0) pdf.addPage();
        }
        // 导出pdf文件命名
        pdf.save(`孙宏新_简历-${time}.pdf`);
        isLoaded.value = true;
      });
    });
  };
  return { base64, download, isLoaded };
}
