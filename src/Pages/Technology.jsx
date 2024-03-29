import React, { useState,useEffect } from "react";
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

export const Technology = () => {
    // const [detail] = useContext(store);
    const [detail,setDetail]=useState([])
    useEffect(()=>{
     fetch("https://node-blog-project-4wrw.onrender.com/")
    .then(res=>(res.json()))
    .then((res)=>setDetail(res))
    },[])
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{ margin: "10px 5px", display: "inline-block" }}>Top Posts</h1>

            <div className="main__container">
                <div className='rightbar'>
                    {
                        detail.filter((article) => { return article.category === "Technology" }).map((item) => (<Card
                            key={item.id}

                            // techId={item.id}
                            articleid={item.id}
                            imgUrl={item.img}
                            description={item.description.slice(0, 200)}
                            title={item.title}

                        />))
                    }
                </div>
                <div className="sidebar">
                    {
                        detail.filter((article) => { return article.category === "Technology" }).map((item) => (
                            <SmallCard
                            key={item.id}
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

export default Technology