import React from 'react'
import { useRef } from 'react'


const Pagination = ({arrayPages,currentPage,setCurrentPage,quantityPages}) => {

  const prevPage=()=>{
    if (currentPage-1===0){
        setCurrentPage(quantityPages)
    }else{
        setCurrentPage(currentPage-1)
        
    }
  }

  const nextPage=()=>{
    if (currentPage+1>quantityPages){
        setCurrentPage(1)
    }else{
        setCurrentPage(currentPage+1)   
    }
  }

  const firstPage=()=>{
    setCurrentPage(1)
  }

  const lastPage=()=>{
    setCurrentPage(quantityPages)
  }

  const changePageTo=n=>setCurrentPage(n)
  
  const listNumber = useRef()
  //console.log(listNumber.current)
  return (
    <div className='pagination-style'>
        <div onClick={prevPage} className='pagination-prev-next'>&#60;</div>
        <div onClick={firstPage} className='pagination-prev-next'>&#8230;</div>
        <ul ref={listNumber} className='pagination-number-container'>
            {
                arrayPages?.map(num=>(
                    <li onClick={()=>changePageTo(num)}
                     key={num} 
                     className={currentPage===num ? `page_active`: `page-number`}
                     > 
                    {num}
                     </li>
                ))
            }
        </ul>
        <div onClick={lastPage} className='pagination-prev-next'>&#8230;</div>
        <div onClick={nextPage} className='pagination-prev-next'>&#62;</div>
    </div>
  )
}

export default Pagination