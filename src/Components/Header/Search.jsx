import "./search.css"
const Search = () => {
    return (
        <div classNameName={"search__content"}>
         <input id={"search"} className={"search__input"} type={"text"} placeholder={"Search"} />
            <button id={"search__button"} className={"header__searchbtn"} type={"submit"}>
                <i className="fas fa-search fa-rotate-90"></i>
            </button>
        </div>
    )
}
export default Search;