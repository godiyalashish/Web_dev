const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/?adtar=mkdemo_standardunits&ex_cid=ipl2022:google_cpc:search:dsa_feed:msn&gclid=CjwKCAjwloCSBhAeEiwA3hVo_XU555ci6mwSf0FjDCbzYvVszNMsaI1ClKrWoRJJSR-kvdGcC3rSvBoCfzQQAvD_BwE";


request(link, function (error, response,html) {
    if(error)
        console.error('error:', error); // Print the error if one occurred
  else{
      const dom = new JSDOM(html);
      const document = dom.window.document;
      const content = document.querySelectorAll(".match-info.match-info-FEED.match-info-with-icon .teams .name");

      for(let i=0; i<content.length; i++){
          console.log(content[i].textContent);
      }

    }
});