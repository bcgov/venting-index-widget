# Ventilation Index Forecast data widget [![Lifecycle:Stable](https://img.shields.io/badge/Lifecycle-Stable-97ca00)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md) 
This widget allows your website to communicate the Smoke Control Forecast containing predictions of the Ventilation Index, to your website visitors.

## Who is this widget for?

The widget is primarily designed for local governments and municipal authorities who communicate open burning by-laws that reference the Ventilation Index. The goal of this tool is to assist in communicating Venting Index data to their constituents.

## Documentation

Documentation available on the [Venting Index Forecast data widget page](https://www2.gov.bc.ca/gov/content?id=A36B354AC84645A9AA83664702A00823).

## Files in this repository

```
css/            - Bootstrap CSS files
images/         - Gov identity
└── BCID_H_rgb_pos_200w.png
└── favicon.ico
js/             - CSV parsing jquery script
└── widget-vi.js        
└── icons         
vi-widget.html  - main HTML file to display and embed
```

## Deployment 

The live data feed for all Ventilation Index Forecast zones is currently available in [CSV format](https://envistaweb.env.gov.bc.ca/aqo/files/VentingIndex-Widget.csv)

In this widget example, you can embed HTML file on your website using inline frame. [See documentation](https://www2.gov.bc.ca/gov/content?id=A36B354AC84645A9AA83664702A00823). 

## Data widget disclaimer and terms of use

Your use of the Ventilation Index Forecast data widget on your website does not indicate any form of endorsement or approval of your website by the Government of British Columbia (“British Columbia”).

British Columbia may remove, cancel, or make changes to the widget at any time without notice. The widget is provided “as is”. British Columbia makes no warranty, whether express or implied, that the widget will not be uninterrupted or free from loss, corruption, attack, viruses, interference, hacking or other security intrusion. We strongly recommend that you consult with your organization's IT group before installing this widget.

British Columbia is not liable for any errors or omissions in the data and information displayed on the widget, and will not under any circumstances be liable for any direct, indirect, special, incidental, consequential, or other loss, injury or damage caused by the use of the widget or otherwise arising in connection with the widget or the data and information displayed on the widget.

For the most up to date and complete information concerning the Ventilation Index Forecast, including the official forecast required by the Open Burning Smoke Control Regulation, visit our [Ventilation Index web page](https://www2.gov.bc.ca/gov/content?id=7F7CA16CC6424216A06BE4A55EC98213).

## How to contribute

If you would like to propose a component or edit to the widget, please see our [Contributing guideline](CONTRIBUTING.md).

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). 
By participating in this project you agree to abide by its terms.

## License

    Copyright 2021 Province of British Columbia

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
