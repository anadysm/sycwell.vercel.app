var randomnum = Math.floor(100000000 + Math.random() * 900000000);
var mewu = randomnum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
document.getElementById('badcode').innerHTML = mewu;
