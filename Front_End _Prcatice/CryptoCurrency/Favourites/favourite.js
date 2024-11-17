const tableBody=document.querySelector(".crypto-table tbody");



const BASE_URL= "https://api.coingecko.com/api";
const options={
    method:"GET",
    headers:{
        accept:'application/json',
        'x-cg-demo-api-key':'CG-VEL79UvUWeQbZDDWTvTMfVoY',
    }

}

const getFvrtCoins=()=>JSON.parse(localStorage.getItem("favCoins"))||[];
const showLoader=()=>{
    loader.style.display="block";


}
const hideLoader=()=>{
    loader.style.display="none";
   
}

const fetchFvrtCoinsById= async (coinIds)=>{
    try{
    

    showLoader()
    const response= await fetch(`${BASE_URL}/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}`,options);
    const fetchedCoins= await response.json();
    console.log(fetchedCoins);
    hideLoader();
     
    return fetchedCoins;
    

    }
    catch(err){
        hideLoader();
        console.log(err);
    }
    

  }



  const renderCoins=async (coinsTodisplay)=>{
    tableBody.innerHTML="";
    console.log("inside render");
    console.log(coinsTodisplay);
    coinsTodisplay.forEach((coin,index)=>{
        
        const row=document.createElement("tr");
        
        row.innerHTML=`
         <tr>
                    <td>${index+1}</td>
                    <td><img src="${coin.image}"alt="${coin.name}" width="24" height="24"> </td>
                    <td>${coin.name}</td>
                    <td>$${coin.current_price.toLocaleString()}</td>
                    <td>$${coin.total_volume.toLocaleString()}</td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                    <td><i class="fa-solid fa-star " id="favorite-icon" ></i></td>
        </tr>
       `
      //on click it should navinagte to coin/coin.html page
     
       row.addEventListener("click",(e)=>{
        window.location.href=`coin/coin.html?id=${coin.id}`

       })
       row.querySelector("#favorite-icon").addEventListener("click",(e)=>{
        console.log("favorite");
        e.stopPropagation();
        handleFavoriteClick(coin.id);

       })
        tableBody.appendChild(row);
})
}

window.onload=async()=>{
    //fetch the fvrt coins
    console.log("under onload");
    const Coins=getFvrtCoins();
    console.log(Coins);
    const fvrtCoinsData=await fetchFvrtCoinsById(Coins);
    

    renderCoins(fvrtCoinsData)

    


    //rebder them on UI
}