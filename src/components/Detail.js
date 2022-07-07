import React from "react";
import styled from "styled-components"
import { useParams, Link } from 'react-router-dom';

const Detail = (props) => {
    const week = props.week
    const id = useParams().id
    const [randomRate, setRandomRate] = React.useState(parseInt(Math.random() * 5 + 1))
    const [circle, setCircle] = React.useState(Array.from({ length: 5 }, (v, i) => i))

    const randomRateHandler = (event) => {
        setRandomRate(parseInt(event.target.id) + 1)
    }

    return (
        <Wrap>
            <div className="container">
                <h2><span>{week[id]}</span> 의 평점은?</h2>
                <div className="circle-wrap">
                    {circle.map((v, i) => {
                        if (i < randomRate) {
                            return (
                                <div className="on" key={i} id={i} onClick={randomRateHandler}></div>
                            )
                        } else {
                            return (
                                <div className="off" key={i} id={i} onClick={randomRateHandler}></div>
                            )
                        }
                    })}
                </div>
                <Link to="/">
                    <button className="btn">남기기</button>
                </Link>
            </div>
        </Wrap>
    )
}

const Wrap = styled.div`
    
    .container {
        width: 50vw;
        min-width: 600px;
        height: 30vh;
        min-height: 350px;
        margin: 40px auto;
        border: 1px solid #bdbdbd;
        border-radius: 5px;
    }
    .container > h2 {
        margin: 40px 0;
    }
    .container > h2 > span {
        background : orange;
        color : white;
        border-radius: 5px;
        font-weight: 900;
        padding : 3px;
    }
    .circle-wrap {
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-item: center;
    }
    .circle-wrap > .on {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        margin: 12px 6px;
        background-color: #FFD24C;
    }
    .circle-wrap > .off {
        width: 36px;
        height: 36px;
        border-radius: 18px;
        margin: 12px 6px;
        background-color: #FFE69A;
    }   

    button {
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

export default Detail