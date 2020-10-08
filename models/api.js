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
                  baseDate: $("td", tr).eq(0).text(),
                  payDate: $("td", tr).eq(1).text(),
                  valueOnPayDate: $("td", tr).eq(2).text(),
                  diy: $("td", tr).eq(3).text(),
                  dividend: $("td", tr).eq(4).text(),
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