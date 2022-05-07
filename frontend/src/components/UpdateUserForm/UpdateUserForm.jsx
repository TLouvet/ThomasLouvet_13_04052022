import { useDispatch, useSelector } from "react-redux"
import { cancelUpdate } from "../../features/user";
import { selectUser } from "../../utils/selector";
import { updateUser } from "../../services/user";
import './UpdateUserForm.scss';

/**
 * On user page, update form for first & last name
 */
export const UpdateUserForm = () => {

  const dispatch = useDispatch();
  const { data } = useSelector(selectUser);

  const onCancel = () => {
    dispatch(cancelUpdate());
  }

  const onsubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ firstName: e.target[0].value, lastName: e.target[1].value }));
  }

  return (
    <form onSubmit={onsubmit}>
      <div>
        <input
          type='text'
          defaultValue={data?.firstName || ""}
          placeholder="Enter your first name "
          className="user-update-input"
          aria-label="enter your first name"
        />
        <input
          type='text'
          defaultValue={data?.lastName || ""}
          placeholder="Enter your last name "
          className="user-update-input"
          aria-label="enter your last name"
        />
      </div>
      <div>
        <input type='submit' value='Save' className="user-update-btn" />
        <button type='button' className="user-update-btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  )
}