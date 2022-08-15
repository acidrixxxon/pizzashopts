import React from 'react'
import { AiOutlineSearch,AiOutlineClose } from 'react-icons/ai'
import ProductService from '../../Services/ProductService'
import { SearchResultInterface } from '../../types'
import './_Search.scss'
import { debounce } from 'lodash'
import Spinner from '../common/Icons/Spinner/Spinner'

const Search = () => {
    const [ searchQuery,setSearchQuery ] = React.useState<string>('')
    const [ searchResults,setSearchResults ] = React.useState<null | SearchResultInterface[]>(null)
    const [ loading,setLoading ] = React.useState(false)

    console.log('Результати поиска',searchResults)

    const onInputChange = (value: string):void => {
        setSearchQuery(value)
        debounceFetchFunction(value)
    }

    const debounceFetchFunction = React.useCallback(debounce(async (value: string) => {
        setSearchResults(null)
        setLoading(true)
        const data = await ProductService.search(value)

        setSearchResults(data)
        setLoading(false)
    },250),[])

    const searchEl = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleOutsideClick = (event: any) => {
            const path = event.path || (event.composedPath && event.composedPath());
            if (!path.includes(searchEl)) {
                setSearchQuery('')
                setSearchResults(null)
                setLoading(false)
            }
        }

        document.addEventListener('click',handleOutsideClick)

        return () => document.removeEventListener('click',handleOutsideClick)
    },[])

    return (
        <div id='search' ref={searchEl}>
            <div className="search__input">
                <AiOutlineSearch className='search__searchIcon'/>

                <input 
                    className='search__field'
                    type="text"  
                    value={searchQuery} 
                    onChange={(e) => onInputChange(e.target.value)} 
                    placeholder='Пошук піцци...' />

                    {searchQuery !== '' && <AiOutlineClose className='search__clearIcon'/>}
            </div>

            {searchResults !== null || loading === true ? 
                <div className="search__results">
                {loading && <Spinner />}

                {searchResults !== null && (
                    searchResults.length > 0 ? (
                        <ul className='search__resultsList'>
                            {searchResults.slice(0,5).map((item) => {
                                return <li className='search__resultsItem' key={item.id}>
                                            <div className="search__resultsImage">
                                                <img src={item.imageUrl} alt="" />
                                            </div>

                                            <div className="search__resultsContent">
                                                <h4 className="search__resultsTitle">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </li>
                            })}
                        </ul>
                    ) : 'Ничего не найдено'
                )}
            </div> : null}
        </div>
    )
}

export default Search