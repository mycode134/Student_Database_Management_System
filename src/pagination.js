import './App.css';
function Pagination({total,recods,update}){
    let n=Math.ceil(total/recods)
    console.log(n)
    let page=[]
    for(let i=1; i<=n; i++){
        page.push(i)
    }
    console.log(page)

    return(
        <div>
            <ul className="pagination">
                {page.map((p)=>(
                    <li className="page-item">
                        <a className="page-link" onClick={()=>{update(p)}}>{p}</a>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default Pagination;