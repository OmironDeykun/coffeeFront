// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

let history = [
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 1,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.17",
        "time": "14:07:06"
    },
    {
        "id": 2,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.18",
        "time": "14:07:10"
    },
    {
        "id": 3,
        "name": "petr",
        "type": "espresso",
        "date": "2019.03.19",
        "time": "14:07:11"
    },
    {
        "id": 4,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.19",
        "time": "14:07:14"
    },
    {
        "id": 5,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.20",
        "time": "14:07:33"
    },
    {
        "id": 6,
        "name": "sanya",
        "type": "coffee",
        "date": "2019.03.21",
        "time": "14:07:34"
    },
    {
        "id": 7,
        "name": "nikita",
        "type": "cappuccino",
        "date": "2019.03.21",
        "time": "14:07:35"
    },
    {
        "id": 8,
        "name": "petr",
        "type": "cappuccino",
        "date": "2019.03.21",
        "time": "16:59:24"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "cappuccino",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.23",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.24",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.24",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "coffee",
        "date": "2019.03.24",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "espresso",
        "date": "2019.03.24",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "espresso",
        "date": "2019.03.24",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },
    {
        "id": 9,
        "name": "nikita",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "coffee",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "coffee",
        "date": "2019.03.25",
        "time": "16:59:25"
    },{
        "id": 9,
        "name": "sanya",
        "type": "espresso",
        "date": "2019.03.25",
        "time": "16:59:25"
    },
];

let specifications = [];
let nowDate = 0;
let time = 1;
let statisticsData = [];

for (moment of history) {
   let newDate = moment.date;
   if (newDate === nowDate) {
      time++;
   }else {
      specifications = [time, nowDate]
      statisticsData.push(specifications);
      nowDate = newDate;
      time = 1;
   }
}

let statisticsDataDate = [];
let statisticsDataTime = [];
for (let i = 0; i < statisticsData.length; i++) {
   statisticsDataDate[i] = statisticsData[i][1];
   statisticsDataTime[i] = statisticsData[i][0];
}


function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: statisticsDataDate,
    datasets: [{
      label: "Times",
      lineTension: 0,
      backgroundColor: "rgba(78, 115, 223, 0.05)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: statisticsDataTime,
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return number_format(value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
