"use client";
import { LayoutPages } from "@/app/components/layout";
import { Tabs, TabsProps } from "antd";
import Image from "next/image";

export default function ArchitecturePage() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span>Estrutura de pastas</span>,
      children: (
        <section className="leading-9  text-white flex  gap-8">
          <p>
            Em aplicativos Next.js, a /app pasta pode residir no nível raiz ou
            ser aninhada em /src/app. Sua lógica Redux deve ser organizada em
            uma pasta separada, ao lado da /app pasta. É uma prática comum
            inserir a lógica Redux em uma pasta /lib
          </p>
          <Image src="/paste.png" alt="architecture" width={600} height={450} />
        </section>
      ),
    },
    {
      key: "2",
      label: <span>Store</span>,
      children: (
        <section className="leading-9 text-white flex  gap-8">
          <p>
            Criamos uma função chamada makeStore, a mesma retorna uma nova loja
            toda vez que é chamada. Com a função makeStore, podemos criar uma
            nova instância de loja para cada solicitação. Embora não tenhamos
            uma variável store exportada, podemos inferir os tipos RootState e
            AppDispatch.
          </p>
          <Image src="/store.png" alt="store" width={600} height={350} />
        </section>
      ),
    },
    {
      key: "3",
      label: <span>Provider</span>,
      children: (
        <section className="leading-9 text-white flex flex-col gap-8">
          <p>
            O StoreProvider é responsável por criar e fornecer a loja Redux para
            a aplicação. Ele garante que a loja seja criada apenas uma vez,
            mesmo se o componente for renderizado várias vezes. Isso é feito
            usando o hook useRef para manter uma referência à instância da loja.
            Se a loja ainda não foi criada, a função makeStore é chamada para
            criá-la. Em seguida, o componente retorna o Provider do React-Redux,
            fornecendo a instância da loja para todos os componentes filhos.
            Isso garante que todos os componentes tenham acesso à mesma
            instância da loja Redux.
          </p>
          <div className="flex gap-8">
            <Image
              src="/provider.png"
              alt="provider"
              width={550}
              height={300}
            />
            <Image
              src="/providerApp.png"
              alt="provider"
              width={550}
              height={300}
            />
          </div>
        </section>
      ),
    },
    {
      key: "4",
      label: <span>Slice</span>,
      children: (
        <section className="leading-9 text-white flex  gap-8">
          <p>
            Neste exemplo o slice user no Redux Toolkit gerencia informações do
            usuário, como a unidade. Ele inicializa o estado com valores padrão
            e possui um único reducer chamado setUnit, responsável por atualizar
            os dados da unidade no estado. O Redux Toolkit simplifica a criação
            de reducers e actions, facilitando o gerenciamento do estado na
            aplicação. slice no Redux Toolkit é uma maneira conveniente de
            definir e organizar a lógica relacionada ao estado em sua aplicação.
            Ele combina definições de estado inicial, reducers e actions em um
            único local, tornando o código mais conciso e fácil de entender.
          </p>
          <Image src="/slices.png" alt="slice" width={600} height={350} />
        </section>
      ),
    },
    {
      key: "5",
      label: <span>Dispatch</span>,
      children: (
        <section className="leading-9 text-white flex  gap-8">
          <p>
            O dispatch é uma função usada para despachar ações para a store
            Redux. No exemplo utilizamos o dispatch para despachar a action
            setUnit sempre que o botão é clicado. A action setUnit é uma ação
            definida pelo seu slice userSlice e é responsável por atualizar a
            unidade no estado Redux com os novos dados fornecidos.
            <br /> O dispatch é essencial para interagir com a store Redux no
            React. Ele permite que você atualize o estado da aplicação enviando
            ações, que são processadas pelos reducers para atualizar o estado de
            acordo com as mudanças desejadas. Isso mantém o fluxo de dados
            previsível e gerenciável em sua aplicação.
          </p>
          <Image src="/dispatch.png" alt="dispatch" width={600} height={350} />
        </section>
      ),
    },
    {
      key: "6",
      label: <span>Selector</span>,
      children: (
        <section className="leading-9 text-white flex gap-8">
          <div className="flex flex-col gap-4">
            <p>
              O useSelector permite selecionar partes específicas do estado
              global do Redux, o que é útil para acessar apenas os dados
              necessários em um componente. Isso ajuda a evitar a
              re-renderização desnecessária
            </p>
            <p>
              Quando o estado selecionado pelo useSelector é atualizado, o
              componente é automaticamente re-renderizado para refletir as
              alterações nos dados. Isso é possível porque o useSelector
              estabelece uma dependência entre o componente e os dados
              selecionados do estado Redux, garantindo que o componente seja
              atualizado sempre que esses dados mudarem.{" "}
            </p>{" "}
          </div>
          <Image src="/selector.png" alt="selector" width={600} height={350} />
        </section>
      ),
    },
  ];
  return (
    <LayoutPages>
      <div className="bg-black flex items-center justify-between gap-4 max-w-screen-xl mx-auto p-16 rounded border border-purple-900">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </LayoutPages>
  );
}
