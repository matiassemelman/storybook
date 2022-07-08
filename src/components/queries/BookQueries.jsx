const BookQueries = ({text, className, onClick}) => {
  return (
    <>
   <h1>BookQueries</h1>
   <br />
   <button className={className} onClick={onClick}>{text}</button>
    </>
  )
}

export default BookQueries