import * as React from 'react'
// ECharts
import echarts from 'echarts'
// Types
import {IAnalysisProps, IAnalysisState} from "./index"
// Helpers
import {getOptions} from "./echartsHelpers"

class Analysis extends React.Component<IAnalysisProps, IAnalysisState> {
  constructor(props: IAnalysisProps) {
    super(props)
  }

  private formatDate = (dateStr: string): string => {
    const date = new Date(dateStr)
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear() - 2000}`
  }

  public componentDidMount(): void {
    this.drawPie()
  }

  private drawPie = () => {
    const pieEl: HTMLCanvasElement | null = document.querySelector('#image-analysis-pie')
    if (!pieEl) {
      return
    }
    const myChart = echarts.init(pieEl);
    const options: any = getOptions(this.props.imageAnalysis)
    myChart.setOption(options);
  }

  public render() {
    const {imageAnalysis} = this.props
    return (
      <div>
        <div id="image-analysis-pie" style={{height: 300}}/>
        <p style={{marginBottom: 12}}><strong>Vendor: </strong>{imageAnalysis.vendor}</p>
        <p><strong>Created At: </strong>{this.formatDate(imageAnalysis.created_at)}</p>
      </div>
    )
  }
}

export default Analysis
