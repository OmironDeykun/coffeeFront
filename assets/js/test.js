$.getJSON(
   'https://swapi.co/api/people/',
   function (data) {

      let peopleData = [];
      for (let people of data.results) {
         let specifications = [Number(people.mass), Number(people.height)]
         peopleData.push(specifications)
      }

      function compareNumeric(a, b) {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
      }
      peopleData.sort(compareNumeric);

      Highcharts.chart('statistics', {
         chart: {
            type: 'spline',
            inverted: true
         },
         title: {
            text: 'Coefficient Mass / height of people'
         },
         xAxis: {
            reversed: false,
            title: {
               enabled: true,
               text: 'Mass'
            },
               labels: {
               format: '{value} kg'
            },
            maxPadding: 0.05,
            showLastLabel: true
         },
         yAxis: {
            title: {
               text: 'Height'
            },
            labels: {
               format: '{value} sm'
            },
            lineWidth: 2
         },
         legend: {
            enabled: false
         },
         tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} kg: {point.y} sm'
         },
         plotOptions: {
            spline: {
               marker: {
                  enable: false
               }
            }
         },
         series: [{
               name: 'Coefficient',
               data: peopleData
         }]
      });
   }
);
