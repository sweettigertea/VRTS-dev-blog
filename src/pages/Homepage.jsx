import React from "react";
import {Link} from "react-router-dom";
import { imgPlaceholder } from "../assets/exportAssets";
import Article from "./Article";

export default function Homepage() {

    const articles=[
        {
            'id':1,
            'title':'Article Title',
            'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
            'cover':imgPlaceholder
        },
        {
            'id':2,
            'title':'Article Title',
            'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
            'cover':imgPlaceholder
        },
        {
            'id':3,
            'title':'Article Title',
            'desc':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, fugit fuga ab beatae molestias perspiciatis dolorum cum similique animi deserunt esse eligendi nam iste perferendis iure! Iure natus sint quia.',
            'cover':imgPlaceholder
        },

    ]


    return (
        <div className='w-full bg-[#f9f9f9] py-[50px]'>
            <div className='max-w-[1240px] mx-auto'>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 text-black">
                    {articles.map((article)=>
                        <div key={article.id} className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                            <img src={article.cover} alt='Image Placeholdersss' className="h-56 w-full object-cover"/>
                            <div className="p-8">
                                <h3 className="font-bold text-2xl my-1">{article.title}</h3>
                                <p className="text-gray-600 text-xl">{article.desc}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};