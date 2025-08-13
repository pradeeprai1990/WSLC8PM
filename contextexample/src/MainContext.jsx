import React, { createContext, useState } from 'react'

export let cartContext = createContext()

export default function MainContext({ children }) {

    let [cart, setCart] = useState(0)
    let [wishlist, setwishlist] = useState(0)


    let obj = {
        cart,
        setCart,
        wishlist,
        setwishlist
    }

    return (
        <cartContext.Provider value={obj}>
            {children}
        </cartContext.Provider>
    )
}
