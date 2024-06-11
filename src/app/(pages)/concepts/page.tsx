"use client";
import { LayoutPages } from "@/app/components/layout";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

export default function ConceptsPage() {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: <span>Store</span>,
      children: (
        <section className="leading-9  text-white flex flex-col gap-8">
          <p>
            <strong>Armazena o Estado Global:</strong>
            <br />
            Toda aplicação Redux possui uma única Store que guarda o estado
            global em um único objeto JavaScript.
          </p>
          <p>
            <strong>É Imutável:</strong> <br />O estado na Store é imutável.
            Quando é necessário atualizar, cria-se um novo estado ao invés de
            modificar o existente.
          </p>
          <p>
            <strong>Responsável por Despachar Ações:</strong> <br />A Store
            fornece o método <code>dispatch(action)</code> para enviar ações que
            descrevem mudanças de estado.
          </p>
          <p>
            <strong>Passa Ações aos Reducers:</strong> <br />
            Quando uma ação é despachada, a Store a encaminha para os reducers,
            que calculam o novo estado com base na ação e no estado atual.
          </p>
          <p>
            <strong>Notifica Inscritos:</strong> <br />A Store permite que
            componentes se inscrevam para serem notificados sobre mudanças de
            estado usando <code>subscribe(listener)</code>.
          </p>
        </section>
      ),
    },
    {
      key: "2",
      label: <span>Action</span>,
      children: (
        <section className="leading-9 text-white flex flex-col gap-8">
          <p>
            As actions são um dos principais conceitos no Redux e servem como a
            única maneira de interagir com a Store. Elas descrevem as intenções
            de mudança no estado da aplicação e são objetos JavaScript que
            representam eventos da aplicação.
          </p>
          <p>
            Uma action no Redux é um objeto JavaScript que deve, no mínimo, ter
            uma propriedade type. O campo type é uma string que indica o tipo de
            ação a ser executada. Além disso, uma action pode conter outros
            campos que fornecem informações adicionais necessárias para a
            execução da ação, como o payload.
          </p>
          <p>
            As actions são fontes de informações, descrevem o que deve ser
            alterado no estado, mas nao dizem como a mudança deve ser feita.{" "}
          </p>
          <p>
            Elas representam eventos que ocorreram na aplicação, como o clique
            de um botão ou o envio de um formulário.
          </p>
        </section>
      ),
    },
    {
      key: "3",
      label: <span>Reducer</span>,
      children: (
        <section className="leading-9 text-white flex flex-col gap-8">
          <p>
            O reducer é um <strong>listener</strong> de eventos que especifica
            como o estado da aplicação deve mudar em resposta a uma ação. Ele é
            responsável por calcular e retornar um novo estado com base no
            estado atual e na ação recebida. É importante lembrar que o reducer
            nunca altera o estado diretamente; em vez disso, ele sempre gera um
            novo estado, seguindo o princípio da imutabilidade.
          </p>
          <p>
            No Redux Toolkit, o createSlice é uma função que facilita a criação
            de reducers e actions associadas em um único passo. Ele abstrai a
            complexidade de definir actions e reducers separadamente.{" "}
          </p>
          <p>
            A estrutura de um reducer contem name: Um identificador único para o
            slice do estado, initialState: O estado inicial do slice, e
            reducers: Um objeto onde as chaves são os nomes das actions e os
            valores são as funções reducer que lidam com essas actions..
          </p>
        </section>
      ),
    },
  ];
  return (
    <LayoutPages>
      <div className="bg-black flex items-center justify-between gap-4 max-w-screen-xl mx-auto p-16 rounded border border-purple-900 w-full">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </LayoutPages>
  );
}
