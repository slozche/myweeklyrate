import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Main = (props) => {
    const week = props.week
    const [rate, setRate] = React.useState(Array.from({ length: 7 }, (v, i) => parseInt(Math.random() * 5 + 1)))
    const [circle, setCircle] = React.useState(Array.from({ length: 5 }, (v, i) => i))
    let averageRate = rate.reduce((acc, item) => acc += item, 0) / 7

    const rateHandler = () => {
        setRate(rate.map((item) => item = 0))
    }

    return (
        <Wrap>
            <div className="container">
                <h2>당신의 한주는 어떠셨나요?</h2>
                {week.map((item, id) => {
                    return (
                        <div key={id} className="rate">
                            <h2>{item}</h2>
                            {circle.map((v, i) => {
                                if (i < rate[id]) {
                                    return (
                                        <div className="on"></div>
                                    )
                                } else {
                                    return (
                                        <div className="off"></div>
                                    )
                                }
                            })}
                            <Link to={`/detail/${id}`}>
                                <button className="btn" />
                            </Link>
                        </div>
                    )
                })}            
                <div className="average">
                    <h2>평균 평점</h2>
                    <h2 className="average-item">{averageRate.toFixed(1)}</h2>
                    <button onClick={rateHandler}>Reset</button>
                </div>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    .container {
        width: 50vw;
        min-width: 600px;
        height: 100vh;
        min-height: 1000px;
        margin: 40px auto;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
    }
    .container > h2 {
        margin: 40px;
        font-size: 24px;
    }

    .rate {
        width: 40vw;
        min-width: 600px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
        align-item: center;
    }
    .rate > h2 {
        font-size: 20px;
        vertical-align: middle;
    }
    .rate > .on {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        margin: 12px 6px;
        background-color: #FFD24C;
    }
    .rate > .off {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        margin: 12px 6px;
        background-color: #FFE69A;
    }
    
    .btn {
        width: 0;
        height: 0;
        margin: 12px 0px 12px 20px;
        border-top: 18px solid transparent;
        border-bottom: 18px solid transparent;
        border-right: 18px solid transparent;
        border-left: 30px solid #92B4EC;
        background-color: transparent;
        cursor : pointer;
    }

    .average {
        width: 480px;
        height: 200px;
        padding: 16px 0;
        border-radius: 5px;
        margin: 40px auto;
        background-color: rgba(146, 180, 236, 0.2);
    }
    .average > h2 {
        font-size: 20px;
    }
    .average > .average-item {
        font-size: 30px;
    }
    .average > button {
        color : white;
        font-size : 15px;
        font-weight : bold;
        background : #92B4EC;
        border-radius: 5px;    
        border : 1px solid #92B4EC;
        cursor : pointer;
        width: 100px;
        height: 50px;
        margin: 5px;
    }
`

export default Main