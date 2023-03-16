import React, { Component } from 'react';
import './BMI.scss';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DateTimePicker from 'react-datetime-picker';
import logo from '../assets/images/mau.svg'
import logo1 from '../assets/images/mau1.svg'
import blood from '../assets/images/chartblood.svg'
import blood1 from '../assets/images/chartblood1.svg'
import heart from '../assets/images/heart.svg'
import heart1 from '../assets/images/heart1.svg'
import heart2 from '../assets/images/heart2.svg'
import pressure from '../assets/images/nuoc.svg'
import pressure1 from '../assets/images/nuoc2.svg'
import pressure2 from '../assets/images/nuoc1.svg'
import ChartBMI from './Chart_bmi';
import { Link } from 'react-router-dom';
class BMI extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
            date: new Date(),
            height: '',
            weight: '',
            result_bmi: 20.1,
        }
    }
    calcalatorBmi = (height, weight) => {
        height=(height/100)
        var BMI = weight/(height*height);
        BMI = BMI.toFixed(2);
        this.setState({
            result_bmi : BMI,
        })
        
    }
    handleOnchangeHeight = e => {
        this.setState({
            height : e.target.value,
        })
    }

    handleOnchangeWeight = e => {
        this.setState({
            weight : e.target.value,
        })
    }
    handleLogin = async() => {
        this.setState({
            errMessage: '',
        })
        try{
            // await handleLoginApi(this.state.username, this.state.password)
        }catch(e){
            console.log(e)
            this.setState({
                errMessage: e.message,
            })
        }
    }
    hidePassword = () => {
        this.setState({
            isShowPassword : !this.state.isShowPassword,
        })
    }
    render() {
        return (
            <div className='bmi-background'>
                <div className='bmi-container'>
                    <div className='bmi-content row'>
                        <div className='header'>
                            <span className='text-over'>Healthy OverView</span>
                            <span className='date'>December 14,2023</span>
                        </div>
                        <div className='blood'>
                        <div className='blood-sugar'>
                            <div className='img-sugar'>
                                <div className='sugar-content'>
                                    <img src= {logo} className='img-sugar-1' />
                                    <img src= {logo1} className='img-sugar-2' />
                                
                                </div>
                                <span className='text'>Blood Sugar</span>
                                
                            </div>
                            <div className='text-content'>
                                <span className='number'>30</span>
                                <span className='text'>mg / dL</span>
                            </div>
                            <div className='img-chart'>
                                <div className='text-blood-normal'>
                                    <span className='text-normal'>Normal</span>
                                </div>
                                <div className='chart'>
                                    <img src= {blood} className='blood1' width='173px' height='72px' />
                                    <img src= {blood1} className='blood2' />
                                </div>
                            </div>

                        </div>
                        <div className='heart-rate'>
                        {/* <div className='blood-heart'> */}
                            <div className='img-heart'>
                                <div className='heart-content'>
                                    <img src= {heart} className='img-heart-1' />
                                </div>
                                <span className='text'>Heart Rate</span>
                                
                            </div>
                            <div className='text-content-heart'>
                                <span className='number'>98</span>
                                <span className='text'>bpm</span>
                            </div>
                            <div className='img-chart'>
                                <div className='text-heart-normal'>
                                    <span className='text-normal'>Normal</span>
                                </div>
                                <div className='chart-heart'>
                                    <img src= {heart1} className='heart1' width='173px' height='72px' />
                                    <img src= {heart2} className='heart2' />
                                </div>
                            </div>

                        {/* </div> */}
                        </div>
                        <div className='blood-pressure'>
                        <div className='img-pressure'>
                                <div className='pressure-content'>
                                    <img src= {pressure} className='img-pressure-1' />
                                </div>
                                <span className='text'>Blood Pressure</span>
                                
                            </div>
                            <div className='text-content-pressure'>
                                <span className='number'>102</span>
                                <span className='text'>/ 72mmhg</span>
                            </div>
                            <div className='img-chart'>
                                <div className='text-pressure-normal'>
                                    <span className='text-normal'>Normal</span>
                                </div>
                                <div className='chart-pressure'>
                                    <img src= {pressure1} className='pressure1' width='173px' height='72px' />
                                    <img src= {pressure2} className='pressure2' />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    {/* <div className='col-12'>
                            <button 
                                className='btn-bmi mt-3 ml-10' onClick={() => {
                                    this.calcalatorBmi(this.state.height, this.state.weight);
                                    console.log(this.state.result_bmi);
                                }}>
                                    Xem Biểu Đồ
                            </button>
                    </div> */}
                    <div className='chart-paint'>
                        <ChartBMI />
                    </div>                 
                </div>
                    
                </div>

                <div className='bmi-container1'>
                    <div className='header-bmi'>
                        <span className='text-bmi'>BMI Calculator</span>
                        <div className='week'>
                                <span className='text-week'>Last Week</span>
                                <div className='img'></div>
                                {/* <img src="https://cdn.iconscout.com/icon/free/png-512/down-arrow-16-460295.png?f=avif&w=256" alt="Mũi tên" width="30" height="30" className='arrow' /> */}
                        </div>
                    </div>
                    <div className='content-container'>
                        <div className='content-bmi'>
                            <div className='height'>
                                <div className='img'></div>
                                <div className='height-text'>
                                    <span className='text'>Height</span>
                                    <span className='text'>{this.state.height}175 cm </span>
                                </div>
                            </div>

                            <div className='weight'>
                                <div className='img'></div>
                                <div className='weight-text'>
                                    <span className='text'>Weight</span>
                                    <span className='text'>{this.state.weight}61 kg</span>
                                </div>
                            </div>
                        </div>
                        <div className='content-bmi-result'>
                            <div className='text-content'>
                                <span className='text'>Body Mass Index (BMI)</span>
                            </div>
                            <div className='text-result'>
                                <span className='text-1'>{this.state.result_bmi}</span>
                                <span className='text-2'>You're Healthy</span>
                            </div>
                            <div className='text-proceed'>
                                <div className='proceed-1'></div>
                                <div className='proceed-2'></div>
                                <div className='proceed-3'>
                                    <span>15</span>
                                    <span>20</span>
                                    <span>25</span>
                                    <span>30</span>
                                    <span>40</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                            <div className='imformation'>
                                <span className='text-body-1'>Body Measurements</span>
                                <div className='text-check-span'>
                                    <span className='text-check'>Last checked 2 Days Ago</span>
                                </div>
        
                                <div className='inverted'>
                                    <span>Inverted Triangle Body Shape</span>
                                </div>
                                <div className='advice'>
                                    <strong>Chỉ số BMI của bạn cho thấy rằng sức khỏe của bạn khá tốt </strong>
                                    <br></br>
                                    <span className='text-advice'>xem gợi ý về dinh dưỡng</span>
                                </div>

                                <div className='btn-advice'>
                                    <button className='btn-bmi'>
                                        <Link to='./nutrition'>Go to</Link> 
                                    </button>
                                </div>
                                
                            </div>
                            <div className='male'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BMI;
