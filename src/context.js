import React from "react";
import { useContext, useState, createContext, useEffect, useCallback } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext();
// AppContext has provider and consumer
export const useGlobalContext = () => {
 return useContext(AppContext); 
} 

export const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchData = useCallback(async() => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`);
            const data =  await response.json();
            const { drinks } = data;
            if(drinks){
                const newCocktails = drinks.map((drink) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = drink;
                    return {
                        id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass
                    }
                })
                setCocktails(newCocktails);
            }
            else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm])

    useEffect(() => {
      fetchData();
    }, [searchTerm, fetchData])
    

    return (
        <AppContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>
        {children}
        </AppContext.Provider>
    )
}



