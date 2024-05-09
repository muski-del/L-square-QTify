
import {ReactComponent as SearchIcon} from './Search icon.svg'

export default function Search(){
    return (<form style={{
        display: "flex",
        minWidth: "570px"
    }}>
        <input
        placeholder="Search a song of your choice"
        style={{
            flex: 1,
            borderRadius: "8px 0 0 8px",
            padding: "8px"
        }}
        ></input>
                  <button style={{
                width:"66px",
                height:"48px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0 8px 8px 0",
                padding: "8px",
                borderLeft: "none"

            }}>
                <SearchIcon/>
            </button>
            </form>
        
    )
}