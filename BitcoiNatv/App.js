
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice/';
import HistoryGraphic from './src/components/HistoryGraphic/';
import QuotationsList from './src/components/QuotationsList/';
import Quotationitem from './src/components/QuotationsList/Quotationitems';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
}


function url(qtdDays){
  const date = new Date();
  const listLastDays = qtdDays
  const end_date = 
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate()- listLastDays)
  const start_date = 
  `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${start_date}&end=${end_date}`

}


async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json()
  let selectListQuotations = returnApi.bpi
  const queryCoinsList = Object.keys(selectListQuotations.map((key)=>{
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  })
  let data = queryCoinsList.reverse();
  return data

}



export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar backgroundColor='#f50d41' barStyle="dark-content" />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationsList/>
      <Quotationitem/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
