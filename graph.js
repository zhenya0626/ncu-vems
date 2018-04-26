(function() {
  // ----- ここから -------
  // データをセットする
  // ex.) data[1][hour] 1つ目の機器の時間あたりのデータをint型の配列で保持
  
  //----1009追記------
 // ai_realを数値型に変換
  var real = [];
  for(var i=0; i<15; i++){
  real[i] = Number(ai_real[i]);
  }　
    //----1009追記ここまで------
    //----1023追記------
var now = new Date(); 
var year = now.getFullYear();
var month = now.getMonth()+1;
var week = now.getDay();
var day = now.getDate();


var trend_2_1 = [];
var trend_2_2 = [];
var trend_2_3 = [];
var trend_2_4 = [];

for(var i =0;i<trend_p2_samples;i++){
  if(Number(trend_p2_day[i]) == (day-1)){
    for(var j=0; j<24; j++){
      trend_2_1[j] = Number(trend_p2_ch1[i+1]); 
      i++;
    }
    break;
  }　
}
for(var i =0;i<trend_p2_samples;i++){
  if(Number(trend_p2_day[i]) == (day-1)){
    for(var j=0; j<24; j++){
      trend_2_2[j] = Number(trend_p2_ch2[i+1]); 
      i++;
    }
    break;
  }　
}
for(var i =0;i<trend_p2_samples;i++){
  if(Number(trend_p2_day[i]) == (day-1)){
    for(var j=0; j<24; j++){
      trend_2_3[j] = Number(trend_p2_ch3[i+1]); 
      i++;
    }
    break;
  }　
}
for(var i =0;i<trend_p2_samples;i++){
  if(Number(trend_p2_day[i]) == (day-1)){
    for(var j=0; j<24; j++){
      trend_2_4[j] = Number(trend_p2_ch4[i+1]); 
      i++;
    }
    break;
  }　
}
    //----1023じっけんここまで------test



  var data = [];
  data[0] = {
      "hour": [trend_2_1[0],trend_2_1[1],trend_2_1[2],trend_2_1[3],trend_2_1[4],trend_2_1[5],trend_2_1[6],trend_2_1[7],trend_2_1[8],trend_2_1[9],trend_2_1[10],trend_2_1[11],trend_2_1[12],trend_2_1[13],trend_2_1[14],trend_2_1[15],trend_2_1[16],trend_2_1[17],trend_2_1[18],trend_2_1[19],trend_2_1[20],trend_2_1[21],trend_2_1[22],trend_2_1[23]],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };
    data[1] = {
      "hour": [trend_2_2[0],trend_2_2[1],trend_2_2[2],trend_2_2[3],trend_2_2[4],trend_2_2[5],trend_2_2[6],trend_2_2[7],trend_2_2[8],trend_2_2[9],trend_2_2[10],trend_2_2[11],trend_2_2[12],trend_2_2[13],trend_2_2[14],trend_2_2[15],trend_2_2[16],trend_2_2[17],trend_2_2[18],trend_2_2[19],trend_2_2[20],trend_2_2[21],trend_2_2[22],trend_2_2[23]],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };
    data[2] = {
      "hour": [trend_2_3[0],trend_2_3[1],trend_2_3[2],trend_2_3[3],trend_2_3[4],trend_2_3[5],trend_2_3[6],trend_2_3[7],trend_2_3[8],trend_2_3[9],trend_2_3[10],trend_2_3[11],trend_2_3[12],trend_2_3[13],trend_2_3[14],trend_2_3[15],trend_2_3[16],trend_2_3[17],trend_2_3[18],trend_2_3[19],trend_2_3[20],trend_2_3[21],trend_2_3[22],trend_2_3[23]],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };
    data[3] = {
      "hour": [trend_2_4[0],trend_2_4[1],trend_2_4[2],trend_2_4[3],trend_2_4[4],trend_2_4[5],trend_2_4[6],trend_2_4[7],trend_2_4[8],trend_2_4[9],trend_2_4[10],trend_2_4[11],trend_2_4[12],trend_2_4[13],trend_2_4[14],trend_2_4[15],trend_2_4[16],trend_2_4[17],trend_2_4[18],trend_2_4[19],trend_2_4[20],trend_2_4[21],trend_2_4[22],trend_2_4[23]],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };

     //----1023じっけんここまで------test
  for(var i=4; i<=15; i++){
    data[i] = {
      "hour": [trend_2_1[0],trend_2_1[1],trend_2_1[2],trend_2_1[3],trend_2_1[4],trend_2_1[5],trend_2_1[6],trend_2_1[7],trend_2_1[8],trend_2_1[9],trend_2_1[10],trend_2_1[11],trend_2_1[12],trend_2_1[13],trend_2_1[14],trend_2_1[15],trend_2_1[16],trend_2_1[17],trend_2_1[18],trend_2_1[19],trend_2_1[20],trend_2_1[21],trend_2_1[22],trend_2_1[23]],
      "day": [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1],
      "month": [1,2,3,4,5,6,7,8,9,10,11,12]
    };
  }
  // ----- ここまで -------

  var activeMenu =  document.querySelector('.menu-item.active')
  for(var i=0; i<activeMenu.children.length; i++){
    if(activeMenu.children[i].classList.contains('from')){
      var from = activeMenu.children[i].innerHTML;
    }else if(activeMenu.children[i].classList.contains('to')){
      var to = activeMenu.children[i].innerHTML;
    }
  }

  var powerUsage = document.getElementById("power-usage");
  var units =  document.querySelectorAll('.unit');
  for(var i=0; i<units.length; i++){
    if(units[i].classList.contains('active')){
      var powerLabel = createXAxis(i);
      var powerData = createPowerData(data, parseInt(from), parseInt(to), i);
    }
  }
  createLine(powerUsage, powerLabel, powerData);

  var monthlyPowerUsage = document.getElementById("daily-power-usage");
  var monthlyPowerUsageLabel = ["今月の電気使用量", "目標までの差"];
  var max = 5000;
  var monthlyPowerUsageData = calculatePercentage(data, parseInt(from), parseInt(to), max);
  document.getElementById('power-val').innerHTML = parseInt(monthlyPowerUsageData[0]);
  createDoughnut(monthlyPowerUsage, monthlyPowerUsageLabel, monthlyPowerUsageData);

  var powerCost = document.getElementById("power-cost");
  var costLabel = ["今月の使用料金", "目標までの差額"];
  var max = 3000;
  var costData = calculatePercentage(data, parseInt(from), parseInt(to), max);
  document.getElementById('cost-val').innerHTML = parseInt(costData[0]);
  createDoughnut(powerCost, costLabel, costData);
})();

