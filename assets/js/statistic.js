new Vue({
   el: '#app',
   data: {
      // peopleData: [],
      specifications: [],
      nowDate: 0,
      time: 0,
      statisticsData: [],
      history: [
          {
              "id": 1,
              "name": "petr",
              "type": "espresso",
              "date": "03.14",
              "time": "14:07:06"
          },
          {
              "id": 2,
              "name": "petr",
              "type": "espresso",
              "date": "03.16",
              "time": "14:07:10"
          },
          {
              "id": 3,
              "name": "petr",
              "type": "espresso",
              "date": "03.16",
              "time": "14:07:11"
          },
          {
              "id": 4,
              "name": "petr",
              "type": "espresso",
              "date": "03.16",
              "time": "14:07:14"
          },
          {
              "id": 5,
              "name": "nikita",
              "type": "coffee",
              "date": "03.17",
              "time": "14:07:33"
          },
          {
              "id": 6,
              "name": "nikita",
              "type": "coffee",
              "date": "03.18",
              "time": "14:07:34"
          },
          {
              "id": 7,
              "name": "nikita",
              "type": "coffee",
              "date": "03.18",
              "time": "14:07:35"
          },
          {
              "id": 8,
              "name": "nikita",
              "type": "coffee",
              "date": "03.18",
              "time": "14:07:35"
          },
          {
              "id": 9,
              "name": "nikita",
              "type": "coffee",
              "date": "03.18",
              "time": "14:07:35"
          },
          {
              "id": 10,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
          {
              "id": 11,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
          {
              "id": 11,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
          {
              "id": 11,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
          {
              "id": 11,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
          {
              "id": 11,
              "name": "nikita",
              "type": "coffee",
              "date": "03.19",
              "time": "14:07:35"
          },
      ]
   },
   methods:{
      compareNumeric(a, b){
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
      },

      getData(){
         // axios
   		// 	.get('https://swapi.co/api/people/')
         //    .then(response => {
         //       for (let people of response.data.results) {
         //          specifications = [Number(people.mass), Number(people.height)]
         //          this.peopleData.push(specifications)
         //       }
         //       this.peopleData.sort(this.compareNumeric);
         //    })
         for (moment of this.history) {
            let newDate = moment.date;
            if (newDate === this.nowDate) {
               this.time++;
            }else {
               this.nowDate = newDate;
               this.specifications = [Number(this.time), Number(this.nowDate)]
               this.statisticsData.push(this.specifications);
               this.time = 1;
            }
         }
         console.log(this.statisticsData);
      },

      createStatistic(){
         Highcharts.chart('statistics', {
            chart: {
               type: 'spline',
               inverted: true
            },
            title: {
               text: 'Times / date'
            },
            xAxis: {
               reversed: false,
               title: {
                  enabled: true,
                  text: 'Times'
               },
                  labels: {
                  format: '{value} times'
               },
               // maxPadding: 0.05,
               showLastLabel: true,
               minTickInterval: 1
            },
            yAxis: {
               title: {
                  text: 'date'
               },
               labels: {
                  format: '19.0{value}'
               },
               lineWidth: 2,
               minTickInterval: 0.01
            },
            legend: {
               enabled: false
            },
            tooltip: {
               headerFormat: '<b>{series.name}</b><br/>',
               pointFormat: '{point.x} times: 2019.0{point.y}'
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
                  // data: this.peopleData
                  data: this.statisticsData
            }]
         });
      }
   },
   mounted() {
      this.getData();
      this.createStatistic();
   }
});


// let history = [
//     {
//         "id": 1,
//         "name": "petr",
//         "type": "espresso",
//         "date": "2019.03.18",
//         "time": "14:07:06"
//     },
//     {
//         "id": 2,
//         "name": "petr",
//         "type": "espresso",
//         "date": "2019.03.18",
//         "time": "14:07:10"
//     },
//     {
//         "id": 3,
//         "name": "petr",
//         "type": "espresso",
//         "date": "2019.03.18",
//         "time": "14:07:11"
//     },
//     {
//         "id": 4,
//         "name": "petr",
//         "type": "espresso",
//         "date": "2019.03.18",
//         "time": "14:07:14"
//     },
//     {
//         "id": 5,
//         "name": "nikita",
//         "type": "coffee",
//         "date": "2019.03.18",
//         "time": "14:07:33"
//     },
//     {
//         "id": 6,
//         "name": "nikita",
//         "type": "coffee",
//         "date": "2019.03.18",
//         "time": "14:07:34"
//     },
//     {
//         "id": 7,
//         "name": "nikita",
//         "type": "coffee",
//         "date": "2019.03.18",
//         "time": "14:07:35"
//     }
// ];
