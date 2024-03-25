import Button from "../components/base/Button";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <main className="h-full">
      <section className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-4xl text-center md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-teal-500 bg-clip-text text-transparent">
            Bienvenidos a Products App
          </h1>
          <p className="text-lg text-center md:text-2xl mx-3 font-semibold">
            Aqui podras encontrar todo lo que estas buscando
          </p>
          <div className="flex gap-x-4 md:gap-x-10 lg:gap-x-12 px-4 mt-8">
            <Button>
              <Link to="/app/products">
                Ver productos
              </Link>
            </Button>

            <Button>
              <Link to="/login">
                Iniciar sesión
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WelcomePage