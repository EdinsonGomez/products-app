import LoginForm from "../components/LoginForm";
import Card from "../components/base/Card/Card";
import CardContent from "../components/base/Card/CardContent";
import CardHeader from "../components/base/Card/CardHeader";

function LoginPage() {
  return (
    <main className="h-full">
      <section className="h-full">
        <div className="flex h-full w-full justify-center sm:justify-start">
          <div className="hidden lg:block lg:basis-1/2 bg-gradient-to-b from-violet-600 to-teal-500 h-full" />
          <div className="h-full w-full lg:basis-1/2 flex flex-col items-center justify-center">
            <div className="w-[90%]">
              <Card>
                <CardHeader className="text-center">
                  <p>Iniciar sesión</p>
                </CardHeader>
                <CardContent>
                  <LoginForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage