import CardList from '../misc/CardList'
import { robots } from '../misc/robots' 
import {SearchBtn } from '../misc/Buttons'
export default function Home() {
  return (
    <div>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBtn />
      </div>
      
      <CardList robots={robots}/> 
    </div>
  );
}
