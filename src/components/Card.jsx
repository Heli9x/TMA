import React from 'react'
import './card.css'

function Card(props) {
    if(props.type == 1){
          return (
            <>
                <div className="card big">
                    <div className="title">
                        <div className="tag">
                            <i className={props.icon}></i>
                            {props.tag}
                        </div>
                    </div>
                    <div className="num">{props.title}</div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            </>
            )
    }
    if(props.type == 2){
        return(
            <>
                <div className="card medium">
                    <div className="profile">
                        <div className="img">
                            <img src={props.imgURL?props.imgURL:"#"} alt="picture" />
                        </div>
                        <div className="text">
                            <div className="title">{props.title? props.title:"Reserved"}</div>
                            <div className="subtitle">{props.date? props.date:"TBD"}</div>
                        </div>
                    </div>
                    {
                        typeof props.tag!="string"? props.tag.map((tagChild, index)=>(
                            <div className="tag " key={index}>
                                <i className={tagChild[1]}></i>
                                {tagChild[0]}
                            </div>
                        )):(
                            <div className="tag">
                                <i className={props.icon}></i>
                                {props.tag}
                            </div>
                        )
                    }
                </div>
            </>
        )
    }

}

export default Card