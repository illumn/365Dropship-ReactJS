import "./search.css"
const Search = () => {
    return (
        <div className="search__content">
         <input id="search" class="search__input" type="text" placeholder="Search" />
            <button id="search__button" class="header__searchbtn" type="submit">
                <i class="fas fa-search fa-rotate-90"></i>
            </button>
        </div>
    )
}
export default Search;