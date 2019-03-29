import * as React from 'react'
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

  public render() {
    const {imageAnalysis} = this.props
    return (
      <div>
        {
          imageAnalysis.labels && imageAnalysis.labels.map(label =>
            <p>Name: {label.Name}, Confidence: {label.Confidence}</p>
          )
        }
        <p><strong>Vendor: </strong>{imageAnalysis.vendor}</p>
        <p><strong>Created At</strong>{this.formatDate(imageAnalysis.created_at)}</p>
      </div>
    )
  }
}

export default Analysis
