import CardList from '../misc/CardList'
import { robots } from '../misc/robots' 
import {SearchBtn } from '../misc/Buttons'
export default function Home() {
  return (
    <div>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBtn />
        <CardList robots={robots}/> 
      </div>
      
    </div>
  );
}
