$(document).ready(init);

function init()
{
	btn_clear_click();

	$("#btn_0").click(btn_num_click);
	$("#btn_1").click(btn_num_click);
	$("#btn_2").click(btn_num_click);
	$("#btn_3").click(btn_num_click);
	$("#btn_4").click(btn_num_click);
	$("#btn_5").click(btn_num_click);
	$("#btn_6").click(btn_num_click);
	$("#btn_7").click(btn_num_click);
	$("#btn_8").click(btn_num_click);
	$("#btn_9").click(btn_num_click);

	$("#btn_plus").click(btn_op_click);
	$("#btn_minus").click(btn_op_click);
	$("#btn_multiply").click(btn_op_click);
	$("#btn_divide").click(btn_op_click);

	$("#btn_equal").click(btn_equal_click);

	$("#btn_dot").click(btn_dot_click);
	$("#btn_clear").click(btn_clear_click);

	$("body").keypress(key_press);
}

var prev_num,prev_op;

function set_display(str)
{
	$("#display").text(str);	
}

function get_display()
{
		return $("#display").text();
}

function btn_clear_click()
{
	prev_num=0.0;
	prev_op="";
	set_display("0");
}

function btn_num_click(event)
{
	//alert(event.target.id);
	var d=get_display();
	if(d!="0")
		set_display(d+event.target.id.charAt(4));
	else
		set_display(event.target.id.charAt(4));
}

function btn_op_click(event)
{
	var op_str=event.target.id.substring(4), op;
	if(op_str=="plus")
		op='+';
	if(op_str=="minus")
		op='-';
	if(op_str=="multiply")
		op='*';
	if(op_str=="divide")
		op='/';
	prev_num=parseFloat(get_display());
	if(prev_op!='')
	{
		btn_equal_click();
		prev_op=op;
	}
	else
	{
		prev_op=op;
		set_display("0");
	}
}

function btn_dot_click()
{
	var str=get_display();
	if(str.indexOf(".")==-1)
	{
		set_display(str+".");
	}
}

function btn_equal_click()
{
	var num=parseFloat(get_display());
	if(prev_op=='+')
		set_display(prev_num+num);
	if(prev_op=='-')
		set_display(prev_num-num);
	if(prev_op=='*')
		set_display(prev_num*num);
	if(prev_op=='/')
		set_display(prev_num/num);
	prev_op="";
}

function key_press(event)
{
	//alert(event.which);
	switch(event.which)
	{
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
			btn_num_click({target:{id:"btn_"+String.fromCharCode(event.which.toString())}});
			break;
		case 43:
			btn_op_click({target:{id:"btn_plus"}});
			break;
		case 45:
			btn_op_click({target:{id:"btn_minus"}});
			break;
		case 42:
			btn_op_click({target:{id:"btn_multiply"}});
			break;
		case 47:
			btn_op_click({target:{id:"btn_divide"}});
			break;
		case 13:
			btn_equal_click();
			break;
		case 99:
			btn_clear_click();
			break;
		case 46:
			btn_dot_click();
			break;
	}
}
