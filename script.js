

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete")
    {
        console.log("Ready state")
        initApp();
    }
})

const initApp = () =>{
    const toggle = document.getElementById("check")
    toggle.addEventListener("click", (event)=>{
        // console.log("clicked")
        const monthlyPrices = document.querySelectorAll(".price-monthly")
        const annualPrices = document.querySelectorAll(".price-annual")
        // console.log(monthlyPrices[0].style.display)
        if (monthlyPrices[0].style.display === "none" || monthlyPrices[0].style.display === "")
        {
            monthlyPrices[0].style.display = "inline"
            annualPrices[0].style.display = "none"
            monthlyPrices[1].style.display = "inline"
            annualPrices[1].style.display = "none"
            monthlyPrices[2].style.display = "inline"
            annualPrices[2].style.display = "none"
        } 
        else
        {
            monthlyPrices[0].style.display = "none"
            annualPrices[0].style.display = "inline"
            monthlyPrices[1].style.display = "none"
            annualPrices[1].style.display = "inline"
            monthlyPrices[2].style.display = "none"
            annualPrices[2].style.display = "inline"
        }
    })
}