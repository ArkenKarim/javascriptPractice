var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var monthName;
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = currentDate.getDay();
var hours = currentDate.getHours();
var mins = currentDate.getMinutes();
var secs = currentDate.getSeconds();
var strToAppend;
if (hours >12 )
{
	hours1 = "0" + (hours - 12);
strToAppend = "PM";
}
else if (hours <12)
{
	hours1 = "0" + hours;
	strToAppend = "AM";
}
else
{
	hours1 = hours;
	strToAppend = "PM";
}

if(mins<10)
mins = "0" + mins;
if (secs<10)
	secs = "0" + secs;

switch (month)
{
	case 1:
		monthName = "January";
		break;
	case 2:
		monthName = "February";
		break;
	case 3:
		monthName = "March";
		break;
	case 4:
		monthName = "April";
		break;
	case 5:
		monthName = "May";
		break;
	case 6:
		monthName = "June";
		break;
	case 7:
		monthName = "July";
		break;
	case 8:
		monthName = "August";
		break;
	case 9:
		monthName = "September";
		break;
	case 10:
		monthName = "October";
		break;
	case 11:
		monthName = "November";
		break;
	case 12:
		monthName = "December";
		break;
}

var year = currentDate.getFullYear();
var myString;
let today = new Date().toISOString().slice(0, 10)

const startDate  = today;
const endDate    = '2024-06-18';

const diffInMs   = new Date(endDate) - new Date(startDate)
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

myString = "Year: " + year + ".<br />Today is : " + days[day] + ".<br />Date: " + date +  ".<br />Month: " + monthName + ".<br />Current time is " + hours1 + ":" + mins + ":" + secs + " " + strToAppend + "." + ".<br /> " + diffInDays + " days left until the freedom!" ;
document.write('<i>' + myString + '</i>');
function multiplyBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2;
}
