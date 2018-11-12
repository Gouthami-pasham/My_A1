function disp(n1)
{
cal.text1.value=cal.text1.value+n1;
}

function clr()
{
cal.text1.value="";
cal.text2.value="";
}


function find()
{

if(cal.text1.value%2==0)
{
	cal.text2.value="It's an even number";
}
else
{
	cal.text2.value="It's an odd number";
}

}

