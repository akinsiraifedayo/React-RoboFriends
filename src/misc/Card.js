import 'tachyons'
export default function Card({robot}) {
    const {name, id, email} = robot
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 outline">
            <img src={`https://robohash.org/${id}?200x200`} />
            <div className="tc">
                <h2 className='f4 lh-copy'>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );  
}