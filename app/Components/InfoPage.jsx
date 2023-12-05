export default function InfoPage(){

    return(
        <div key={item.id} className="p-4 md:w-1/2 w-full">
              <img src={item.coverArt} />
                <p>{item.console}</p>
                <p>{item.genre}</p>
                <p>{item.price}</p>
                <p>{item.space}</p>
                <p>{item.description}</p>
                
          </div>
    )
}