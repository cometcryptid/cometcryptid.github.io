var html = GetHTML('window_baseplate');


function GetHTML(windowName) 
{
   return $(".window").load("./pages/"+ windowName +".html");
}