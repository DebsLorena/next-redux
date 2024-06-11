import { LayoutPages } from "@/app/components/layout";

export default function FlowPage() {
  return (
    <LayoutPages>
      <div className="bg-black flex items-center justify-between gap-4 max-w-screen-xl mx-auto p-16 rounded border border-purple-900 w-full">
        <h2 className="text-3xl"></h2>
        <div className="w-full flex gap-8">
          <div className="text-white flex flex-col gap-8">
            <strong>Fluxo</strong>
            <p>
              O fluxo do Redux normalmente começa com uma ação, que pode ser
              desencadeada por um clique ou outro evento programado.
            </p>{" "}
            <p>
              Quando ocorre um evento, como um clique, uma função de manipulação
              de eventos é acionada e despacha uma action. Esta action contém um
              tipo (type) e um payload com os dados necessários para a alteração
              desejada. Em seguida, a action é enviada para a Store.
            </p>{" "}
            <p>
              {" "}
              Dentro da Store, o reducer entra em ação. Ele recebe duas
              entradas: a action e o estado atual (state). O reducer contém a
              lógica necessária para processar os dados fornecidos pela action.
              Com base nessa lógica, o reducer gera um novo estado.{" "}
            </p>
            <p>
              Após a criação do novo estado, a Store atualiza a interface do
              usuário (UI). Na interface, utilizamos o useSelector (em
              aplicações React) para obter os dados atualizados do Redux e
              refletir essas mudanças na UI. Essa atualização garante que a UI
              permaneça sincronizada com o estado global da aplicação.
            </p>
          </div>
          <iframe
            style={{ border: "none" }}
            width="800"
            height="450"
            src="https://whimsical.com/embed/7ZMgxsye5kKDCCPWM59h45"
          ></iframe>
        </div>
      </div>
    </LayoutPages>
  );
}
