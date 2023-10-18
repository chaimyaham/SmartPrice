"use client"

import { FormEvent, useState } from "react"

const isValidAmazonProductUrl = (url : string)=>{
  try {
    const  parsedURL = new URL(url);
    const hostname= parsedURL.hostname;
    if(
      hostname.includes('amazon.com') ||
       hostname.includes('amazon.') || 
       hostname.includes('amazon')
      )
       {
        return true;

    }
    
  } catch (error) {
    return false;
    
  }

  return false;


}

const SearchBar = () => {
  const [searchPrompt, setsearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{

      event.preventDefault();
      const isValidLink = isValidAmazonProductUrl(searchPrompt);
      if(!isValidLink) return alert('please enter a valid amazon link');

      try {
        setIsLoading(true);

        // Scrape the product page
        

        
      } catch (error) {
        console.log(error);

        
      }finally{

        setIsLoading(false);
      }
      

    }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>

        <input type="text"
        value={searchPrompt}
        onChange={(e)=>setsearchPrompt(e.target.value)}
        placeholder="Enter Product Link" 
        className="searchbar-input"/>
        <button type="submit" 
        className="searchbar-btn"
        disabled = {searchPrompt ===''}
        >
           {isLoading ? 'searching' : 'Search'}
        </button>

    </form>
  )
}

export default SearchBar