import ReactEcharts from 'echarts-for-react';

const Chart = () => {
  var colorPalette = ['#3E5AFF', '#FFB55F', '#FF796C', '#707ED1', '#9C6DFF'];

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
        color: colorPalette,
        label: {
          formatter: '{d}%',
          position: "inner",
          fontSize: 10,
          color: 'white'
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 900, name: 'Open Workspace' },
          { value: 367, name: 'Cabins' },
          { value: 285, name: 'Meeting Rooms' },
          { value: 900, name: 'Public Spaces' },
          { value: 398, name: 'Support Spaces' }
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