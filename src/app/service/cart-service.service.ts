import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  state : any = new BehaviorSubject({
    counter:0,
    cartDataArray:[],
  })



  getstateOfCart(){
    return this.state.asObservable()
  }

  AddToCart(product:any){
    let newCartArray: any[] = [...this.state.value.cartDataArray];
    if(newCartArray.some((pro:any)=>pro.id ==product.id )){
    const findIndex= newCartArray.findIndex((e:any)=>e.id == product.id)
    newCartArray[findIndex].quantity++
   }else{
    product.quantity=1
    newCartArray.push(product)
   }
const newCount = newCartArray.length

this.state.next({
  ...this.state,
  cartDataArray:newCartArray,
  counter:newCount,
})
  }


  increment(id :any){


    let newCartArray: any[] = [...this.state.value.cartDataArray];
      const index = this.state.value.cartDataArray.findIndex((item :any)=> item.id === id);
      newCartArray[index].quantity+=1
      // console.log( newCartArray[index].quantity)
      this.state.next({
          ...this.state,
          cartDataArray:newCartArray,
          counter:newCartArray.length

      })

  }



decrement(id:any){
  let newCartArray: any[] = [...this.state.value.cartDataArray];
    const index = this.state.value.cartDataArray.findIndex((item:any) => item.id === id);
    if( newCartArray[index].quantity > 0 ){
      newCartArray[index].quantity-=1
        if(newCartArray[index].quantity === 0){
         const splic : any =  newCartArray.splice(index, 1);
         newCartArray=newCartArray.filter((e : any)=> e.id != splic.id)
        }
    }
    this.state.next({
        ...this.state,
        cartDataArray:newCartArray,
        counter:newCartArray.length,
    })
  }
  removeFromCart(id:any){
    const indexToRemove = this.state.value.cartDataArray.findIndex((item:any) => item.id ===id);
            if (    indexToRemove !== -1   ) {
          const newCart=  this.state.value.cartDataArray.splice(indexToRemove, 1);
         const cart= this.state.value.cartDataArray.filter((e:any)=> e.id !=newCart.id)
         this.state.next({
            ...this.state,
            cartDataArray:cart,
            counter:cart.length,
          })

        }
  }
}



