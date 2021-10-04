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
Embed HTML file on your website using inline frame. [See documentation](https://www2.gov.bc.ca/gov/content?id=A36B354AC84645A9AA83664702A00823). 

## Data widget disclaimer and terms of use

TBD

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
