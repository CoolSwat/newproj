var crawler = require('./crawler');
var query={
    "url": "http://www.flipkart.com/zeeshaan-contemporary-printed-analog-wall-clock/p/itmeyyresnkhgwf7",
    "type": "html",
    "map": {
        "title": {
            "selector": ".section.omniture-field .title",
            "extract": "text"
        },
        "price": {
            "selector": ".top-section .selling-price",
            "extract": "text"
        },
        "image":{
          "selector":".productImage",
          "extract":"data-src"
        },
        "category":{
          "selector":"#fk-mainbody-id ul a.link",
          "extract":"text"
          
        },
        "details":{
          "selector":".description-text",
          "extract":"text"
        }
    }
}
crawler.getQuery('http://www.flipkart.com/zeeshaan-contemporary-printed-analog-wall-clock/p/itmeyyresnkhgwf7',query).then(function(data){
console.log(data)
})