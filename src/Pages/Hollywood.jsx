import React, { useState,useEffect } from "react";
// import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';


    const Hollywood = () => {
        const [detail,setDetail]=useState([])
        useEffect(()=>{
             fetch("https://node-blog-project-4wrw.onrender.com/")
            .then(res=>(res.json()))
            .then((res)=>setDetail(res))
        },[])
        console.log(detail)
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
            <h1 style={{ margin: "10px 5px", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Hollywood" }).map((item) => (
                            <Card
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                            />
                        ))
                    }

                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Hollywood" }).map((item) => (
                            <SmallCard
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 200)}
                                title={item.title.slice(0, 25)}
                            />
                        ))
                    }
                    <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hollywood;