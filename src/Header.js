import styled from './Header.module.css'

const Header = ({ click, submit, value, change }) => {
    return (
        <header>
            <div className={styled.logo} onClick={click}>Movies</div>
            <form onSubmit={submit} className={styled.search}>
                <input name='searchMovie' value={value} onChange={change} placeholder="Search movie"></input>
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

export default Header