import { CreditCard, List, TrendingUp, Wallet } from "lucide-react";
import Button from "../components/Button";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Home = () => {
  const features: Readonly<Feature[]> = [
    {
      icon: <Wallet className="container-features " />,
      title: "Controle suas finanças",
      description: "Gerencie suas despesas e receitas de forma simples e eficiente.",
    },
    {
      icon: <TrendingUp className="container-features " />,
      title: "Acompanhe suas finanças",
      description: "Acompanhe suas finanças de forma simples e eficiente.",
    },
    {
      icon: <List className="container-features " />,
      title: "Crie categorias",
      description: "Crie categorias para organizar suas finanças.",
    },
    {
      icon: <CreditCard className="container-features " />,
      title: "Transações Ilimtadas",
      description:
        "Adicione quantas transações quiser e mantenha um histórico completo de suas finanças.",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <div className="container-app">
        <section className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Gerencie suas finanças com praticidade
              </h1>
              <p className="text-lg text-white mb-8">
                Uma plantaforma simples e eficiente para controlar suas despesas e receitas.
                Organize sua financas pessoais ou do seu negócio com facilidade.
              </p>
              <div className="flex flex-col ms:flex-row space-y-4 ms:space-y-0 ms:space-x-4">
                <Button className="text-center px-6 py-3">Começar Agora</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gray-900 rounded-xl">
          <div className="container-app">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Recursos do sistema</h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Nossa plantaforma oferece tudo o que você precisa para gerenciar suas finanças.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className=" p-6 bg-gray-800 rounder-xl shadow-lg">
                  <div className="bg-primary-500/10 p-3 rounded-full inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
