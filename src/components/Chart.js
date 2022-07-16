import ReactEcharts from 'echarts-for-react';

const Chart = () => {
  const options = {
    
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '90%',
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1
        },
        label: {
          show:false
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: 'Open Workspace' },
          { value: 735, name: 'Cabins' },
          { value: 580, name: 'Meeting Rooms' },
          { value: 484, name: 'Public Spaces' },
          { value: 300, name: 'Suppor Spaces' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  const styles = {
    "height": 240,
  }
  
  return (
    <div className="chart">
      <ReactEcharts
        option={options}
        style={styles}
      />
    </div>
  )
}

export default Chart;