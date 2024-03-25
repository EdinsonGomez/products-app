import { useSelector } from "react-redux";
import Button from "../base/Button";
import { Link } from "react-router-dom";

function UserSection() {
  const { login } = useSelector((state) => state.auth);

  return (
    <>
      {login?.user?.email ? (
        <div className="flex flex-col justify-center items-center gap-y-1">
          <img
            src={`https://avatar.iran.liara.run/username?username=${login?.user?.name + login?.user?.last_name}`}
            width={45}
          />
          <small className="text-xs text-black/60">{login?.user.email}</small>
        </div>
      ) : (
        <Button
          type="button"
        >
          <Link to="/login">
            Iniciar sesión
          </Link>
        </Button>
      )}
    </>
  )
}

export default UserSection