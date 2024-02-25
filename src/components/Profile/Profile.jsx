import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  // console.log(css);
  return (
    <div className={css.wrapper}>
      <div className={css.profile}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsitem}>
          <span className={css.statsname}>Followers</span>
          <span className={css.value}>{followers}</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.statsname}>Views</span>
          <span className={css.value}>{views}</span>
        </li>
        <li className={css.statsitem}>
          <span className={css.statsname}>Likes</span>
          <span className={css.value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
