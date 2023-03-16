import React, { Component } from 'react';
import './Chart.scss';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DateTimePicker from 'react-datetime-picker';
import Bmi_chart from '../components/bmi_chart';
import BMI from './BMI';
const data = [
    {name: 'BMI', date: '01/03/2023', index: 16}
  , {name: 'BMI', date: '06/03/2023', index: 19.1}

  , {name: 'BMI', date: '08/03/2023', index: 19.9}

  , {name: 'BMI', date: '09/03/2023', index: 16}

  , {name: 'BMI', date: '10/03/2023', index: 16}

  , {name: 'BMI', date: '13/03/2023', index: 24.5}
]
class ChartBMI extends Component {
    render() {
        return (
            <div className='chart-background'>
                <div className='chart-container'>
                    <Bmi_chart data={data}/>
                </div>
            </div>
        )
    }
}

export default ChartBMI;
