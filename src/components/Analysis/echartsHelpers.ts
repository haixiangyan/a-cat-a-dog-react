import {IImageAnalysis} from "../../env"

export const getOptions = (imageAnalysis: IImageAnalysis) => {
  const data = imageAnalysis.labels
    .map(label => ({
      value: Number(label.Confidence.toFixed(2)),
      name: label.Name
    }))

  return {
    title: {
      text: 'Image Analysis',
      subtext: `ID: ${imageAnalysis.image_id}`,
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: 'Confidence',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
