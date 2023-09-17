var countrySateCityinfo= province,
if(countrySateCityinfo="northern"),{
		hospital:{
           ruhengeri hospital: ["6725", "6318", "6701"],
           rutongo hospital: ["7000", "7520"],
           butaro hospital: ["7250", "7334"],
           byumba hospital: ["7320", "7315"],
           ruli hospital: ["7000", "7520"],
           nemba hospital: ["7250", "7334"],
           kinihira hospital: ["7320", "7315"],
		} },
    southern: {
		hospital:{
          kabgayi hospital: ["6725", "6318", "6701"],
          kaduha hospital: ["6429", "6432"],
          kibilizi hospital: ["7000", "7520"],
          gitwe hospital: ["7250", "7334"],
          nyanza hospital: ["7320", "7315"],
          munini hospital: ["7000", "7520"],
          kigema hospital: ["7250", "7334"],
          gakoma History: ["7320", "7315"],
          kabutare hospital: ["7000", "7520"],
          remera-rukoma hospital: ["7250", "7334"],
          chub: ["7320", "7315"],
          ruhango hospital: ["7000", "7520"],
		} },
    western: {
		hospital:{
           shyira hospital: ["6725", "6318", "6701"],
           murunda hospital: ["6429", "6432"],
           kabaya hospital: ["7000", "7520"],
           kibuye hospital: ["7250", "7334"],
           gisenyi hospital: ["7320", "7315"],
           mibirizi hospital: ["7000", "7520"],
           kibogora hospital: ["7250", "7334"],
           kirinda hospital: ["7320", "7315"],
           muhororo hospital: ["7000", "7520"],
           gihundwe hospital: ["7250", "7334"],
           bushenge hospital: ["7320", "7315"],
		   mugonero hospital: ["7320", "7315"],
		}},
    eastern: {
		hospital:{
            rwinkwavu hospital: ["80331", "80333", "80335"],
            kirehe hospital: ["90402", "90403", "90404"],
            kibungo hospital: ["60306", "60309", "60310"],
            nyagatare hospital: ["55246", "55247", "55248", "55249"],
            gahini hospital: ["7000", "7520"],
            nyamata hospital: ["7250", "7334"],
            ngarama hospital: ["7320", "7315"],
            kiziguro hospital: ["7000", "7520"],
            rwamagana hospital: ["7250", "7334"],
		} },
	kigali city:{
		hospital:{
		CHUK: ["7320", "7315"],
		kacyiru hospital: ["7320", "7315"],
		muhima hospital: ["7320", "7315"],
		kibagabaga hospital: ["7320", "7315"],
		kanombe military hospital: ["7320", "7315"],
		King faisal hospital: ["7320", "7315"],
		ndera hospital: ["7320", "7315"],
		masaka hospital: ["7320", "7315"],
    
		}},

window.onload = function(){
    const select the province= document.getElementById('province'),
        select the hospital = document.getElementById('hospitalt'),
    
        selects = document.querySelectorAll('select')

        select the province.disabled = true
        select the hospital.disabled = true
       

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let province in countrySateCityinfo){
            // console.log(country);
            select the province.options[select the province.options.length] = new Option(province, province)
        }


        // country change
        selectprovince.onchange = (e) =>{
            
            select the province.disabled = false
            select the hospital.disabled = true
            

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selecthospital.length = 1
            

            for(let hospital in countrySateCityinfo[select the province.value][e.target.value]){
                // console.log(city);
                select the hospital.options[select the hospital.options.length] = new Option(hospital, hospital)
            }
        }

        
            
            select the hospital.length = 1

            let hospital = countrySateCityinfo[select the province.value][e.target.value]
            
            for(let i=0; i<hospital.length; i++){
                select the hospital.options[select the hospital.options.length] = new Option(hospital[i], hospital[i])
            }
        }
