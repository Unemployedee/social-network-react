import dialogsListStyle from "./dialogsListStyle.module.css";
import DialogUser from "./dialogUser/dialogUser";

function DialogsList(props) {
  let dialogsListArr = props.dialogsListData.map((user) => (
    <DialogUser userName={user.userName} id={user.id} />
  ));
  return <ul className={dialogsListStyle.dialogsUserList}>{dialogsListArr}</ul>;
}

export default DialogsList;
