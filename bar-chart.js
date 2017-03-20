var c1 = d3.select("#fy2012");
var c2 = d3.select("#fy2016");

var info =
    [
	{
	    "category" : "Social Security, Unemployment, and Labor",	
	    "color" : "#EAC435",
	    "year1" : 1254302070413,
	    "year2": 1305647617341
	    
	},
	{
	    "category" : "Medicare and Health",
	    "color" : "#345995",
	    "year1": 780970327258,
	    "year2": 1004278932282
	},
	{
	    "category" : "National Defense",
	    "color" : "#823038",
	    "year1": 646743631332,
	    "year2": 541429595127
	},
	{
	    "category" : "Net Interest",
	    "color" : "#03CEA4",
	    "year1": 210292910981,
	    "year2": 214979398065
	},
	{
	    "category" : "Veterans Benefits and Services",
	    "color" : "#FB4D3D",
	    "year1": 118877015551,
	    "year2": 159596022930
	},
	{
	    "category" : "Education Training, Employment, and Social Services",	
	    "color" : "#28965A",
	    "year1": 86654899341,
	    "year2": 102053027588
	}
    ];

var commify = function(n) {
    if (n<1000) {
	return n.toString();
    }
    else {
	return commify(Math.floor(n/1000)) + "," + (n%1000).toString();
    }
};

var makeBars = function() {
    c1.selectAll("div")
	.data(info)
	.enter()
	.append("p")
	.text( function(d) {
	    return d["category"];
	})
	.append("div")
	.style("width", "1px")
	.style("background-color", function(d) {
	    return d["color"];
	})
	.text( function(d) {
	    return "$" + commify(d["year1"]);
	});
    c2.selectAll("div")
	.data(info)
	.enter()
	.append("p")
	.text( function(d) {
	    return d["category"];
	})
	.append("div")
	.style("width", "1px")
	.style("background-color", function(d) {
	    return d["color"];
	})
	.text( function(d) {
	    return "$" + commify(d["year2"]);
	});
};

var fancy = function() {
    c1.selectAll("div")
	.data(info)
	.transition()
	.duration(1500)
	.style("width", function(d) {
	    return d["year1"]/1000100000 + "px";
	});
    c2.selectAll("div")
	.data(info)
	.transition()
	.duration(1500)
	.style("width", function(d) {
	    return d["year2"]/1000100000 + "px";
	});
};
    
    
makeBars();
fancy();
