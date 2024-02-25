import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className={css.friendimg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendname}>{name}</p>
      <p className={isOnline ? css.textonline : css.textoffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

{
  /* ВАРІАНТ №2*/
}
{
  /*<p> {isOnline ? (
          <p className={css.textonline}>Online</p>
        ) : (
          <p className={css.textoffline}>Offline</p>
        )} </p> */
}
{
  /* ВАРІАНТ №3 
  логіку для класа записуєм в p , логіку для текста між p
      <p className={clsx(css.textoffline, {
        [css.textonline]: isOnline,
      })}>
              {isOnline ? 'Online' : 'Offline'}
              </p> */
}

export default FriendListItem;
