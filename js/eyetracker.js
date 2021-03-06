function start() {
    train();
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        .setTracker('clmtrackr')
        .setGazeListener(function(data, clock) {
        //    console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
        init(data, clock);
        // if (clock>40000) {
        //     SIGN_gazing = true;
        //     SIGN_sketching = false;     
        //     init(data, clock);               
        // }
        //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
        })
        .begin()
        .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */

    // var width = 320;
    // var height = 240;
    var height = document.getElementById('myContainer').clientHeight-200;
    var width = document.getElementById('myContainer').clientWidth-200;
    var topDist = '0px';
    var leftDist = '0px';
    
    var setup = function() {
        webgazer.params.imgWidth = width;
        webgazer.params.imgHeight = height;
        var cl = webgazer.getTracker().clm;

        function drawLoop() {
            if (cl.getCurrentPosition()) {
            }
        }
        drawLoop();
    };

    function checkIfReady() {
        if (webgazer.isReady()) {
            setup();
        } else {
            setTimeout(checkIfReady, 100);
        }
    }
    setTimeout(checkIfReady,100);
};


window.onbeforeunload = function() {
    //webgazer.end(); //Uncomment if you want to save the data even if you reload the page.
    window.localStorage.clear(); //Comment out if you want to save data across different sessions 
};
