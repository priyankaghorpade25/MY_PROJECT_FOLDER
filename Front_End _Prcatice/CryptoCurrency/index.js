const loader=document.getElementById("loader");
const tableBody=document.querySelector(".crypto-table tbody")
const prevBtn=document.getElementById("prev-button");
const nextBtn=document.getElementById("next-button");
const searchBar=document.getElementById("search-bar");
const sortPriceAsc=document.getElementById("sort-price-asc");
const sortPriceDesc =document.getElementById("sort-price-desc");
const sortVolumeAsc=document.getElementById("sort-volume-asc");
const sortVolumeDesc =document.getElementById("sort-volume-desc");
const sortCapAsc=document.getElementById("sort-cap-asc");
const sortCapDesc =document.getElementById("sort-cap-desc");
localStorage.removeItem("favCoins");


//call api to fect crypto details;
const BASE_URL= "https://api.coingecko.com/api";
let coins=[]
const ITEMS_PER_PAGE=10;
let currentPage=1;
const options={
    method:"GET",
    headers:{
        accept:'application/json',
        'x-cg-demo-api-key':'CG-VEL79UvUWeQbZDDWTvTMfVoY',
    }

}



//to fetch sp {url,options}
const fetchCoins=async (page=1)=>{


    try{
        showLoader()
        const response=await fetch(`${BASE_URL}/v3/coins/markets?vs_currency=usd&per_page=${ITEMS_PER_PAGE}&page=${page}`,options);
        coins= await response.json();
        console.log(coins);
        

    }
    catch(err){
        console.log(err);
        
    }
    finally{
        hideLoader();
    }
    return coins;
    

}

const showLoader=()=>{
    loader.style.display="block";


}
const hideLoader=()=>{
    loader.style.display="none";
   
}

const getFavCoins=()=> JSON.parse(localStorage.getItem("favCoins"))||[];




const saveFavCoin=(favorites)=>{
    localStorage.setItem("favCoins",JSON.stringify(favorites));

}
const toggleFavorite=(coinId)=>{
    //get the fvrt coindata from localstorage
    let favCoins=getFavCoins();
    console.log("inside toggle")
    console.log(favCoins)
    //check if the coin is alraedy in fvrt array
    //true: so remove this from list

    //false: add as afvrt
    if(favCoins.includes(coinId)){
      favCoins=favCoins.filter((id)=>id !==coinId);
    }
    else{
        favCoins.push(coinId);

    }
    console.log(favCoins);
    return favCoins;
    

}

const handleFavoriteClick=(coinId)=>{
    console.log("inside handle")
    let favCoins=toggleFavorite(coinId);
    console.log(coinId);
    console.log(favCoins);
    saveFavCoin(favCoins);
    renderCoins(coins,currentPage,10);

}

