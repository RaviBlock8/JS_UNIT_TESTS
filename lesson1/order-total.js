const orderTotal=require('./app')

if(orderTotal({
    items:[
        {name:'Samsung A71',price:20000,quantity:1},
        {name:'Usb cable',price:325,quantity:1},
        {name:'Shipping',price:40,shipping:true}
    ]
})!=20365){
    throw new Error("Check Fail:Suitable test case 1")
}else{
    console.log('test case 1 passed')
}


if(orderTotal({
    items:[
        {name:'Samsung A71',price:20000,quantity:1},
        {name:'Usb cable',price:325,quantity:2},
        {name:'Mi Y3',price:10000,quantity:1},
        {name:'Shipping',price:40,shipping:true}
    ]
})!=30650){
    throw new Error("Check Fail:Suitable test case 2")
}else{
    console.log('test case 2 passed')
}

if(orderTotal({
    items:[
        {name:'Samsung A71',price:20000,quantity:1},
        {name:'Usb cable',price:325,quantity:2},
        {name:'Mi Y3',price:10000},
        {name:'Shipping',price:40,shipping:true}
    ]
})!=30650){
    throw new Error("Check Fail:quantity not provided")
}else{
    console.log('test case 3 passed')
}