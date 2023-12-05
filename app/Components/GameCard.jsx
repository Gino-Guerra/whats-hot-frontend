export default function GameCard({ item }){
    return(
        <div class="flex min-h-screen items-center justify-center ">
        <div class="mx-auto px-5">
          <div class="max-w-xs cursor-pointer rounded-lg bg-amber-500 p-2 shadow duration-150 hover:scale-105 hover:shadow-md ">
            <img class="w-full rounded-lg object-cover object-center" src="https://images.unsplash.com/photo-1580477371194-4593e3c7c6cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="product" />
            <div>
              <div class="my-6 flex items-center justify-between px-4">
                <p class="font-bold text-red-700">Product Name</p>
                
              </div>
              <div class="my-4 flex items-center justify-between px-4">
                <p class="text-sm font-semibold text-zinc-300">{item.age}</p>
                
              </div>
              <div class="my-4 flex items-center justify-between px-4">
                <p class="text-sm font-semibold text-red-700">Second option</p>
                
              </div>
              <div class="my-4 flex items-center justify-between px-4">
                <p class="text-sm font-semibold text-red-700">Third option</p>
                
              </div>
              <div class="my-4 flex items-center justify-between px-4">
                <p class="text-sm font-semibold text-red-700">Fourth option</p>
                
              </div>
            </div>
          </div>
        </div>
      </div> 
            
    )
    
}