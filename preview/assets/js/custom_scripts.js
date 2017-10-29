var countdown = document.getElementsByClassName("landing-countdown")[0];

/**
 * =======================
 * Code for countdown timer
 * ======================== 
 */

function updateTimer(deadline) {
    var time = deadline - new Date();
    return {
        'days': Math.floor( time/(1000*60*60*24) ),
        'hours': Math.floor( (time/(1000*60*60)) %24 ),
        'minutes': Math.floor( (time/1000/60) %60),
        'seconds': Math.floor( (time/1000) % 60),
        'total': time
    };
}

function startTimer(id, deadline) {
    var timerInterval = setInterval(function(){
        var clock = document.getElementById("countdown-clock");
        var counts = clock.getElementsByClassName("count")

        var timer = updateTimer(deadline);

        counts[0].innerHTML = timer.days;
        counts[1].innerHTML = timer.hours;
        counts[2].innerHTML = timer.minutes;
        counts[3].innerHTML = timer.seconds;
        
        if(countdown.classList.contains("d-none")) {
            countdown.classList.remove("d-none");
        }

        // check for end of time
        if(timer.total < 1) {
            clearInterval(timerInterval);
            
            counts[0].innerHTML = timer.days;
            counts[1].innerHTML = timer.hours;
            counts[2].innerHTML = timer.minutes;
            counts[3].innerHTML = timer.seconds;

        }
    }, 1000);
}

window.onload = function(){    
    var deadline = new Date("March 17, 2018 10:00:00");
    startTimer("clock",deadline);
};
    