const orderTotal=require('./app')

it('Normal test case 1:',()=>{
    expect(orderTotal({
        items:[
            {name:'Samsung A71',price:20000,quantity:1},
            {name:'Usb cable',price:325,quantity:1},
            {name:'Shipping',price:40,shipping:true}
        ]
    })).toBe(20365)
})

it('Normal test case 2:',()=>{
    expect(orderTotal({
        items:[
            {name:'Samsung A71',price:20000,quantity:1},
            {name:'Usb cable',price:325,quantity:2},
            {name:'Mi Y3',price:10000,quantity:1},
            {name:'Shipping',price:40,shipping:true}
        ]
    })).toBe(30650)
})

it('Quantity not specfied',()=>{
    expect(orderTotal({
        items:[
            {name:'Samsung A71',price:20000,quantity:1},
            {name:'Usb cable',price:325,quantity:2},
            {name:'Mi Y3',price:10000},
            {name:'Shipping',price:40,shipping:true}
        ]
    })).toBe(30650)
})

