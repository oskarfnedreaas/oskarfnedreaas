var chart = Highcharts.chart('container', {

  chart: {
    type: 'column'
  },

  title: {
    text: 'Norsk mediebarometer'
  },

  subtitle: {
    text: 'Andel av norske befolkning som bruker ulike medier gjennom 1991, 2000 og 2018.'
  },

  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical'
  },

  xAxis: {
    categories: ['1991', '2000', '2018'],
    labels: {
      x: -10
    }
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: 'Amount in %'
    }
  },

  series: [{
    name: 'Papiravis',
    data: [84, 77, 30]
  }, {
    name: 'Radio',
    data: [71, 57, 50]
  }, {
    name: 'Serier/film/video',
    data: [10 , 10, 37]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          align: 'center',
          verticalAlign: 'bottom',
          layout: 'horizontal'
        },
        yAxis: {
          labels: {
            align: 'left',
            x: 0,
            y: -5
          },
          title: {
            text: null
          }
        },
        subtitle: {
          text: null
        },
        credits: {
          enabled: false
        }
      }
    }]
  }
});

document.getElementById('small').addEventListener('click', function () {
  chart.setSize(400);
});

document.getElementById('large').addEventListener('click', function () {
  chart.setSize(600);
});

document.getElementById('auto').addEventListener('click', function () {
  chart.setSize(null);
});