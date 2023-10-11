import { sub } from "../types"

interface Props {
    subs: Array<sub>
}

// export default function List ({subs}: Props) {
   const List = ({subs}: Props) => {
    const renderList = (): JSX.Element[] => {
      return subs.map(sub => {
             return (
             <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
             )
          })
    }

    return (
        <ul>
        {renderList()}
      </ul>
    )
}

export default List