var scrap = require('scrap');
var util = require("util");
var config = require("../config");

var message503 = "Service Unavailable or the search is not valid";
var message500 = "Something went wrong";

exports.scrapFii = function(request, response){
    var codigo = request.params.codigo;
    var responseData = [] ;
    scrap(config.endpoint.concat("/"+codigo), function(err, $) {
          if( err ){
              return response.status(503).json({message:message503});
          }

          for(var i=1; i < $('tr','table').length; i++){
              var tr = $('tr','table').eq(i);
              var data = {
                  code: codigo,
                  baseDate: formatDate($("td", tr).eq(0).text()),
                  payDate: formatDate($("td", tr).eq(1).text()),
                  valueOnBaseDate: formatMoney($("td", tr).eq(2).text()),
                  diy: formatPercentage($("td", tr).eq(3).text()),
                  dividend: formatMoney($("td", tr).eq(4).text()),
              }
              responseData[i-1] = data;
          }

          if(response.length == 0){
              return response.status(500).json({message:message500});
          } else{
              return response.status(200).json(responseData);
          }
    });
}

function formatDate(date){
    var arrayOfStrings = date.split("/");
    var year = "20"+arrayOfStrings[2];
    return year+"-"+arrayOfStrings[1]+"-"+arrayOfStrings[0];
}

function formatMoney(money){
    money = money.replace("R$","");
    money = money.replace(" ","");
    return parseFloat(money.replace(",","."),2);
}

function formatPercentage(percentage){
    percentage = percentage.replace(",",".");
    return parseFloat(percentage.replace("%",""));
}