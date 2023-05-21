import {useState} from "react";
import axios from "axios";

export default function Home(){
	const homePage = async()=>{
		console.log('hi')
		const data = {}

		axios.get("http://localhost:5000/blog/Dharshan").then(response=>{
			const blogData = response.data;
			for (const blog in blogData){
				console.log(blog)
			}
		console.log("done")
		})

		
}
	return(<div><button onClick={homePage}>get blog</button></div>)
}