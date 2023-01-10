// global variables
var txtName, lblHello, btnSayHello;
var divTableContainer;


// methods
window.onload = function()
{
    // executes when page loads

    // define global variables
    txtName = document.getElementById("txtName");
    lblHello = document.getElementById("lblHello");
    btnSayHello = document.getElementById("btnSayHello");

    divTableContainer = document.getElementById("DynamicTableContainer");

    // add event listeners
    btnSayHello.addEventListener("click", SayHello);
    lblHello.addEventListener("mouseover", AnimateHello);

    txtCreateTableWithNumbers.addEventListener(
        "click", function(event) { CreateTable(true) } );
        txtCreateTableWithoutNumbers.addEventListener(
            "click", function(event) { CreateTable(false) } );
    
}


function SayHello()
{
    // window.alert("J'ai cliqué sur mon Div");

    lblHello.style.backgroundColor = "#0000aa";
    lblHello.style.color = "#ffffff";

    lblHello.innerHTML = "Bonjour <strong>" + txtName.value + "</strong>";
}


function AnimateHello()
{

    // get actual css style values
    const lblHelloData = getComputedStyle(lblHello);

    // calculate new css data
    let PadLeft = Number(lblHelloData.paddingLeft.substring(0, lblHelloData.paddingLeft.length - 2))
    // console.log(PadLeft);
    
    // apply new data to DOM object css
    lblHello.style.paddingLeft = (PadLeft + 10) + "px" ;
    // console.log(lblHelloData.paddingLeft.substring(0, lblHelloData.paddingLeft.length - 2));

}


function CreateTable(
    AddNumbersInCells)
{

    // alert(AddNumbersInCells);
    const TableData = getComputedStyle(divTableContainer);

    // make calculations
    const NumberStepY = 6;
    const NumberStepX = 12;
    const StepHeight = Math.floor(TableData.height.substring(0, TableData.height.length - 2) / NumberStepY);
    const StepWidth = Math.floor(TableData.width.substring(0, TableData.width.length - 2) / NumberStepX);

    // alert(StepHeight + " / " + StepWidth);

    // generate dynamic HTML in string
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

    // add dynamic HTML string to DOM object
    // alert(InnerHTML);
    divTableContainer.innerHTML = InnerHTML;
    
}