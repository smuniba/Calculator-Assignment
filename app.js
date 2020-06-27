function getData(num)
{
    var result = document.getElementById("result");
    result.value+=num;
}
function clearResult()
{
    var result = document.getElementById("result");
    result.value = " ";
}
function getResult()
{
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function square(num)
{
    var result = num * num;
    // result.value
}