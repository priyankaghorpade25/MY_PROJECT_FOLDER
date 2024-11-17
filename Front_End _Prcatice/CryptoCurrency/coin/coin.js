
const coinImage=document.getElementById("coin-image");
const coinName=document.getElementById("coin-name");
const coinDesc=document.getElementById("coin-description");
const coinRank=document.getElementById("coin-rank");
const coinPrice=document.getElementById("coin-price");
const coinMarketCap=document.getElementById("coin-cap")
const coinChart=document.getElementById("coin-chart");
const twentyfourbtn=document.getElementById("24h");
const thirtyDayhbtn=document.getElementById("30d");
const threeMonthbtn=document.getElementById("3m");

//fetch coin data by id
const BASE_URL="https://api.coingecko.com/api";
const options={
    method:"GET",
    headers:{
        accept:'application/json',
        'x-cg-demo-api-key':'CG-VEL79UvUWeQbZDDWTvTMfVoY',
    }

}
const urlParams=new URLSearchParams(window.location.search);
console.log(urlParams);
const coinId=urlParams.get("id");

const showLoader=()=>{
    loader.style.display="block";


}
const hideLoader=()=>{
    loader.style.display="none";
   
}



const fetchCoinsDataById=async()=>{
    try{
        showLoader();
        const response=await fetch(`${BASE_URL}/v3/coins/${coinId}`,options);
        const coin= await response.json();
        console.log(coin);
        hideLoader()
        return coin;
       

    }
    catch(err){
        hideLoader();
        console.log(err);
    }
    
}

const displayCoinData=async(coinData)=>{
    coinImage.src=coinData.image.large;
    coinImage.alt=coinData.name;
    coinName.textContent=coinData.name;
    coinDesc.innerHTML=coinData.description.en.split(".");
    coinRank.textContent=coinData.market_cap_rank;
    coinPrice.textContent=`$${coinData.market_data.current_price.usd.toLocaleString()}`;
    coinMarketCap.textContent=`$${coinData.market_data.market_cap.usd.toLocaleString()}`;

}


let CoinChart=new Chart(coinChart, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Price(USD)',
        data: [],//DATAPOINTS ON BOTH X AND Y AXIS
        borderColor:"gold",
        borderWidth: 1
      }]
    },
  
  });

const fetchChartData=async(days)=>{
    try{
        const response=await fetch(`${BASE_URL}/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`,options);
        const priceData=await response.json();
       
        updateChart(priceData.prices);
        
    }
    catch(err){
        console.log(err);

    }
}




const updateChart=(pricesData)=>{
    
    const label=pricesData.map((price)=>{
        let date=new Date(price[0]);
        return date.toLocaleDateString();
    })
    const coindata=pricesData.map(price=>price[1]);

    CoinChart.data.labels=label;
    CoinChart.data.datasets[0].data=coindata;
    CoinChart.update();///given by chart.js


    


}

twentyfourbtn.addEventListener("click",()=>{
    fetchChartData(1);
})

thirtyDayhbtn.addEventListener("click",()=>{
    fetchChartData(30);
})

threeMonthbtn.addEventListener("click",()=>{
    fetchChartData(90);
})
window.onload=async()=>{
    //fetch the data by coin id
    const coinData=await fetchCoinsDataById();
    displayCoinData(coinData);
    twentyfourbtn.click()
    //rendering coins
}