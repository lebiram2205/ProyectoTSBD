
    



var canvas = document.getElementById('myChart').getContext('2d');
var chart = new Chart(canvas, {
    // The type of chart we want to create
    type : 'bar',
    // The data for our dataset
    data : {
        labels : [10, 20, 81, 56, 55, 40],
        datasets : [ {
            label : 'Numero de incidencias en el año 2019',
            data : [10, 20, 81, 56, 55, 40],
            backgroundColor: 'rgba(2,47,187)'

        } ]

    }
});

