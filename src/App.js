import React from 'react';
//import Cards from './componenets/Cards'
//import Chart from './componenets/Chart'
//import CountryPicker from './componenets/CountryPicker'

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from './api'

class App extends React.Component {
    async componentDidMount(){
        const data = await fetchData();
        console.log(data)
    }
    render() {
        return(
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
  
export default App;