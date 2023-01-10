

function SayHello()
{
    // window.alert("J'ai cliqué sur mon Div");

    const MyText = document.getElementById("txtName");
    const MyDiv = document.getElementById("lblHello");

    MyDiv.style.backgroundColor = "#0000aa";
    MyDiv.style.color = "#ffffff";

    MyDiv.innerHTML = "Bonjour <strong>" + MyText.value + "</strong>";
}


function AnimateHello()
{

    const MyDiv = document.getElementById("lblHello");
    const MyDivData = getComputedStyle(MyDiv);

    let PadLeft = Number(MyDivData.paddingLeft.substring(0, MyDivData.paddingLeft.length - 2))
    // console.log(PadLeft);
    MyDiv.style.paddingLeft = (PadLeft + 10) + "px" ;
    // console.log(MyDivData.paddingLeft.substring(0, MyDivData.paddingLeft.length - 2));

}


function CreateTable(
    AddNumbersInCells)
{
    const MyTableContainer = document.getElementById("DynamicTableContainer");
    const TableData = getComputedStyle(MyTableContainer);

    const NumberStepY = 6;
    const NumberStepX = 12;
    const StepHeight = Math.floor(TableData.height.substring(0, TableData.height.length - 2) / NumberStepY);
    const StepWidth = Math.floor(TableData.width.substring(0, TableData.width.length - 2) / NumberStepX);

    // alert(StepHeight + " / " + StepWidth);

    let InnerHTML = "<table><tbody>";
    for(row = 0; row < NumberStepY; row++)
    {
        InnerHTML += "<tr style='height: " + StepHeight + "px'>";
        
        for(column = 0; column < NumberStepX; column++)
        {
            InnerHTML += "<td style='width: " + StepWidth + "px'>"
            if(AddNumbersInCells)
                InnerHTML += row + " : " + column;
            InnerHTML += "</td>";
        }

        InnerHTML += "</tr>";
    }
    InnerHTML += "</tbody></table>";

    // alert(InnerHTML);
    MyTableContainer.innerHTML = InnerHTML;
    
}