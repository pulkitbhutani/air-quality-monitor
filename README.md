Hi, 

Built a simple AirQuality monitor, with capability for it to show the live data of all the cities in the table and also, user can look at the graph of live data, with live graph updates.

Currenly only maintaining the data for current city, but data can be in the same way maintained for all the cities in the redux store.

I have used below techstack - 

Front end - React
Statemanagement- Redux
Graphing Library - Google Charts
Continuous deployment - Netlify is used for continuous deployments as soon as there is a merge or push on master branch.

Choice of graphing lib - Since the only requirement here was a bar chart, so google charts syntax looked clean and quickly applicable for a simple bar chart, hence I used google charts for this application.