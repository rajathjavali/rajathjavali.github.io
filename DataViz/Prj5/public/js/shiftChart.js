/** Class implementing the shiftChart. */
class ShiftChart {

    /**
     * Initializes the svg elements required for this chart;
     */
    constructor(electionWinners){
        this.divShiftChart = d3.select("#shiftChart").classed("sideBar", true);
        this.electionWinners = electionWinners;

        this.margin = {top: 30, right: 10, bottom: 30, left: 10};
        let divvotesPercentage = d3.select("#shiftviz").attr("style", "width: 100%");

        //fetch the svg bounds
        this.svgBounds = divvotesPercentage.node().getBoundingClientRect();
        this.svgWidth = this.svgBounds.width - this.margin.left - this.margin.right;
        this.svgHeight = 200;

        //add the svg to the div
        this.svg = divvotesPercentage.append("svg")
            .attr("width",this.svgWidth)
            .attr("height",this.svgHeight)
    };

    /**
     * Creates a list of states that have been selected by brushing over the Electoral Vote Chart
     *
     * @param selectedStates data corresponding to the states selected on brush
     */
    update(selectedStates, dataType){
     
        let _this = this;

        // ******* TODO: PART V *******
        //Display the names of selected states in a list
        //console.log(selectedStates);
        let text = "";
        let span = d3.select("#stateList");

        if(dataType == "year")
        {
            if(selectedStates == "")
                _this.yearText = "", _this.evText = "", _this.statesSelection = "";
            else {
                _this.yearSelection = selectedStates;
                text += "<ul>";
                selectedStates.forEach((row)=>{
                    if(row.YEAR)
                        text += "<li>" + row.YEAR + "</li>";
                });
                text += "</ul>";
                _this.yearText = text;
            }
        }    
        else if(dataType == "ev")
        {
            if(selectedStates == "")
                _this.evText = "";
            else {
                _this.statesSelection = selectedStates;
                text += "<ul>"
                selectedStates.forEach((row)=>{
                   if(row.State)
                        text += "<li>" + row.State + "</li>"
                });
                text += "</ul>";
                _this.evText = text;
            }
        }

        let yrSelection = _this.yearText ? _this.yearText : "";
        let statesSelection = _this.evText ? _this.evText : "";
        span.html(yrSelection + statesSelection);

        //******** TODO: PART VI*******
        //Use the shift data corresponding to the selected years and sketch a visualization
        //that encodes the shift information

        //******** TODO: EXTRA CREDIT I*******
        //Handle brush selection on the year chart and sketch a visualization
        //that encodes the shift informatiomation for all the states on selected years

        //******** TODO: EXTRA CREDIT II*******
        //Create a visualization to visualize the shift data
        //Update the visualization on brush events over the Year chart and Electoral Vote Chart

        yrSelection = _this.yearSelection ? _this.yearSelection : _this.electionWinners;
        statesSelection = _this.statesSelection ? _this.statesSelection : "";

    };


}
