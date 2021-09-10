// Ventilation index data widget version June 2021 - Ministry of Environment and Climate Change Strategy, Copyright 2021 Province of British Columbia 
//Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0. Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.


var vCtrl = '?v=' + new Date().getTime(); //unique version number in a querystring variable, used to prevent caching
var aVenting = [];

jQuery(function ($) { //run after the html has loaded completely in order to avoid attempts to write CSV content before the page is loaded
    loadVentingIndex();
});

function loadVentingIndex() {
    var sPath = 'https://envistaweb.env.gov.bc.ca/aqo/files/';
    var csvVentingIndex = 'VentingIndex-Widget.csv' + vCtrl;
    loadCSV(sPath, csvVentingIndex);
}
function writeVentingIndex(aVenting) {
    var selID = '';
    selID = getQVar('Venting-ID');
    var sID = 'Venting-ID'; //ID column name
    var iID = 0; //index of ID column
    selID = getQVar(sID);
    console.log('selID: ' + selID);
    console.log('aVenting.length: ' + aVenting.length);

    var sContent = '';
    var aHead = [];
    sContent = '<div><table id="vi-table" class="table table-bordered table-striped table-hover">';
    jQuery.each(aVenting, function (x, y) { //loop through each line from the CSV

        if (x === 0) { //find ID column
            jQuery.each(y, function (a, b) {
                if (b === sID) {
                    iID = a;
                }
            });
        }
        if ((y[iID].replaceAll('"', '') === selID || selID === '') || x === 0) { //match ID or display all if no ID found

            jQuery.each(y, function (a, b) {
                if (x === 0) { //index the table headings
                    aHead[a] = b;
                } else {
                    jQuery.each(aHead, function (c, d) { //if not the header/line 1, loop through the indexed headings and write the heading/value pair in a table row
                        if (c === a) { //if the column index matches the header column index, write the matched heading/value pair
                            sContent += '<tr>';
                            sContent += '<th class="column-label">' + d.replaceAll('"', '') + '<\/th>';
                            sContent += '<td class="column-data">' + b.replaceAll('"', '') + '<\/td>';
                            sContent += '<\/tr>';
                        }
                    });
                }
            });
            if (x === 0) {
                sContent += '<tr><th colspan="2" class="row-title">Ventilation Index Forecast:<\/th><\/tr>'; //write a divider between records, in case multiple records are listed 
            } else {
                sContent += '<tr><th class="footer-content" colspan="2"><strong>ATTENTION:</strong> Please check the <a href="http://bcfireinfo.for.gov.bc.ca/hprScripts/WildfireNews/Bans.asp" target="_blank">BCWS Fire Bans and Prohibitions page<\/a> before carrying out open burning activities. Learn more about the <a href="https://www2.gov.bc.ca/gov/content?id=7F7CA16CC6424216A06BE4A55EC98213" target="_blank">Ventilation Index</a> and burning requirements under the <a href="https://www2.gov.bc.ca/gov/content?id=B80E598467D64676A267DE31C9D92684" target="_blank">Open Burning Smoke Control Regulation</a>.<\/th><\/tr>'; //write a divider between records, in case multiple records are listed  
            }
        }
    });
    sContent += '<\/table><\/div>';

    jQuery('#venting-index').html(sContent);
}

function loadCSV(sPath, csvFile) {
    var sCSV = '';
    var aCSV = [];
    jQuery.ajax({
        type: 'GET',
        url: sPath + csvFile + vCtrl,
        dataType: 'text',
        cache: false,
        success: function (result) {
            console.log(csvFile + ' load success');
        },
        error: function (result, status, error) {
            console.log(csvFile + ' load error: ' + error);
        },
        complete: function (result) {
            console.log(csvFile + ' load complete');
            //parse CSV
            jQuery.each(result, function (x, y) {
                if (x === 'responseText') {
                    sCSV = y;
                }
            });
            aCSV = parseCSV(sCSV);
            console.log('aCSV.length: ' + aCSV.length);
            aVentingIndex = aCSV;
            writeVentingIndex(aCSV);
            return aCSV;
        }
    })

    function parseCSV(sCSV) {
        var sTemp = '';
        var aCSV = [];
        var aLines = [];
        var aFields = [];
        aLines = sCSV.split('\r\n');
        jQuery.each(aLines, function (x, y) {
            sTemp = y.replace('\r\n', '');
            if (sTemp !== '') {
                aCSV[x] = sTemp.replace('\r\n', '').split(',');
            }
           
        });
       
        return aCSV;
    }
}

function getQVar(qVar) {
    //extract the value for a specified variable in the querystring
    var qs = window.location.search.substr(1);
    var aVars = window.location.search.substr(1).split('&');
    var sVal = '';
    for (i = 0; i < aVars.length; i++) {
        aVar = aVars[i].split('=');
        if (aVar[0] == qVar) {
            sVal = aVar[1];
            break;
        }
    }
    return sVal;
}
