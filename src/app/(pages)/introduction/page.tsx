import { LayoutPages } from "@/app/components/layout";

export default function IntroductionPage() {
  return (
    <LayoutPages>
      {" "}
      <div className="bg-black flex items-center justify-between gap-4 max-w-screen-xl mx-auto p-16 rounded border border-purple-900 ">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl">
            <strong>O que é o Redux?</strong>
          </h2>
          <p className="leading-9 ">
            Redux é uma biblioteca JavaScript especializada em gerenciamento de
            estado, projetada para tornar a administração do estado de
            aplicações mais previsível, centralizada e eficiente. Ela é
            particularmente útil para a manutenção de grandes aplicativos com
            estados complexos, simplificando o processo de desenvolvimento e
            facilitando a depuração.
          </p>

          <p className="leading-9 ">
            O principal conceito do Redux é o gerenciamento centralizado de
            estado. Em Redux, todo o estado da aplicação é mantido em um único
            objeto denominado store. Essa abordagem de manter um estado único e
            imutável é o que torna o Redux extremamente poderoso e eficiente
            para gerenciar estados complexos em aplicações. Essa centralização
            facilita o rastreamento de mudanças de estado, tornando o
            desenvolvimento mais organizado e a depuração mais simples e eficaz.
          </p>
        </div>
      </div>
    </LayoutPages>
  );
}