function createPowerData(data, from, to, num){
  var result = [];
  if(num == 0){
    for(var i=0; i<24; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["hour"][i];
      }
      result.push(item);
    }
  }else if(num == 1){
    for(var i=0; i<31; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["day"][i];
      }
      result.push(item);
    }
  }else if(num == 2){
    for(var i=0; i<12; i++){
      var item = 0;
      for(var j=from; j<=to; j++){
        item += data[j]["month"][i];
      }
      result.push(item);
    }
  }
  return result;
}

function calculatePercentage(data, from, to, max){
  var item = 0;
  for(var i=from; i<=to; i++){
    for(var j=0; j<31; j++){
      item += data[i]["day"][j];
    }
  }
  var use = item / max * 100;
  return [use, 100-use];
}

function convertCost(){
  // 電気代換算
}

function createXAxis(num){
  var label = [];
  if(num == 0){
    for(var i=1; i<=24; i++){
      var item = i + "時";
      label.push(item);
    }
  }else if(num == 1){
    for(var i=1; i<=31; i++){
      var item = i + "日";
      label.push(item);
    }
  }else if(num == 2){
    for(var i=1; i<=12; i++){
      var item = i + "月";
      label.push(item);
    }
  }
  return label;
}

function createLine(target, label, data){
  var lineChart = new Chart(target, {
    type: 'line',
    data: {
        labels: label,
        datasets: [{
            label: "電力（W）",
            backgroundColor: "#9cff57",
            borderColor: "#64dd17",
            data: data
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
  });
}

function createDoughnut(target, label, data){
  var doughnutChart = new Chart(target, {
    type: 'doughnut',
    data: {
      labels: label,
      datasets: [{
        backgroundColor: [
          "#64dd17",
          "#95a5a6"
        ],
        data: data
      }]
    }
  });
}