const renderCoins=async (coinsTodisplay,currentPage,items_Per_page)=>{
    tableBody.innerHTML="";
    console.log("inside render");
    const favCoins=getFavCoins();
    console.log(favCoins);

    const start=(currentPage-1) * ITEMS_PER_PAGE;
    console.log(start);
    coinsTodisplay.forEach((coin,index)=>{
        
        const row=document.createElement("tr");
        
        row.innerHTML=`
         <tr>
                    <td>${start+index+1}</td>
                    <td><img src="${coin.image}"alt="${coin.name}" width="24" height="24"> </td>
                    <td>${coin.name}</td>
                    <td>$${coin.current_price.toLocaleString()}</td>
                    <td>$${coin.total_volume.toLocaleString()}</td>
                    <td>${coin.market_cap.toLocaleString()}</td>
                    <td>
                    
                    <i id="favorite-icon" class="fa-solid fa-star ${isfavCoins ? "favorite" : ""}"></i>
                    </td>

        </tr>
       `
      //on click it should navigate to coin/coin.html page
     
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




//prev btn functionality
const prevBtnHandler=async ()=>{
    if(currentPage>1){
        currentPage--;
        const coinsTodisplay=await fetchCoins(currentPage)
        renderCoins(coinsTodisplay,currentPage,10);
        updatePaginationControl();
    }

    

}
//next btn functionality
const nextBtnHandler=async ()=>{
    currentPage++;
    console.log(currentPage);
    const coins=await fetchCoins(currentPage);
    console.log(coins);
    renderCoins(coins,currentPage,10);
    updatePaginationControl();
}

// page ui control
const updatePaginationControl = () => {
    if (currentPage === 1) {
      prevBtn.disabled = true;
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.disabled = false;
      prevBtn.classList.remove("disabled");
    }
  
    if (coins.length <10) {
      nextBtn.disabled = true;
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.disabled = false;
      nextBtn.classList.remove("disabled");
    }
  };


  const fetchSearchResultById= async (filteredCoins)=>{
    try{

    const response= await fetch(`${BASE_URL}/v3/coins/markets?vs_currency=usd&ids=${filteredCoins.join(",")}`);
    const fetchedCoins= await response.json();
    console.log(fetchedCoins);
    return fetchedCoins;
     

    }
    catch(err){
        console.log(err);
    }
    

  }


  //to get the coindetails by searchquery
  const fetchSearchResult=async (searchQuery)=>{
    try{
        
            showLoader();
            console.log("147");
            const response = await fetch(`${BASE_URL}/v3/search?query=${searchQuery}`,options);
            console.log(response);
            
            const searchData=await response.json();
            console.log(searchData);
            const filteredData=searchData.coins.map((coin)=>coin.id);
            const finalCoinData=await fetchSearchResultById(filteredData);
            hideLoader()
            return  finalCoinData;
    }
    catch(err){
        console.log(err);
        hideLoader()
    }
    
    


  }

  //to handle serach functionality
const handleSearchInput= async (e)=>{

    let searchQuery=e.target.value;
    console.log(searchQuery);
    if(searchQuery.length>1){
        //get coinsdata
         const searchedCoins=await fetchSearchResult(searchQuery);

         //render coins
         console.log(searchedCoins);
         renderCoins(searchedCoins,1,10);

         //pagination control
         prevBtn.style.display="none";
         nextBtn.style.display="none";
        

    }
    
}


const sortByPrice=(order)=>{
    console.log("Under sort")
    
    coins.sort((a,b)=>{
        order ==="asc"
        ? a.current_price - b.current_price
        : b.current_price - a.current_price
        

    })
    renderCoins(coins,currentPage,10);
    updatePaginationControl();

}

const sortByVolume=(order)=>{
    console.log("Under sort volume")
    
    coins.sort((a,b)=>{
        order ==="asc"
        ? a.total_volume - b.total_volume
        : b.total_volume - a.total_volume
        

    })
    renderCoins(coins,currentPage,10);
    updatePaginationControl();

}

const sortByCap= (order)=>{
    console.log("Under sort cap")
    
    coins.sort((a,b)=>
        order ==="asc"
        ? a.market_cap - b.market_cap
        : b.market_cap - a.market_cap
    )
    renderCoins(coins,currentPage,10);
    updatePaginationControl();

}


prevBtn.addEventListener("click",prevBtnHandler);
nextBtn.addEventListener("click",nextBtnHandler);
searchBar.addEventListener("keyup",handleSearchInput);
sortPriceAsc.addEventListener("click",()=>sortByPrice("asc"));
sortPriceDesc.addEventListener("click",()=>sortByPrice("desc"));
sortVolumeAsc.addEventListener("click",()=>sortByVolume("asc"));
sortVolumeDesc.addEventListener("click",()=>sortByVolume("desc"));
sortCapAsc.addEventListener("click",()=>sortByCap("asc"));
sortCapDesc.addEventListener("click",()=>sortByCap("desc"));


window.onload=async ()=>{
    const coinsData=await fetchCoins(currentPage);
    console.log(coinsData);
    renderCoins(coinsData,1)
    updatePaginationControl();


}





