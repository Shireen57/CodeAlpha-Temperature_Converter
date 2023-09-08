const temperature=document.querySelector(".temperature input");
const result=document.querySelector(".result input");
const inputtemperatureunit=document.querySelector(".temperature select");
const resultemperatureunit=document.querySelector(".result select");
temperature.oninput=function(){
   let inputtemperatureunitvalue=inputtemperatureunit.value;
   let resultemperatureunitvalue=resultemperatureunit.value;
   //from celsius to other units
   let celsiustokelvin=inputtemperatureunitvalue==="Celsius" && resultemperatureunitvalue==="Kelvin";
   let celsiustoFahrenhite=inputtemperatureunitvalue==="Celsius" && resultemperatureunitvalue==="Fahrenhite";
   //from kelvin to other units
   let Kelvintocelsius=inputtemperatureunitvalue==="Kelvin" && resultemperatureunitvalue==="Celsuis";
   let KelvintoFahrenhite=inputtemperatureunitvalue==="Kelvin" && resultemperatureunitvalue==="Fahrenhite";
   //From fahrenhite to Other units
   let Fahrenhitetoclesius=inputtemperatureunitvalue==="Fahrenhite" && resultemperatureunitvalue==="Celsius";
   let Fahrenhitetokelvin=inputtemperatureunitvalue==="Fahrenhite" && resultemperatureunitvalue==="Kelvin";
//From the same unit to same unit
let sameunits=inputtemperatureunitvalue===resultemperatureunitvalue;
//calculation
let inputtemperaturevalue=temperature.value;
let converttemperature=0;


if(celsiustokelvin)
{
    converttemperature=(inputtemperaturevalue*1)+273.15;
   result.value=converttemperature.toFixed(2);
   }
    else if(celsiustoFahrenhite)
    {
        converttemperature=(9/5*inputtemperaturevalue)+32;
   result.value=converttemperature.toFixed(2);

    }
    else if(Kelvintocelsius)
    {
        converttemperature=(inputtemperaturevalue-273.15);
        result.value=converttemperature.toFixed(2);

    }
    else if(KelvintoFahrenhite)
    {
        converttemperature=9/5*(inputtemperaturevalue-273.15)+32;
   result.value=converttemperature.toFixed(2);
    }
    else if(Fahrenhitetoclesius)
    {
        converttemperature=5/9*(inputtemperaturevalue-32);
   result.value=converttemperature.toFixed(2);
    }
    else if(Fahrenhitetokelvin)
    {
        converttemperature=5/9*(inputtemperaturevalue-32)+273.15;
   result.value=converttemperature.toFixed(2);
    }
    else if(sameunits)
    {
        result.value=inputtemperaturevalue;
    }
}
   
   
   
   


