import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AccountCard } from "../../components/AccountCard/AccountCard"
import { accounts } from "./mock_data"
import { toggleEdit } from "../../features/user";
import { fetchUser } from "../../services/user";
import { selectUser } from "../../utils/selector";
import { useNavigate } from "react-router-dom";
import { UpdateUserForm } from "../../components/UpdateUserForm/UpdateUserForm";
import './UserPage.scss';

export const UserPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, data, isEditingName } = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUser);
  }, [dispatch])

  useEffect(() => {
    if (status === 'rejected') {
      navigate("/login");
    }
  }, [status, navigate])

  return (
    <>
      {(status === 'pending' || status === 'updating') && <div>Chargement...</div>}
      {status === "resolved" &&
        <main className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />{!isEditingName && `${data?.firstName} ${data?.lastName} !`}</h1>
            {isEditingName ? <UpdateUserForm /> : <button className="edit-button" onClick={() => dispatch(toggleEdit())}>Edit Name</button>}
          </div>
          <h2 className="sr-only">Accounts</h2>
          {accounts.map((account, index) => (
            <AccountCard key={index} title={account.title} amount={account.amount} description={account.description} />
          ))}
        </main>
      }
    </>
  )
}