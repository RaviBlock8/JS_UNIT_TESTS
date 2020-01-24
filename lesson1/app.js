
const orderTotal=(order)=>{
    const totalPrice=order.items.filter(x=>!x.shipping)
    .reduce((prev,item)=>{
        let quantity=1
        if(item.quantity){
            quantity=item.quantity
        }    
        return prev+(item.price*quantity)
    },0)
    const shippnigItem=order.items.find(item=>!!item.shipping)
    const shippingPrice=totalPrice>25000?0:shippnigItem.price

    return (totalPrice+shippingPrice)
}



module.exports=orderTotal