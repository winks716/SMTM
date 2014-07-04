var timePassed = 0;
var unitPrice = 0;
var priceCosted = 0;
var ifStop = 0;
var toggle = 0;

function startToggle(){
    if(toggle === 0){
        start();
        toggle = 1;
    }else{
        stop();
        toggle = 0;
    }
}

function start(){
    document.getElementById('startAndStop').innerHTML = '停止';
    ifStop = 0;
    unitPrice = document.getElementById('unitPrice').value;
    caculate(unitPrice);
}

function caculate(unitPrice){
    timePassed += 0.1;
    priceCosted += 0.1 * unitPrice;
    document.getElementById('timePassed').innerHTML = Math.floor(timePassed*10)/10;
    document.getElementById('priceCosted').innerHTML = Math.floor(priceCosted*10)/10;
    if(ifStop === 0)
        setTimeout(function(){caculate(unitPrice);}, 100);
}

function stop(){
    document.getElementById('startAndStop').innerHTML = '开始';
    ifStop = 1;
}

function reset(){
    stop();
    document.getElementById('timePassed').innerHTML = '';
    document.getElementById('priceCosted').innerHTML = '';
    timePassed = 0;
    unitPrice = 0;
    priceCosted = 0;
    ifStop = 0;
    toggle = 0;
}

