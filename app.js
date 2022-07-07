arr=[1,2,3,7,7,7,8,9,9]

function Insert()
{
  arr.push(parseInt(prompt("Enter a number: ")))
  document.getElementById("Result").innerText = "Array: " + arr.toString()
  document.getElementById("Array").innerText = "Array: " + arr.toString()
}

window.onload = () => {
    document.getElementById("Array").innerText = "Array: " + arr.toString()
}

function Duplicate()
{
    var Dup = "Duplicate Elements"
    newArr=[]
    for (var i=0; i<arr.length; i++)
    {
        for (var j=0; j<i; j++)
            if(arr[j]==arr[i])
            {
                var p=0
                for(p=0; p<newArr.length; p++)
                    if(arr[j]==newArr[p])
                        break;
                if(p==newArr.length)    
                    {Dup+="\t"+arr[j]
                    newArr.push(arr[j])
                    break;}
            }
    }
    if(Dup.indexOf(arr[i])==-1)
    document.getElementById("Result").innerText = Dup
}

function Unique()
{
    var unique = "Unique Elements: "
    for (var i=0; i<arr.length; i++)
    {
        var flag = 0
        for (var j=0; j<arr.length; j++)
            if(arr[j]==arr[i])
                    flag++;
            if(flag==1)
                unique+="\t"+arr[i]
    }
    document.getElementById("Result").innerText = unique
}