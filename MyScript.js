
function BtnClick()
{
    // window.alert("J'ai cliqué sur mon Div");

    const MyText = document.getElementById("txtName");
    const MyDiv = document.getElementById("lblHello");

    MyDiv.style.backgroundColor = "#0000aa";
    MyDiv.style.color = "#ffffff";

    MyDiv.innerHTML = "Bonjour <strong>" + MyText.value + "</strong>";
}

function CreateRoad()
{
    const Road = document.getElementById("LightRoad");
    const RoadData = getComputedStyle(Road);

    const NumberStepY = 6;
    const NumberStepX = 12;
    const StepBorderHeight = 2;
    const StepHeight = Math.floor(RoadData.height.substring(0, RoadData.height.length - 2) / NumberStepY);
    const StepWidth = Math.floor(RoadData.width.substring(0, RoadData.width.length - 2) / NumberStepX);

    // alert(StepHeight + " / " + StepWidth);

    let InnerHTML = "<table><tbody>";
    for(row = 0; row < NumberStepY; row++)
    {
        // alert(StepHeight - St(epBorderSize * 2);
        InnerHTML += "<tr style='height: " + StepHeight + "px'>";
        
        for(column = 0; column < NumberStepX; column++)
        {
            InnerHTML += "<td style='width: " + StepWidth + "px'></td>";
        }

        InnerHTML += "</tr>";
    }
    InnerHTML += "</tbody></table>";

    // alert(InnerHTML);
    Road.innerHTML = InnerHTML;
    
}