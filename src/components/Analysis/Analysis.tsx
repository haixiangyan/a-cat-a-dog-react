import * as React from 'react'
// ECharts
import echarts from 'echarts'
// Types
import {IAnalysisProps, IAnalysisState} from "./index"

class Analysis extends React.Component<IAnalysisProps, IAnalysisState> {
  constructor(props: IAnalysisProps) {
    super(props)
  }

  private formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()-2000}`
  }

  private drawPie = () => {
    const pieEl: HTMLDivElement = document.querySelector('image-analysis-pie')
    if (!pieEl) {
      return
    }
    const myChart = echarts.init(pieEl);

    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data:['销量']
      },
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }

  public render() {
    const {imageAnalysis} = this.props
    return (
      <div>
        {/*{*/}
          {/*imageAnalysis.labels && imageAnalysis.labels.map(label =>*/}
            {/*<p>Name: {label.Name}, Confidence: {label.Confidence}</p>*/}
          {/*)*/}
        {/*}*/}
        <div id="image-analysis-pie"/>
        <p><strong>Vendor: </strong>{imageAnalysis.vendor}</p>
        <p><strong>Created At</strong>{this.formatDate(imageAnalysis.created_at)}</p>
      </div>
    )
  }
}

export default Analysis
