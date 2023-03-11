import React, { useState,useEffect } from "react";
// import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Food = () => {
    // const [detail] = useContext(store);
    const [detail,setDetail]=useState([])
    useEffect(()=>{
     fetch("http://localhost:4005/")
    // fetch("https://node-blog-3n9c.onrender.com/")
    .then(res=>(res.json()))
    .then((res)=>setDetail(res))
    },[])
    // console.log(detail);
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Food</h1>
            <h1 style={{ margin: "20px 0px 20px 43.65%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Food" }).map((item) => (
                            <Card key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 200)}
                                author={item.author}
                            />
                        ))
                    }
                </div>

                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Food" }).map((item) => (
                            <SmallCard key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 200)}
                                title={item.title.slice(0, 25)}
                                author={item.author}
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
export default Food;