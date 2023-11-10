import Info from "./Info";

function User(props){
const {number,string,boolean,obj} = props;
  return (
    <div>
 <Info number={number} string={string}boolean = {boolean}obj={obj} />
    </div>
  )
}


export default  User;