// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


let name;
let searched = false;
let peopleTime = 1;
let resData = [];
for (moment of history) {
   name = moment.name;
   for (let i = 0; i < resData.length; i++) {
      if (name === resData[i][0]) {
         resData[i][1]++;
         searched = true;
      }
   }
   if (!searched) {
      resData.push([name, 1]);
   }
   searched = false;
}
let reslabels = [], resvalue = [];
for (peopleTime of resData) {
   reslabels.push(peopleTime[0]);
   resvalue.push(peopleTime[1]);
}

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: reslabels,
    datasets: [{
      data: resvalue,
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
