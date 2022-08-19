function isLeapYear(year)
{
    return (year % 400 == 0);
}
function calculateDay(month, year)
{
    let days = 0;
    switch(month)
    {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: days = 31; break;
        case 4: case 6: case 9: case 11: days = 30; break;
        case 2: 
            if(isLeapYear(year)) 
                days = 29;
            else
                days = 28;
            break;
    }
    return days;
}
function showDate() 
{
    var d = new Date();
    var nam = d.getFullYear();
    var thang = d.getMonth();
    var ngay = d.getDate();
    var thu = d.getDay() + 1;
    document.getElementById("date").innerHTML = "Hôm nay, " + (thu == 1 ? "chủ nhật " : "thứ " + thu)
        + " ngày " + ngay + "/" + thang + "/" + nam;
    setInterval(showTime, 1000);
}
function showTime()
{
    var t =  new Date();
    var gio = t.getHours();
    var phut = t.getMinutes();
    var giay = t.getSeconds();
    document.getElementById("time").innerHTML = gio + ":" + (phut<10 ? "0" + phut : phut) + ":" 
        + (giay<10 ? "0" + giay : giay);
}